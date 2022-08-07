// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import prisma from '../../utils/prisma'

export default async function handler (
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === "GET") {
    const funnyQuotes = await prisma.quote.findMany();
    return res.json(
      funnyQuotes.map((quote) => ({
        body: quote.body,
        author: quote.author,
      }))
      )
    }

  const { body, author, id } = req.body;
  if (req.method === "POST") {
    const newData = await prisma.quote.create({
      data: {
        id: id,
        body: body,
        author: author
      }
    })
    res.json(newData)
    } else {
      res.status(400).json({ error: "Invalid request" })
    }
  }
