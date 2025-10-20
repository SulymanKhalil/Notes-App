import { configureStore } from "@reduxjs/toolkit";
import notesReducer from "../features/notes/notesSlice"

const loadState = () => {
    try {
        const saved = localStorage.getItem("notesState")
        if (saved === null) return undefined;
        return { notes: JSON.parse(saved) };
    } catch (err) {
        console.error("Could not load state", err);
    }
}

const saveState = (state) => {
    try {
        const serialized = JSON.stringify(state.notes)
        localStorage.setItem('notesState', serialized)
    } catch (err) {
        console.error("Could not save state", err);
    }
}

export const store = configureStore({
    reducer: {
        notes: notesReducer
    },
    preloadedState: loadState()
})

store.subscribe(()=>{
    saveState(store.getState())
})