from django.db import models
from django.utils import timezone

class Task(models.Model):
    title = models.CharField(max_length=100) 
    description = models.TextField()
    completed = models.BooleanField(default=False)
    created_at = models.DateTimeField(default=timezone.now)

    def __str__(self):
        return self.name
    class Meta:
        db_table = 'api_tasks'  
