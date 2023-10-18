import { NextResponse } from "next/server";

const categories = [
  "Travel",
  "Food and Cooking",
  "Health and Wellness",
  "Personal Development",
  "Technology",
  "Finance and Investing",
  "Fashion and Beauty",
  "Parenting",
  "Home Decor and DIY",
  "Lifestyle",
];

export async function GET(request: Request) {
  const category = categories[Math.floor(Math.random() * categories.length)];
  return NextResponse.json(category);
}
