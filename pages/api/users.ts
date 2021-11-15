import type {NextApiRequest, NextApiResponse} from 'next'
import {PrismaClient} from "@prisma/client";

type AllUsersApiResponse = User[]

interface User {
  email: string,
  name: string | null,
}

const handler = async (
  req: NextApiRequest,
  res: NextApiResponse<AllUsersApiResponse>
) => {
  const prisma = new PrismaClient()
  if (req.method === 'POST') {
    const params = JSON.parse(req.body)
    const user = {
      email: params.email,
      name: params.name,
    }
    await prisma.user.create({data: user})
    res.status(200).json([user])
  } else {
    const allUsers = await prisma.user.findMany()
    res.status(200).json(allUsers)
  }
}

export default handler
