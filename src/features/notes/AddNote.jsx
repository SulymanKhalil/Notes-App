import { useState } from "react";
import { useDispatch } from "react-redux";
import { addNote } from "./notesSlice";

export default function AddNote() {
    const [title, setTitle] = useState("")
    const [content, setContent] = useState("")
    const dispatch = useDispatch()

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!title.trim() || !content.trim()) {
            alert("Please fill both title and content!")
            return
        };

        dispatch(addNote({ title, content }));
        setTitle("");
        setContent("");
    }

    return (
        <form onSubmit={handleSubmit} className="bg-indigo-50 rounded-2xl p-6 shadow-md borde border-indigo-100">
            <h2 className="text-2xl font-semibold text-indigo-600 mb-4 text-center">Add Note</h2>
            <input
                type="text"
                placeholder="Title"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                className="w-full p-3 mb-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-400"
            />
            <br />
            <textarea
                placeholder="Content goes here..."
                value={content}
                onChange={(e) => setContent(e.target.value)}
                className="w-full p-3 mb-4 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-400 h-25">
            </textarea>
            <button type="submit" className="w-full bg-indigo-600 text-white font-medium py-2 rounded-lg hover:bg-indigo-700 transition-all duration-200">Add note</button>
        </form>
    )
}