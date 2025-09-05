import './App.css'
import { Navbar } from './components/Navbar'
import { CreateTask } from './pages/CreateTask'
import { TaskList } from './pages/TaskList'
import { Routes,Route } from 'react-router-dom'

function App() {
    return (
    <>
      <Navbar/>
      <Routes>
        <Route path="/" element={<TaskList/>} />
        <Route path="/createTask" element={<CreateTask/>}/>
      </Routes>
    </>
  )
}

export default App
