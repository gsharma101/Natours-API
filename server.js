const dotenv = require('dotenv');
dotenv.config({ path: './config.env' });
const mongoose = require('mongoose');

const DB = process.env.DATABASE.replace(
  '<PASSWORD>',
  process.env.DATABASE_PASSWORD,
);

mongoose
  .connect(DB, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false,
  })
  .then(() => {
    // console.log(con.connection);
    console.log('DB connection successful!');
  });

const app = require('./app');

console.log(process.env);

const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log('App running on port ${port}...');
});
