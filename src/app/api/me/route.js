import { NextResponse } from "next/server";

export const GET = async () => {
  return NextResponse.json({
    ok: true,
    fullName: "Tanapat Choeichomsri",
    studentId: "650610767",
  });
};
