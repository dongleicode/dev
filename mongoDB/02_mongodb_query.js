const { MongoClient, ObjectId } = require('mongodb');
// or as an es module:
// import { MongoClient } from 'mongodb'

// Connection URL
const url = 'mongodb://localhost:27017';
const client = new MongoClient(url);

// Database Name
const dbName = 'test';

async function main() {
  // Use connect method to connect to the server
  await client.connect();
  console.log('Connected successfully to server');
  //取出数据库
  const db = client.db(dbName);
  const collection = db.collection('students');



 /**
  * 等于  :
  * 大于  $gt
  * 小于等于： $lte
  * 大于等于：$gte
  * 模糊匹配：$regex: //
  * 排序：.sort({score: 1})
  * 分页：.sort({score: 1}).skip(5).limit(5)
  */

 //等于 =
//   const s = await collection.find({
//     score: 92
//   }).toArray();

 //大于： $gt
//   const s = await collection.find({
//     score: {
//         $gt: 92
//     }
//   }).toArray();

   //小于： $lt
//    const s = await collection.find({
//     score: {
//         $lt: 92
//     }
//   }).toArray();
//小于等于： $lte
// const s = await collection.find({
//     score: {
//         $lte: 92
//     }
//   }).toArray();

//模糊匹配：$regex: //
// const s = await collection.find({
//     name: {
//         $regex:/红$/  //以红结尾 包含红
//     }
//   }).toArray();

//排序：score: -1 倒叙；score: 1正序
// const s = await collection.find({
//   }).sort({score: 1}).toArray();

//   console.log(s)


//分页 开始页码：skip()  limit：每页数据长度
const s = await collection.find({
}).sort({score: 1}).skip(5).limit(5).toArray();

//查询集合的记录总数
let count = await collection.countDocuments()

console.log(s, count)

  return 'done.';
}

main()
  .then(console.log)
  .catch(console.error)
  .finally(() => client.close());