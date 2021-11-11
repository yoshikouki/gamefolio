import type { NextApiRequest, NextApiResponse } from 'next'
import {PrismaClient} from "@prisma/client";

type AllUsersApiResponse = User[]

interface User {
  email: string,
  name: string | null,
}

const handler = async  (
  req: NextApiRequest,
  res: NextApiResponse<AllUsersApiResponse>
) => {
  const prisma = new PrismaClient()
  const allUsers = await prisma.user.findMany()
  res.status(200).json(allUsers)
}

export default handler
