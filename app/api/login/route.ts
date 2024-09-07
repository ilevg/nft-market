// app/api/login/route.ts
import { NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

const prisma = new PrismaClient();

export async function POST(request: Request) {
  const { email, password } = await request.json();

  if (!email || !password) {
    return NextResponse.json(
      { error: "Missing email or password" },
      { status: 400 }
    );
  }

  try {
    // Найти пользователя по email
    const user = await prisma.user.findUnique({
      where: { email },
    });

    if (!user) {
      return NextResponse.json({ error: "User not found" }, { status: 404 });
    }

    // Сравнить введённый пароль с хешированным
    const isPasswordValid = await bcrypt.compare(password, user.password);

    if (!isPasswordValid) {
      return NextResponse.json({ error: "Invalid password" }, { status: 401 });
    }

    // Если данные валидны, создаём сессию
    const sessionExpires = new Date();
    sessionExpires.setHours(sessionExpires.getHours() + 1); // сессия на 1 час

    const session = await prisma.session.create({
      data: {
        userId: user.id,
        expires: sessionExpires,
      },
    });

    // Создать токен JWT
    const token = jwt.sign(
      { userId: user.id, sessionId: session.id },
      process.env.JWT_SECRET || "secretkey",
      { expiresIn: "1h" }
    );

    return NextResponse.json({ token, user });
  } catch (error) {
    return NextResponse.json({ error: "Error during login" }, { status: 500 });
  }
}
