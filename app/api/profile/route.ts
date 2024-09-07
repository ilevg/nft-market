import { NextResponse } from "next/server";
import jwt from "jsonwebtoken";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();
const JWT_SECRET = process.env.JWT_SECRET || "secretkey";

// Обрабатываем GET запросы
export async function GET(request: Request) {
  // Извлекаем заголовок авторизации
  const authHeader = request.headers.get("authorization");

  if (!authHeader) {
    return NextResponse.json(
      { message: "Authorization header missing" },
      { status: 401 }
    );
  }

  const token = authHeader.split(" ")[1]; // "Bearer {token}"
  if (!token) {
    return NextResponse.json({ message: "Token missing" }, { status: 401 });
  }

  try {
    // Декодируем токен и получаем userId
    const decodedToken = jwt.verify(token, JWT_SECRET) as jwt.JwtPayload;

    if (!decodedToken || !decodedToken.userId) {
      return NextResponse.json({ message: "Invalid token" }, { status: 401 });
    }

    const userId = decodedToken.userId;

    // Ищем пользователя в базе данных по userId
    const user = await prisma.user.findUnique({
      where: { id: userId },
      select: { id: true, name: true, email: true }, // Выбираем нужные поля для ответа
    });

    if (!user) {
      return NextResponse.json({ message: "User not found" }, { status: 404 });
    }

    // Возвращаем профиль пользователя
    return NextResponse.json({ user }, { status: 200 });
  } catch (error) {
    return NextResponse.json(
      { message: "Invalid or expired token" },
      { status: 401 }
    );
  }
}
