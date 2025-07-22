const mongoose = require('mongoose');
const request = require('supertest');
const { expect } = require('chai');
const app = require('../app');
const Tour = require('../models/tourModel'); // adjust the path if needed

const DB = 'mongodb://127.0.0.1:27017/natours-test'; // Use a separate DB for tests

describe('Natours API - Tours', function () {
  this.timeout(10000); // Extend timeout if needed for DB ops

  // Connect to test DB before running tests
  before(async () => {
    await mongoose.connect(DB, {
      useNewUrlParser: true,
      useUnifiedTopology: true
    });

    // Seed sample data
    await Tour.create([
      {
        name: 'Test Tour',
        duration: 5,
        maxGroupSize: 10,
        difficulty: 'easy',
        ratingsAverage: 4.7,
        ratingsQuantity: 37,
        price: 497,
        summary: 'This is a test tour',
        description: 'Description here'
      }
    ]);
  });

  // Clean up after tests
  after(async () => {
    await Tour.deleteMany(); // Clear test data
    await mongoose.disconnect(); // Disconnect from DB
  });

  it('should return a list of all tours', async () => {
    const res = await request(app).get('/api/v1/tours');

    console.log(res.body); // Debug if needed

    expect(res.status).to.equal(200);
    expect(res.body).to.have.property('status', 'success');
    expect(res.body).to.have.property('results').that.is.a('number');
    expect(res.body.data).to.have.property('tours').that.is.an('array');
    expect(res.body.data.tours[0]).to.include.keys('name', 'duration', 'price');
  });
});
