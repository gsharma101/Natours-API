const dotenv = require('dotenv');
dotenv.config({ path: './config.env' });
const mongoose = require('mongoose');

const DB = process.env.DATABASE_LOCAL;

mongoose.connect(DB)
  .then(() => console.log('✅ DB connection successful!'))
  .catch(err => console.error('❌ DB connection error:', err));

const app = require('./app');

console.log(process.env);

const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log(`✅ App running on port ${port}...`);
});
