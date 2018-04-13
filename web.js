const pg = require('pg');
var dateFormat = require('dateformat');
var time = require('time')(Date);

const config = {
  user: 'lfgygpstcvjdxq',
  password: 'a63c3ae2cd91549bd10213043cda0acae643c92b92321e52a4936b9bf0962f03',
  host: 'ec2-54-225-230-142.compute-1.amazonaws.com',
  port: 5432,
  database: 'd386o1e8kv0a3h',
  ssl: true
};
const client = new pg.Client(config);
client.connect()

module.exports = {

   entry: function(datain,resb,callback) {
   var now = new Date();
   var date=dateFormat(now, "yyyy-mm-dd HH:MM:ss");
   var query = {
     text: 'INSERT INTO webstats(accessdatetime,pagename) VALUES($1,$2)',
     values: [date,datain],
  }
   client.query(query, (err, res) => {
     if (err) {
       console.log(err.stack)
     }
   })
      data={};
      data.response="SUCCESS";

   callback(null,data,resb);
   }
}
