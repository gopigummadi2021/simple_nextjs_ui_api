import { NextApiRequest, NextApiResponse } from "next";

const { connectToDatabase } = require('../../lib/mongodb');

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    const { db } = await connectToDatabase();
    const data = await db
      .collection("info")
      .insertOne((req.body));
    res.status(200).json(data);
  } catch (e) { res.status(500).json({ error: e }) }
}