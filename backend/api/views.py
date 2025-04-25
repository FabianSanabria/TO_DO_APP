from django.shortcuts import render
from rest_framework import status
from rest_framework.decorators import api_view
from rest_framework.response import Response
from .models import Task
from .serializers import TaskSerializer

# Crear tarea 
@api_view(['POST'])
def create_task(request):
    serializer = TaskSerializer(data=request.data)
    if serializer.is_valid():
        serializer.save()
        return Response(serializer.data, status=status.HTTP_201_CREATED)

# Obtener todas las tareas
@api_view(['GET'])
def get_all_tasks(request):
    tasks = Task.objects.all().order_by('-created_at')
    serializer = TaskSerializer(tasks, many=True)
    return Response(serializer.data)
    
# Eliminar tarea
@api_view(['DELETE'])
def delete_task(request, pk):
    try:
        task = Task.objects.get(pk=pk)
    except Task.DoesNotExist:
        return Response(status=status.HTTP_404_NOT_FOUND)
    task.delete()
    return Response(status=status.HTTP_204_NO_CONTENT)
    
# Marcar tarea como completada
@api_view(['PATCH'])
def mark_task_completed(request, pk):
    try:
        task = Task.objects.get(pk=pk)
    except Task.DoesNotExist:
        return Response(status=status.HTTP_404_NOT_FOUND)
    task.completed = True
    task.save()
    serializer = TaskSerializer(task)
    return Response(serializer.data)