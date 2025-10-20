import { useSelector, useDispatch } from "react-redux";
import { toggleArchive, deleteNote } from "./notesSlice";

export default function ArchivedNotes() {
    const dispatch = useDispatch()
    const archivedNotes = useSelector((state) =>
        state.notes.filter((note) => note.archived)
    )

    if (archivedNotes.length === 0) return null;

    return (
        <div className="mt-6">
            <h2 className="text-2xl font-semibold text-indigo-600 mb-4">Archived Notes</h2>
            <div className="space-y-4">
                {archivedNotes.map((note) => (
                    <div key={note.id} className="bg-gray-100 border-gray-300 rounded-lg p-4 shadow-sm hover:shadow-md transition-all">
                        <h3 className="font-lg text-gray-700 font-bold mb-1">{note.title}</h3>
                        <p className="text-gray-600 mb-3 whitespace-pre-line">{note.content}</p>
                        <div className="flex gap-4">
                            <button className="bg-green-500 hover:bg-green-600 text-white font-medium py-1 px-3 rounded-lg transition-all" onClick={() =>
                                dispatch(toggleArchive(note.id))
                            }>Unarchive</button>
                            <button className="bg-red-500 hover:bg-red-600 text-white font-medium py-1 px-3 rounded-lg transition-all" onClick={() =>
                                dispatch(deleteNote(note.id))
                            }>Delete</button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}