var mysql      = require('mysql');
var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : 'dt202041',
  database : 'test'
});
 
connection.connect();
let userName = '小黑'
let id = 97

//数学操作符
// let sql = 'SELECT * FROM students where score >= ?';
// console.log(sql)
// connection.query(sql, [97], function (error, results, fields) {
//     if (error) throw error;
//     console.log(results);
//   //   console.log(results.affectedRows)
//   });

//模糊查询
// let sql = 'SELECT * FROM students where name like ?';
// console.log(sql)
// connection.query(sql, ['不%'], function (error, results, fields) {
//     if (error) throw error;
//     console.log(results);
//   //   console.log(results.affectedRows)
//   });

//排序:  倒叙 desc ; 正序： asc
// let sql = 'SELECT * FROM students order by score asc'; 
// console.log(sql)
// connection.query(sql, function (error, results, fields) {
//     if (error) throw error;
//     console.log(results);
//   //   console.log(results.affectedRows)
//   });


  //排序:  分页  
// let sql = 'SELECT * FROM students order by score asc limit 0,5 '; //第一页(当前页码1-1)*5
// let sql = 'SELECT * FROM students order by score asc limit 5,5 '; //第二页(当前页码2-1)*5
// let sql = 'select * from students order by score asc limit 10,5 '; //第三页(当前页码3-1)*5
// connection.query(sql, function (error, results, fields) {
//     if (error) throw error;
//     console.log(results);
//   });



//表数据集合
let sql = 'select count(id) as total from students'; 
connection.query(sql, function (error, results, fields) {
    if (error) throw error;
    console.log(results[0].total);
  });

connection.end();