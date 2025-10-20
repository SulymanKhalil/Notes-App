import { createSlice, nanoid } from "@reduxjs/toolkit"

const initialState = [];

const notesSlice = createSlice({
    name: "notes",
    initialState,
    reducers: {
        addNote: {
            reducer(state, action) {
                state.push(action.payload)
            },
            prepare({ title, content }) {
                return {
                    payload: {
                        id: nanoid(),
                        title,
                        content,
                        archived: false,
                        createdAt: new Date().toISOString(),
                        updatedAt: new Date().toISOString()
                    }
                }
            }
        },
        editNote(state, action) {
            const { id, changes } = action.payload;
            const note = state.find(n => n.id === id)
            if (note) Object.assign(note, changes, { updatedAt: new Date().toISOString() })
        },
        deleteNote(state, action) {
            return state.filter(n => n.id !== action.payload)
        },
        toggleArchive(state, action) {
            const note = state.find(n => n.id === action.payload)
            if (note) note.archived = !note.archived
        }
    }
})

export const {addNote, editNote, deleteNote, toggleArchive} = notesSlice.actions;
export default notesSlice.reducer;