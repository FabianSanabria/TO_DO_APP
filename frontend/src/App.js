import React, { useState, useEffect } from 'react';
import TaskModal from './components/modals/TaskModal.js';
import ConfirmModal from './components/modals/ConfirmModal.js';
import AlertModal from './components/modals/AlertModal.js';
import DetailsModal from './components/modals/DetailsModal.js';
import TaskList from './components/TaskList.js';
import {fetchTasks, createNewTask, deleteTaskById, toggleTaskComplete}  from  './handlers/taskHandlers';
import './App.css';

function App() {
  const [tasks, setTasks] = useState([]);
  const [detailsData, setDetailsData] = useState(null);
  const [showCreateModal, setShowCreateModal] = useState(false);
  const [showConfirmDelete, setShowConfirmDelete] = useState(false);
  const [showAlertModal, setShowAlertModal] = useState(false);
  const [alertMessage, setAlertMessage] = useState('');
  const [alertType, setAlertType] = useState('');
  const [showDetailsModal, setShowDetailsModal] = useState(false);
  const [taskToDelete, setTaskToDelete] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  // 1. Carga inicial de tareas
  useEffect(() => {
    fetchTasks(setTasks, setError, setLoading);
  }, []);

  // 2. Crear nueva tarea
  const handleSubmit = async (newTask) => {
    try {
      const created = await createNewTask(newTask);
      setTasks([created, ...tasks]);
      setShowCreateModal(false)
    } catch {
      alert('Error al crear la tarea');
    }
  };

  const handleDelete = async (id) => {
    try {
      await deleteTaskById(id, tasks, setTasks);
    } catch {
      alert('Error al eliminar');
    }
  };
  
  const handleComplete = async (id, isCompleted) => {
    if (isCompleted) return showAlert('No puedes actualizar una tarea completada.', '');
  
    try {
      await toggleTaskComplete(id, tasks, setTasks);
      showAlert('Tarea actualizada correctamente.', 'success');
    } catch {
      showAlert('Error al actualizar estado de la tarea.', '');
    }
  };
    const handleShowDetails = (task) => {
      setDetailsData(task);
      setShowDetailsModal(true);
    };
    const handleCloseDetails = () => {
      setDetailsData(null);
      setShowDetailsModal(false);
      return;
    };
    const showAlert = (message, type = '') => {
      setAlertMessage(message);
      setAlertType(type);
      setShowAlertModal(true);
    };

    return (
      <div className="app">
        <h1 className="todo-header">TO - DO LIST🎯</h1>
  
        <button className="btn btn-add" onClick={() => setShowCreateModal(true)}>
          + Nueva Tarea
        </button>
        <div className="task-list-header">
          <span className="task-list-title">Título</span>
          <span className="task-list-actions">Eliminar / Detalles</span>
        </div>
        <TaskList
          tasks={tasks}
          onDelete={(id) => {
            setTaskToDelete(id);
            setShowConfirmDelete(true);
          }}
          onDetails={(title, description, created_at, completed) => {
            
            handleShowDetails({'title':title, 'description':description, 'created_at':created_at, 'completed':completed});
            setShowDetailsModal(true);
          }}
          onComplete={handleComplete}
        />
  
        {showCreateModal && (
          <TaskModal
            onSubmit={handleSubmit}
            onClose={() => setShowCreateModal(false)}
          />
        )}
        {showConfirmDelete && (
          <ConfirmModal
            message="¿Estás seguro que deseas eliminar esta tarea?"
            onConfirm={() => {
              handleDelete(taskToDelete);
              setShowConfirmDelete(false);
            }}
            onCancel={() => setShowConfirmDelete(false)}
          />
        )}
        {showAlertModal && (
          <AlertModal
          message={alertMessage}
          type={alertType}
          onClose={() => setShowAlertModal(false)}
        />
        )}
         {showDetailsModal && detailsData &&(
          <DetailsModal
          title={detailsData.title}
          description={detailsData.description}
          created_at={detailsData.created_at}
          completed={detailsData.completed}
          onClose={handleCloseDetails}
        />
        )}
      </div>
      
    );
  }
  
  export default App;
