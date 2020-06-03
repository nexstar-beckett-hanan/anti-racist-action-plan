const { Pool } = require('pg');

const PG_URI = 'postgres://ebpguuxs:J8M4YbQ2Qxx_gjLbLd_GpnxD2AM514sp@ruby.db.elephantsql.com:5432/ebpguuxs';

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
