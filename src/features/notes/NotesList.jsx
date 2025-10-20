import { useSelector, useDispatch } from "react-redux";
import { deleteNote, toggleArchive } from "./notesSlice";
import ArchivedNotes from "./ArchivedNotes";
import { useState } from "react";

export default function NotesList() {
    const notes = useSelector((state) => state.notes);
    const dispatch = useDispatch()
    const [showArchived, setShowArchived] = useState(false)

    const activeNotes = notes.filter((note) => !note.archived)
    const archivedNotes = notes.filter((note) => note.archived)

    if (notes.length === 0) {
        return <p className="text-gray-500 text-center mt-6">No notes yet!</p>
    }

    return (
        <div className="mt-6">
            <h2 className="text-2xl font-semibold text-indigo-600 mb-4">Active Notes</h2>
            {activeNotes.length === 0 ? (
                <p className="text-gray-400 text-center">No active notes...</p>
            ) : <div className="space-y-4">
                {activeNotes.map((note) => (
                    <div key={note.id} className="bg-white border border-gray-200 rounded-xl p-4 shadow-sm hover:shadow-md transtion-shadow duration-200">
                        <h3 className="text-lg font-semibold text-gray-800">{note.title}</h3>
                        <p className="text=gray-600 mb-3 whitespace-pre-line">{note.content}</p>
                        <div className="flex gap-4">
                            <button className="bg-yellow-400 hover:bg-yellow-500 text-white font-medium py-1 px-3 rounded-lg transition-all"
                                onClick={() =>
                                    dispatch(toggleArchive(note.id))
                                }>Archive</button>
                            <button className="bg-red-500 hover:bg-red-600 text-white font-medium py-1 px-3 rounded-lg transition-all"
                                onClick={() =>
                                    dispatch(deleteNote(note.id))
                                }>Delete</button>
                        </div>
                    </div>
                ))}
            </div>}

            {archivedNotes.length > 0 &&
                <div className="text-center">
                    <hr className="border-gray-300 my-6" />
                    <button
                        onClick={() => setShowArchived(!showArchived)}
                        className="mt-2 px-4 py-2 bg-gray-200 text-gray-700 rounded-lg hover:bg-gray-300 transition"
                    >
                        {showArchived ? "Hide Archived" : "View Archived"}
                    </button>
                </div>}
            {showArchived && <ArchivedNotes />}
        </div>
    )
}