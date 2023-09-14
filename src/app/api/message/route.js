import { DB, readDB, writeDB } from "@/app/libs/DB";
import { checkToken } from "@/app/libs/checkToken";
import { nanoid } from "nanoid";
import { NextResponse } from "next/server";

export const GET = async (request) => {
  readDB();
  const roomId = request.nextUrl.searchParams.get("roomId");
  if(!roomId){
    return NextResponse.json(
        {
          ok: false,
          message: `Room is not found`,
        },
        { status: 404 }
      );
  };
  if(roomId){
    const roomIdList = [];
    for (const TheRoom of DB.messages){
      if(TheRoom.roomId === roomId){
        roomIdList.push(TheRoom.roomId)
      }
    }

  //   const messageIdList = [];
  //   for (const message of DB.messages){
  //     if(message.roomId === roomId){
  //       messageIdList.push(message.roomId)
  //     }
  //   }
  // }
};

export const POST = async (request) => {
  const body = await request.json();
  const roomId = body;
  const foundRoom = DB.messages.find((x) => x.roomId === roomId);
  readDB();
  if(!foundRoom){
    return NextResponse.json(
      {
        ok: false,
        message: `Room is not found`,
      },
      { status: 404 }
    );
  }

  const messageId = nanoid();

  writeDB();
  if(foundRoom){
    return NextResponse.json({
      ok: true,
      messageId,
      message: "Message has been sent",
    });
  }
};

export const DELETE = async (request) => {
  const payload = checkToken();

  // return NextResponse.json(
  //   {
  //     ok: false,
  //     message: "Invalid token",
  //   },
  //   { status: 401 }
  // );

  readDB();

  // return NextResponse.json(
  //   {
  //     ok: false,
  //     message: "Message is not found",
  //   },
  //   { status: 404 }
  // );

  writeDB();

  return NextResponse.json({
    ok: true,
    message: "Message has been deleted",
  });
};
