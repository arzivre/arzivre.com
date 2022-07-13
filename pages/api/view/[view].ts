import type { NextApiRequest, NextApiResponse } from 'next'
import { prisma } from 'lib/prisma'

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    const slug = req.query.view!.toString() as string

    if (req.method === 'POST') {
      const newOrUpdatedViews = await prisma.views.upsert({
        where: { slug },
        update: {
          count: {
            increment: 1,
          },
        },
        create: {
          slug,
          count: 1,
        },
      })

      return res.status(200).json({
        total: newOrUpdatedViews.count.toString(),
      })
    }

    if (req.method === 'GET') {
      const views = await prisma.views.findUnique({
        where: {
          slug,
        },
      })

      return res.status(200).json({ total: views?.count.toString() })
    }
  } catch (e: any) {
    return res.status(500).json({ message: e.message })
  }
}
