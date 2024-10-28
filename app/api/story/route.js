'use server'
import { NextResponse } from "next/server";
import {  getStory, getStoryById, createStory, updateStory, deleteStory } from "@/app/lib/firebase/firestore";
import { UserAuth } from "@/app/context/authContext";
import { v4 as uuidv4 } from "uuid"; // Import UUID

export async function GET(req) {
    const { searchParams } = new URL(req.url);
    const id = searchParams.get('id');
    console.log(id);

    try {
        if (id) {
            const story = await getStoryById(id);
            return NextResponse.json(story);
        } else {
            const stories = await getStory();
            return NextResponse.json(stories);
        }

    } catch (e) {
        console.error(e);
        return NextResponse.json({ error: 'Failed to fetch stories' }, { status: 500 });
    }
}


export async function POST(req) {
    let story = await req.json();

    // Validate incoming story data
    if (!story.Story || !story.ProfileImg || !story.DisplayName || Object.keys(story).length !== 3) {
        return NextResponse.json({ error: "Invalid story data" }, { status: 400 });
    }

    // Generate a unique ID for the story
    story.id = uuidv4();
    story.timestamp = new Date().toISOString(); // JSON-serializable timestamp

    console.log("Story data:", story);

    try {
        // Assuming createStory expects a single story object
        const addedStory = await createStory(story); // Ensure createStory is set up correctly
        return NextResponse.json({ message: "Story added successfully", story: addedStory });
    } catch (e) {
        console.error("Error adding story:", e);
        return NextResponse.json({ error: "Failed to add story" }, { status: 500 });
    }
}

// Permission Required
export async function PUT(req) {
    // const user = UserAuth();
    // if (!user) {
    //     return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    // }
    const { searchParams } = new URL(req.url);
    const id = searchParams.get('id');
    if (!id) {
        return NextResponse.json({ error: 'Story ID is required' }, { status: 400 });
    }
    let story = await req.json();
    if (!(story.img && story.DisplayName && story.Story) || Object.keys(story).length !== 3) {
        return NextResponse.json({ error: 'Invalid story data' }, { status: 400 });
    }
    try {
        await updateStory('stories', id, story);
        return NextResponse.json({ message: 'Story updated' });
    } catch (e) {
        console.error(e);
        return NextResponse.json({ error: 'Failed to update story' }, { status: 500 });
    }
}

// Permission Required
export async function DELETE(req) {
    // const user = UserAuth();
    // if (!user) {
    //     return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    // }
    const { searchParams } = new URL(req.url);
    const id = searchParams.get('id');
    if (!id) {
        return NextResponse.json({ error: 'Story ID is required' }, { status: 400 });
    }
    try {
        await deleteStory('stories', id);
        return NextResponse.json({ message: 'Story deleted' });
    } catch (e) {
        console.error(e);
        return NextResponse.json({ error: 'Failed to delete story' }, { status: 500 });
    }
}
