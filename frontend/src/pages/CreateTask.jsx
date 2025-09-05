import { useState } from "react";

// const apiURL = import.meta.env.VITE_API_URL
const localURL = import.meta.env.VITE_LOC_URL

export function CreateTask() {
  const [TaskName, setTaskName] = useState('');
  const [TaskStatus, setTaskStatus] = useState('incomplete');
  const [msg, setMsg] = useState('');

  async function handleSubmit(e) {
    e.preventDefault();

    if (!TaskName.trim()) {
      setMsg("Task name is not given!");
      return;
    }

    try {
      const res = await fetch(`${localURL}/tasks/createTask`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          taskname: TaskName,  
          status: TaskStatus,
        }),
      });

      const data = await res.json();

      if (res.ok) {
        setMsg("Task created successfully!");
        setTaskName('');
        setTaskStatus(false);
      } else {
        setMsg(`${data.msg || 'Failed to create task'}`);
      }
    } catch (err) {
      setMsg(`Network error: ${err.message}`);
    }
  }

  return (
    <>
      <form onSubmit={handleSubmit} className="p-4 space-y-4 max-w-md mx-auto">
        <h2 className="text-xl font-semibold">Create New Task</h2>

        <input
          type="text"
          placeholder="Enter task name"
          value={TaskName}
          onChange={(e) => setTaskName(e.target.value)}
          className="border p-2 rounded w-full"
        />

        <div className="flex items-center space-x-2">
          <input
            type="checkbox"
            checked={TaskStatus === 'completed'}
            onChange={(e) => setTaskStatus(e.target.checked ? 'completed' : 'incomplete')}
          />
          <label>Mark as completed</label>
        </div>

        <button
          type="submit"
          className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
        >
          Submit
        </button>

        {msg && (
          <p className="mt-2 text-sm text-gray-700">{msg}</p>
        )}
      </form>
    </>
  );
}
