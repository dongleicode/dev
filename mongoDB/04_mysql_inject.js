var mysql      = require('mysql');
var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : 'dt202041',
  database : 'test'
});
 
connection.connect();
let userName = '小黑'
let id = 9
// let password = 'xx' or 'a' = 'a'
// let sql = 'SELECT * FROM test.students where name = '+ '"' +userName + '"' +' and password =' + '"' + password+ '"';


let sql = 'SELECT * FROM test.students where name = ? and id = ?';
console.log(sql)

//删除
connection.query(sql, [userName, id], function (error, results, fields) {
  if (error) throw error;
  console.log(results[0]);
  
//   console.log(results.affectedRows)
});

connection.end();