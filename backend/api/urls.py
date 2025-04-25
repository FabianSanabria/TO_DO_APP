
from django.urls import path
from . import views

urlpatterns = [
    path('tasks/', views.get_all_tasks, name='get_all_tasks'),                                # GET todas las tareas
    path('tasks/create/', views.create_task, name='create_task'),                             # POST crear tarea
    path('tasks/delete/<int:pk>/', views.delete_task, name='delete_task'),                    # DELETE una tarea
    path('tasks/complete/<int:pk>/', views.mark_task_completed, name='mark_task_completed'),  # PATCH marcar completada
]