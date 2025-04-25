from django.core.management.base import BaseCommand
from api.models import Task
from datetime import datetime, timedelta
import random

class Command(BaseCommand):
    help = 'Seed the database with random example tasks'

    def handle(self, *args, **kwargs):
        # Eliminar tareas previas
        Task.objects.all().delete()

        # Lista base de títulos y descripciones
        samples = [
            ("Estudiar Django", "Revisar documentación y crear un modelo."),
            ("Configurar API", "Probar endpoints y revisar respuestas."),
            ("Hacer deploy", "Subir app a Render o similar."),
            ("Leer sobre React", "Investigar componentes y hooks."),
            ("Practicar CSS", "Mejorar diseño con Flexbox y Grid."),
            ("Escribir tests", "Crear pruebas unitarias para views."),
            ("Refactorizar código", "Limpiar funciones largas."),
            ("Documentar el proyecto", "Escribir README y comentarios."),
            ("Revisar pull requests", "Hacer code review con el equipo."),
        ]

        # Seleccionamos 8 tareas aleatorias
        tasks_to_create = random.sample(samples, 8)

        for title, description in tasks_to_create:
            created_at = datetime.now() - timedelta(days=random.randint(0, 30))
            completed = random.choice([True, False])

            Task.objects.create(
                title=title,
                description=description,
                completed=completed,
                created_at=created_at
            )

        self.stdout.write(self.style.SUCCESS('✅ 8 tareas de prueba con fechas aleatorias creadas.'))
