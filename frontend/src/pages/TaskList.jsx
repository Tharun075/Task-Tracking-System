import { useState } from "react"

export function TaskList(){
    const [Tasks,setTasks] = useState([])
    const [displayList,setDisplayList] = useState([])
    
    //for search
    const [searchTerm,setSearchTerm] = useState('')

    //for filter
    const [filter,setFilter] = useState('')

    function searchTask(){

    }
    function filterTask(){

    }
    return(
        <>
            <div className="p-4 space-y-4 flex horizontal justify-between">
                <input
                    type="text"
                    placeholder="Enter task name"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="border p-2 rounded w-3/4"
                />
                <label htmlFor="FilterSection" 
                    className="px-2 py-1 text-lg"
                >
                    Sort By:
                </label>
                <select name="FilterSection" id="filter"
                    value={filter}
                    onChange={((e)=>setFilter(e.target.value))}
                    className="px-1 h-12 border border-black rounded"
                >
                    <option value=''>Select</option>
                    <option value='completed'>Completed</option>
                    <option value='incomplete'>Incomplete</option>
                </select>
            </div>
            
        </>
    )
}