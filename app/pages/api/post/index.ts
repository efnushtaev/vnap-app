import { options } from '../auth/[...nextauth]'
import { getServerSession } from "next-auth/next"
import prisma from '../../../lib/prisma';
import { getSession } from 'next-auth/react';

// POST /api/post
// Required fields in body: title
// Optional fields in body: content
export default async function handle(req, res) {
  const { title, content } = req.body;
  // const session = await getSession({ req });

  const sess = await getServerSession(req, res, options);

  // const sessionPrsed = await JSON.stringify(sess)
  console.log('-----------------------')
  console.log('req: ', req.body)
  // console.log('session: ', session?.user?.email)
  console.log('sess: ', sess)
  const result = await prisma.post.create({
    data: {
      title: title,
      content: content,
      author: { connect: { email: sess?.user?.email } },
    },
  });
  res.json(result);
}