import { Link } from "react-router-dom";

export function Navbar(){
    return(
        <>
            
            <nav className="flex space-between space-x-7 p-5 m-0 bg-green-100">
                <p className=" px-4 py-1 font-bold text-2xl text-green-500 mr-auto">Task Tracking System</p>
                <Link to="/"
                    className="px-4 py-2 border border-white rounded bg-white hover:bg-blue-200"
                >All Tasks</Link>

                <Link to="/createTask"
                    className="px-4 py-2 border border-white rounded bg-white hover:bg-blue-200"
                >Create Task</Link>
            </nav>
        </>
    )
}