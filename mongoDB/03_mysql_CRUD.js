var mysql      = require('mysql');
var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : 'dt202041',
  database : 'test'
});
 
connection.connect();
 
// connection.query('SELECT 1 + 1 AS solution', function (error, results, fields) {
//   if (error) throw error;
//   console.log('The solution is: ', results[0].solution);
// });
 

//新增
// connection.query(`insert into students (name, score) values ('董汀', 1000)`, function (error, results, fields) {
//   if (error) throw error;
//   console.log(results.affectedRows)
// });


//更新
// connection.query(`update students set name = 'wind' where id = 15`, function (error, results, fields) {
//   if (error) throw error;
//   console.log(results.affectedRows)
// });

//删除
connection.query(`delete from students where id = 15`, function (error, results, fields) {
  if (error) throw error;
  console.log(results.affectedRows)
});

connection.end();