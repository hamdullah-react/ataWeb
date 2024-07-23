import prisma from "@/app/api/lib/dbconnection";
import { NextRequest, NextResponse } from "next/server";

export async function DELETE(req, { params }) {
  const { id } = params;
  try {
    await prisma.item.delete({
      where: { id: id },
    });
    return NextResponse.json({ message: "Item deleted successfully" });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ message: "Error deleting item" }, { status: 500 });
  }
}

export async function PUT(req, { params }) {
  const { id } = params;
  const data = await req.json();
  try {
    const updatedItem = await prisma.item.update({
      where: { id: id },
      data: {
        name: data.name,
        img: data.img,
        description: data.description,
        categoryId: data.categoryId,
      },
    });
    return NextResponse.json(updatedItem);
  } catch (error) {
    console.error(error);
    return NextResponse.json({ message: "Error updating item" }, { status: 500 });
  }
}
export async function GET(req, { params }) {
  const { id } = params;
  try {
    const item = await prisma.item.findUnique({
      where: { id: id },
    });
    if (item) {
      return NextResponse.json(item);
    } else {
      return NextResponse.json({ message: "Item not found" }, { status: 404 });
    }
  } catch (error) {
    console.error(error);
    return NextResponse.json({ message: "Error fetching item" }, { status: 500 });
  }
}