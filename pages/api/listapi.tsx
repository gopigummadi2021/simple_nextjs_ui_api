import { NextApiRequest, NextApiResponse } from "next";
const { connectToDatabase } = require('../../lib/mongodb');

//API for Get Application data from Mongo db
export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { db } = await connectToDatabase();
  const data = await db
    .collection("info")
    .find({})
    .sort({ metacritic: -1 })
    .toArray();
  res.status(200).json(data);
  
}