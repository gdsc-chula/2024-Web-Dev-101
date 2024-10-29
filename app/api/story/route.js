import {getStory, createStory, getStoryLimit } from "@/app/lib/firebase/firestore";
import { NextResponse } from "next/server";

export async function GET(request) {
    // Get the URL and search parameters
    const { searchParams } = new URL(request.url);
    const numlimit = searchParams.get('limit');
    const limit = parseInt(searchParams.get('limit'), 10) || 10; // Default to 10 if limit is not provided


    if (!limit) {
        const stories = await getStory();
        return NextResponse.json(stories);
    } else {
        const story = await getStoryLimit(limit);
        return NextResponse.json(story);
    }
}

export async function POST(request) {
    try {
    const story = await request.json();
    const newStory = await createStory(story);
    return NextResponse.json({ id: newStory.id, ...newStory });
    }
    catch (e) {
    return NextResponse.error(new Error("Failed to create story"));
    }
}

