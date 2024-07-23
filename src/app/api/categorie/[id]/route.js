import prisma from "@/app/api/lib/dbconnection";
import { NextRequest, NextResponse } from "next/server";

export async function DELETE(req, { params }) {
  const { id } = params;
  try {
    await prisma.category.delete({
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
    const updatedItem = await prisma.category.update({
      where: { id: id },
      data: {
        name: data.name,
        description: data.description,
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
    const category = await prisma.category.findUnique({
      include: {
        items: true,
      },
      where: { id: id },

    });
    if (category) {
      return NextResponse.json(category);
    } else {
      return NextResponse.json({ message: "Category not found" }, { status: 404 });
    }
  } catch (error) {
    console.error(error);
    return NextResponse.json({ message: "Error fetching category" }, { status: 500 });
  }
}