const { Pool } = require('pg');
require('dotenv').config();

const PG_URI = `postgres://${process.env.DB_USER}:${process.env.DB_PASS}@ruby.db.elephantsql.com:5432/${process.env.DB_USER}`;

// create a new pool using the connection string above
const pool = new Pool({
  connectionString: PG_URI,
});

// export an object that contains a property called query,
// which is a function that returns the invocation of pool.query() after logging the query
// This will be required in the controllers to be the access point to the database
module.exports = {
  query: (text, params, callback) => {
    console.log('executed query', text);
    return pool.query(text, params, callback);
  },
};
