import { DB, readDB, writeDB } from "@/app/libs/DB";
import { checkToken } from "@/app/libs/checkToken";
import { nanoid } from "nanoid";
import { NextResponse } from "next/server";

export const GET = async () => {
  readDB();
  return NextResponse.json({
    ok: true,
    rooms: true,
    totalRooms: true
  });
};

export const POST = async (request) => {
  try{
    const payload = checkToken();
    roomId = payload.roomId;
    role = payload.role;
  } catch {
    return NextResponse.json(
      {
        ok: false,
        message: "Invalid token",
      },
      { status: 401 }
    );
  }
}

  readDB();
  const roomName = payload.roomName;
  if(roomName=)
  return NextResponse.json(
    {
      ok: false,
      message: `Room ${"replace this with room name"} already exists`,
    },
    { status: 400 }
  );

  const roomId = nanoid();

  //call writeDB after modifying Database
  writeDB();

  return NextResponse.json({
    ok: true,
    //roomId,
    message: `Room ${"replace this with room name"} has been created`,
  });
};
