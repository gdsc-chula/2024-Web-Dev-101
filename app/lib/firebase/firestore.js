import { db } from '@/app/firebase';
import { collection, getDoc, addDoc, deleteDoc, setDoc, getDocs } from "firebase/firestore";

async function getStory() {
    try {
        const storyRef = collection(db, 'stories');
        const storySnapshot = await getDocs(storyRef);
        const stories = storySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
        return stories;
    } catch (e) {
        console.error(e);
        return [];
    }
}

async function getStoryById(id) {
    try {
        const storyRef = collection(db, 'stories');
        const storySnapshot = await getDocs(storyRef);
        const stories = storySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
        const story = stories.find(story => story.id === id);
        return story;
    } catch (e) {
        console.error(e);
        return {};
    }
}

async function createStory(story) {
    try {
      const storyRef = collection(db, "stories");
      story.timestamp = new Date(); // Set the timestamp
      await addDoc(storyRef, story);
    } catch (e) {
      console.error("Error creating story:", e);
    }
  }
  

async function updateStory(id, story) {
    try {
        const storyRef = collection(db, 'stories');
        await setDoc(doc(storyRef, id), story);
    } catch (e) {
        console.error(e);
    }
}

async function deleteStory(id) {
    try {
        const storyRef = collection(db, 'stories');
        await deleteDoc(doc(storyRef, id));
    } catch (e) {
        console.error(e);
    }
}

export { getStory, getStoryById, createStory, updateStory, deleteStory };
