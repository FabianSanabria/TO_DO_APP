# 📝 To-Do App — Full Stack (Django + React)

Aplicación de lista de tareas con frontend en React y backend en Django, conectada a base de datos MySQL. Permite crear, ver, completar y eliminar tareas.

---

## 📦 Requisitos

- **Python 3.7+**
- **Node.js v18.19.1+** 
- **npm v9.8.1+** 
- **Base de datos MySQL**
- `virtualenv`
- `django-environ` para manejo de variables de entorno

---
Funcionalidades

    - Crear nuevas tareas

    - Ver detalles de cada tarea

    - Eliminar tareas

    - Marcar tareas como completadas

    - Mensajes de éxito y error


##  Configuración del entorno ##

### 1. Clonar el repositorio

```bash
git clone https://github.com/tu-usuario/tu-repo.git

2. Backend (Django)
cd backend

🔹 Crear entorno virtual
python -m venv venv
source Venv/bin/activate  # o Venv\Scripts\activate en Windows

🔹 Instalar dependencias
pip install -r requirements.txt

🔹 Configurar .env
Crear un archivo .env dentro de la carpeta backend/ con este contenido:

SECRET_KEY=django-insecure-($j3xcz7k36oy872wk6$d0y=eh0%79+-3z==cy0sa0--zyhyfd
DB_NAME=nombre_de_tu_db
DB_USER=usuario
DB_PASSWORD=tu_contraseña
DB_HOST=localhost
DB_PORT=3306

🔹 Migraciones y seed
python manage.py makemigrations
python manage.py migrate
python manage.py seeder  # comando personalizado para llenar la base con tareas de prueba

🔹 Ejecutar servidor
python manage.py runserver

3. Frontend (React)
Desde carpeta raiz

cd frontend
npm install
npm start
```

Autor

    Fabian Sanabria Ampuero

    https://github.com/FabianSanabria