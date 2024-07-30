// import { PrismaClient } from "@prisma/client";
import prisma from "@/app/api/lib/dbconnection";
import { NextRequest, NextResponse } from "next/server";

// const prisma = new PrismaClient(); 

export async function GET() {
  try {
    const allUsers = await prisma.category.findMany({
      include: {
        items: true,
      },
    });
    return NextResponse.json(allUsers);
  } catch (error) {
    console.error(error);
    return NextResponse.json({ message: "Error fetching categories" }, { status: 500 }); 
  }
}


export async function POST(req){
  const data  =await req.json()
  try {
     const newItem = await prisma.item.create({
      data: {
        name: data.name,
        img: data.img,
        description: data.description,
        keyword: data.keyword,
        metadescription: data.metadescription,
        categoryId: data.categoryId,
      },
    });
    
       return NextResponse.json(newItem);
  } catch (error) {
    console.error(error);
    return NextResponse.json({ message: "Error fetching categories" }, { status: 500 }); 
  }

}