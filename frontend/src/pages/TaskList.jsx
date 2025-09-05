import { useState,useEffect } from "react"

const apiURL = import.meta.env.VITE_API_URL
// const localURL = import.meta.env.VITE_LOC_URL

export function TaskList(){
    const [Tasks,setTasks] = useState([])
    const [displayList,setDisplayList] = useState([])

    //for search
    const [searchTerm,setSearchTerm] = useState('')

    //for filter
    const [filterList,setFilterList] = useState('')

    async function handleFetch(){
        try{
            const res = await fetch(`${apiURL}/tasks/getAllTasks`)
            const data = await res.json()

            if(res.ok){
                setTasks(data.Tasks)
                setDisplayList(data.Tasks)
            }
            else{
                console.error("Server error:",data.msg)
            }
        }
        catch(err){
            console.error("Network error:",err.message)
        }
    }
    
 

    function searchTask(){
        const filtered = Tasks.filter(task=> task.taskname.toLowerCase().includes(searchTerm.toLowerCase()))
        setDisplayList(filtered)
    }

    function filterTask(){
        if(filterList === ''){
            setDisplayList(Tasks)
            return
        }
        const filtered = Tasks.filter(task => task.status === filterList)
        setDisplayList(filtered)
    }

    async function handleUpdate(id, currentStatus) {
        const newStatus = currentStatus === 'completed' ? 'incomplete' : 'completed';
        try {
        const res = await fetch(`${localURL}/tasks/updateTask/${id}`, {
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ status: newStatus }),
        });

            const data = await res.json();

            if (res.ok) {
                await handleFetch();
            } else {
                console.error(data.msg || 'Failed to update task');
            }
        } catch (err) {
            console.error('Error updating task:', err.message);
        }
    }

    async function handleDelete(id) {
        try {
        const res = await fetch(`${localURL}/tasks/deleteTask/${id}`, {
            method: 'DELETE',
        });

        const data = await res.json();

        if (res.ok) {
            await handleFetch();
        } else {
            console.error(data.msg || 'Failed to delete task');
        }
        } catch (err) {
        console.error('Error deleting task:', err.message);
        }
    }
    

    useEffect(() => {
        if (searchTerm) {
            searchTask();
        } 
        else if (filterList) {
            filterTask();
        } 
        else {
            setDisplayList(Tasks);
        }
    },[searchTerm, filterList, Tasks]);


    useEffect(()=>{
        handleFetch()
    },[])
    return(
        <>
            <div className="p-4 space-y-4 flex horizontal justify-between">
                <label htmlFor="FilterSection" 
                    className="px-2 py-1 mt-4  text-xl"
                >
                    Search:
                </label>
                <input
                    type="text"
                    placeholder="Enter task name"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="border border-gray-300 px-2 py-1 mt-4 rounded w-3/4"
                />
                <br/>
                <label htmlFor="FilterSection" 
                    className="px-2 py-1 mt-4  text-lg"
                >
                    Filter:
                </label>
                <select name="FilterSection" id="filter"
                    value={filterList}
                    onChange={((e)=>setFilterList(e.target.value))}
                    className="px-1 h-9 py-1 mt-4  border border-gray-300 rounded"
                >
                    <option value=''>Select</option>
                    <option value='completed'>Completed</option>
                    <option value='incomplete'>Incomplete</option>
                </select>
            </div>
            <div>
                {
                    displayList.length>0 && displayList.map((item)=>(
                        <li key={item._id} 
                            className="px-10 py-5 m-5 flex justify-between border border-gray-300 rounded "
                        >
                            <div>
                                <h3 
                                    className="font-semibold text-xl flex"
                                >
                                    {item.taskname}
                                </h3>
                                <p>
                                    <b>On: </b> {item.createdAt.slice(0,10)} <b>At: </b>{item.createdAt.slice(11,19)}
                                </p>
                                <p><b>Status: </b>{item.status}</p>
                            </div>
                            <div className="flex justify-between px-2 py-2">
                                <button
                                   onClick={() => handleUpdate(item._id, item.status)}
                                    className="bg-green-400 m-1 hover:bg-green-300"
                                >
                                    {item.status==='completed'?'Incomplete' : 'Complete'}
                                </button>
                                <button
                                    onClick={() => handleDelete(item._id)}
                                    className="bg-red-500 m-1 hover:bg-red-300"
                                >
                                    Delete
                                </button>
                            </div>
                        </li>
                    ))
                }
            </div>
        </>
    )
}