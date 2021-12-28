import { getToken } from "next-auth/jwt";
import { NextResponse } from "next/server";

export async function middleware(req) {
  //If the user logs in successfully, there should be a token that we can access like the following 
  const token = await getToken({ req, secret: process.env.JWT_SECRET });
  const {pathname} = req.nextUrl;

  //If the following conditions are met, only then requests are allowed
  //If it is a request for fetching next-auth session or provider. Also, If token exits
  if (pathname.includes("/api/auth") || token) {
    return NextResponse.next();
  }

  //if there is no token and the user is requesting a protected route, redirect them to login 
  if (!token && pathname !== "/login") {
    return NextResponse.redirect("/login");
  }
}