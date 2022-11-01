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
  //从数据库中取出集合对象
  const collection = db.collection('students');
  //从集合中取出文档对象

  //异步创建
//   await collection.insertMany([
//     {name: 'dl', score: 100}
//   ])

//   //update
//   await collection.updateMany({name: 'dl'}, {
//     $set: {
//         name: 'donglei'
//     }
//   })

  //delete
//   await collection.deleteMany({
//     _id: ObjectId("63609a024edc953edfc58156")
//   })

  await collection.deleteMany({
    name: 'donglei'
  })


  const s = await collection.find({}).toArray();
  console.log(s)





  return 'done.';
}

main()
  .then(console.log)
  .catch(console.error)
  .finally(() => client.close());