import { NextRequest, NextResponse } from 'next/server';
import prisma from '../../../prisma/db';
import bcrypt from 'bcryptjs';
import { userSchema } from '../../../validationSchemas/users';
import { use } from 'react';

interface Props {
  params: { id: string };
}

export async function PATCH(request: NextRequest, { params }: Props) {
  const body = await request.json();
  const validation = userSchema.safeParse(body);
  if (!validation.success) {
    return NextResponse.json(validation.error.format(), { status: 400 });
  }
  const user = await prisma.user.findUnique({
    where: { id: parseInt(params.id) },
  });

  if (!user)
    return NextResponse.json({ messge: 'User not found.' }, { status: 404 });

  if (body?.password) {
    const hashPassword = await bcrypt.hash(body.password, 10);
    body.password = hashPassword;
  }

  if (user.username !== body.username) {
    const duplicatedUser = await prisma.user.findUnique({
      where: { username: body.username },
    });
    if (duplicatedUser) {
      return NextResponse.json(
        { message: 'Duplicated username' },
        { status: 409 }
      );
    }
  }

  const updateUser = await prisma.user.update({
    where: { id: user.id },
    data: { ...body },
  });

  return NextResponse.json(updateUser);
}
