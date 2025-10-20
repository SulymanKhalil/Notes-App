import AddNote from "./features/notes/AddNote"
import NotesList from "./features/notes/NotesList"


function App() {

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-100 via-white to-purple-100 flex flex-col items-center py-8 px-4">
      <div className="w-full max-w-2xl bg-white shadow-xl rounded-2xl p-6 border border-gray-200">
        <h1 className="text-4xl text-extrabold text-center text-indigo-600 mb-6 tracking-wide">Notes App</h1>
        <div className="mb-6">
          <AddNote />
        </div>
        <hr className="boder-gray-300 my-4" />
        <NotesList />
      </div>
    </div>
  )
}

export default App