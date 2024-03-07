import { prisma } from '@server/db';
import bcrypt from 'bcrypt';
import type { GetServerSidePropsContext } from 'next';
import type { DefaultSession, NextAuthOptions } from 'next-auth';
import { getServerSession } from 'next-auth';
import Credentials from 'next-auth/providers/credentials';

declare module 'next-auth' {
  interface Session extends DefaultSession {
    user: {
      id: string;
      // ...other properties
      // role: UserRole;
    } & DefaultSession['user'];
  }

  // interface User {
  //   // ...other properties
  //   // role: UserRole;
  // }
}

export const authOptions: NextAuthOptions = {
  session: {
    strategy: 'jwt',
    maxAge: 86400,
  },
  providers: [
    Credentials({
      name: 'Credentials',
      credentials: {
        username: { label: 'Username', type: 'text' },
        password: { label: 'Password', type: 'password ' },
      },
      authorize: async (credentials) => {
        const user = await prisma.user.findUnique({
          where: {
            username: credentials?.username,
          },
        });

        if (!user) {
          return null;
        }

        const isPasswordMatched = await bcrypt.compare(
          credentials?.password ?? '',
          user.password
        );

        if (!isPasswordMatched) {
          return null;
        }

        return user;
      },
    }),
  ],
  pages: {
    signIn: '/admin',
  },
};

export const getServerAuthSession = (ctx: {
  req: GetServerSidePropsContext['req'];
  res: GetServerSidePropsContext['res'];
}) => {
  return getServerSession(ctx.req, ctx.res, authOptions);
};
