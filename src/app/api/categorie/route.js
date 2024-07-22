import prisma from "@/app/api/lib/dbconnection";
import { NextRequest, NextResponse } from "next/server";



export async function GET() {
  try {
    const allUsers = await prisma.category.findMany()
    return NextResponse.json(allUsers);
  } catch (error) {
    console.error(error);
    return NextResponse.json({ message: "Error fetching categories" }, { status: 500 }); 
  }
}


export async function POST(req){
  const data  =await req.json()
  try {
     const newItem = await prisma.category.create({
      data: {
        name: data.name,
        description:data.description
      },
    });
    
       return NextResponse.json(newItem);
  } catch (error) {
    console.error(error);
    return NextResponse.json({ message: "Error fetching categories" }, { status: 500 }); 
  }

}