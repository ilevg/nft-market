import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import { PrismaAdapter } from "@next-auth/prisma-adapter";
import { PrismaClient } from "@prisma/client";
import bcrypt from "bcrypt";

const prisma = new PrismaClient();

const authHandler = NextAuth({
  providers: [
    CredentialsProvider({
      credentials: {
        email: { label: "Email", type: "text" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        if (!credentials) {
          throw new Error("No credentials provided");
        }

        const user = await prisma.user.findUnique({
          where: { email: credentials.email },
        });

        if (
          user &&
          (await bcrypt.compare(credentials.password, user.password))
        ) {
          return { ...user, id: user.id }; // Возвращаем пользователя с id
        } else {
          throw new Error("Invalid credentials");
        }
      },
    }),
  ],
  adapter: PrismaAdapter(prisma),
  pages: {
    signIn: "/auth/page",
    signOut: "/auth/signout",
    error: "/auth/error",
    verifyRequest: "/auth/verify-request",
  },
  session: {
    strategy: "jwt", // Использование JWT для сессий
  },
  callbacks: {
    async session({ session, user }) {
      if (session.user) {
        session.user.id = user.id as string; // Добавляем id в сессию
      }
      return session;
    },
  },
});

export async function GET(request: Request) {
  // Обработка GET-запросов, если это необходимо
  return new Response("GET requests not handled");
}

export async function POST(request: Request) {
  // Обработка POST-запросов для NextAuth
  return authHandler(request);
}
