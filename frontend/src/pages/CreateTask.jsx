import { useState } from "react"

export function CreateTask(){
    const [TaskName,setTaskName] = useState('')
    const [TaskStatus,setTaskStatus] = useState(false) 

    function handleSubmit(){

    }
    return(
        <>
            <form onSubmit={handleSubmit} className="p-4 space-y-4">
                <input
                    type="text"
                    placeholder="Enter task name"
                    value={TaskName}
                    onChange={(e) => setTaskName(e.target.value)}
                    className="border p-2 rounded w-full"
                />

                <button
                    type="submit"
                    className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
                >
                    Submit
                </button>
            </form>
        </>
    )
}