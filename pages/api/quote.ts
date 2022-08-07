import type { NextApiRequest, NextApiResponse } from 'next'
import prisma from '../../utils/prisma'

export default async function handler (
  req: NextApiRequest,
  res: NextApiResponse
) {
  // gets the quotes to return and render
  if (req.method === "GET") {
    const funnyQuotes = await prisma.quote.findMany();
    return res.json(
      funnyQuotes.map((quote: { body: any; author: any; id: any;}) => ({
        body: quote.body,
        author: quote.author,
        id: quote.id
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
    return res.status(200).json({
      id: newData.id.toString(),
      body: newData.body,
      author: newData.author
    })
  }
}
