import { getTasks, createTask, deleteTask, completeTask } from '../services/apiService';

async function fetchTasks(setTasks, setError, setLoading) {
    try {
      const data = await getTasks();
      setTasks(data);
    } catch (err) {
      setError('No se pudieron cargar las tareas.');
    } finally {
      setLoading(false);
    }
}
  
async function createNewTask(newTask) {
    const created = await createTask(newTask);
    return created  
}

async function deleteTaskById(id, tasks, setTasks) {
    await deleteTask(id);
    setTasks(tasks.filter(t => t.id !== id));
 }

async function toggleTaskComplete(id, tasks, setTasks) {
    await completeTask(id);
    setTasks(
      tasks.map(t =>
        t.id === id ? { ...t, completed: !t.completed } : t
      )
    );
}
export {
  fetchTasks,
  createNewTask,
  deleteTaskById,
  toggleTaskComplete,
};