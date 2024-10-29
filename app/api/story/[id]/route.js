'use server'
import { getStoryById,updateStory, deleteStory } from "@/app/lib/firebase/firestore";
import { NextRequest, NextResponse } from "next/server";


export async function GET(request, { params }){
    const { id } = params;
    const story = await getStoryById(id); // Fetch a single story by ID
    return story
        ? NextResponse.json(story)
        : NextResponse.json({ error: 'Story not found' }, { status: 404 });
}

export async function PUT(request, { params }) {
    const { id } = params;
    const story = await request.json();
    await updateStory(id, story);
    return NextResponse.json({ "message": "Story updated" });
}

export async function DELETE(request, { params }) {
    const { id } = params;
    await deleteStory(id);
    return NextResponse.json({ "message": "Story deleted" });
}