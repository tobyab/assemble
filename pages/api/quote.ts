// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import prisma from '../../utils/prisma'

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === 'GET') {
    const funnyQuotes = await prisma.quote.findMany();
    return res.json(
      funnyQuotes.map((quote) => ({
        body: quote.body,
        author: quote.author,
        updated_at: quote.updated_at
      }))
      )
    }

  if(req.method === "POST") {
    const newData = await prisma.quote.create({
      data: {
        body,
        author
      }
    })
    return res.status(200).json({
      body: newData.body,
      author: newData.author
    })
  }
  }

  /*
    return res.json(
      quote.map((entry) => ({
        id: entry.id.toString(),
        body: entry.body,
        created_by: entry.created_by,
        updated_at: entry.updated_at
      }))
    );
    */