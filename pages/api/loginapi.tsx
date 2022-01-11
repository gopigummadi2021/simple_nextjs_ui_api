import type { NextApiRequest, NextApiResponse } from 'next'
const { connectToDatabase } = require('../../lib/mongodb');
const ObjectId = require('mongodb').ObjectId;
//API for Get Login Details from Mongo DB
export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const name=req.body.username;
  const pwsd=req.body.password;
  console.log("name" +name);
 
   const { db } = await connectToDatabase();
  const data = await db
    .collection("user")
    .count({ name:name,password:pwsd})
   console.log("ucnt:"+data);
  res.status(200).json(data);
}
