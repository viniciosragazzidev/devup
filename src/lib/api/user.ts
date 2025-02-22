"use server";
import { UserCreateType } from "@/types/created";
import { cookies } from "next/headers";
import { fetchAPI } from "../utils_s";

export async function registerUser(data: UserCreateType) {
  const user = JSON.stringify(data);

  return fetchAPI("/users/create", {
    method: "POST",
    body: user,
  });
}

export async function loginUser({
  email,
  password,
}: {
  email: string;
  password: string;
}) {
  const data = await fetchAPI("/users/login", {
    method: "POST",
    body: JSON.stringify({ email, password }),
  });

  const token = data.token;

  if (token) {
    (await cookies()).set("token", token, {
      httpOnly: true, // Prevents client-side JavaScript from accessing the cookie
      secure: process.env.NODE_ENV === "production", // Use secure in production
      sameSite: "strict", // Protects against CSRF
      maxAge: 60 * 60 * 24 * 7, // 7 days
    });
    return { message: "Login realizado com sucesso", token };
  }
}

export async function getAllUsers() {
  return fetchAPI("/users");
}

export async function getUser() {
  const API_URL = process.env.NEXT_PUBLIC_API_URL || "http://localhost:3333";

  const token = (await cookies()).get("token")?.value;

  if (!token) return null;
  const response = await fetch(`${API_URL}/user`, {
    credentials: "include",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  });

  const data = await response.json();

  if (data.error) return null;
  return data;
}
