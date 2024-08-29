import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import { PrismaAdapter } from "@next-auth/prisma-adapter";
import { PrismaClient } from "@prisma/client";
import bcrypt from "bcrypt";

// Инициализация Prisma Client
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

        // Поиск пользователя по email
        const user = await prisma.user.findUnique({
          where: { email: credentials.email },
        });

        // Проверка наличия пользователя и правильности пароля
        if (
          user &&
          (await bcrypt.compare(credentials.password, user.password))
        ) {
          // Возвращаем объект пользователя с типами, совместимыми с NextAuth
          return {
            id: user.id.toString(), // Приведение id к строке
            email: user.email,
            name: user.name || null,
          };
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
    async session({ session, token }) {
      // Обработка информации с токена и добавление данных в сессию
      if (token) {
        session.user = {
          id: token.id as string, // Приведение id к строке
          email: token.email as string,
          name: token.name as string | null,
        };
      }
      return session;
    },
    async jwt({ token, user }) {
      // Добавление данных пользователя в JWT токен
      if (user) {
        token.id = user.id;
        token.email = user.email;
        token.name = user.name;
      }
      return token;
    },
  },
});

export async function GET(request: Request) {
  // Обработка GET-запросов для NextAuth
  return new Response("GET requests not handled");
}

export async function POST(request: Request) {
  // Обработка POST-запросов для NextAuth
  return authHandler(request);
}
