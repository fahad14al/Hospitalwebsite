Hospital Management System - Django Web Application
A comprehensive hospital management system built with Django, featuring doctor appointments, patient management, events, news articles, and gallery management.

🌐 Live Demo
Visit Live Website - https://fahadal.pythonanywhere.com/

✨ Features
Core Functionalities
🏥 Doctor Management - Add, edit, and view doctor profiles with specialties

📅 Appointment Booking - Online appointment system for patients

👨‍⚕️ Patient Management - Complete patient records and history

📰 News & Articles - Health articles and news updates

📸 Photo Gallery - Hospital events and activities gallery

🎯 Events Management - Medical camps and health awareness events

📞 Contact System - Patient inquiries and feedback

Admin Features
🔐 Django Admin Interface - Full CRUD operations

📊 Dashboard - Manage all hospital data

🖼️ Media Management - Upload and organize images

👥 User Management - Staff and admin accounts

🛠️ Technology Stack
Backend
Python 3.8+ - Primary programming language

Django 4.x - Web framework

SQLite/PostgreSQL - Database management

Pillow - Image processing

Frontend
HTML5 - Markup language

CSS3 - Styling

JavaScript - Interactive elements

Bootstrap 5 - Responsive design

Tools & Services
Git - Version control

GitHub - Code repository

VS Code - Development environment

📁 Project Structure
text
Hospitalwebsite/
├── benth/                    # Main project directory
│   ├── benthapp/            # Main Django app
│   │   ├── models.py        # Database models
│   │   ├── views.py         # View functions
│   │   ├── urls.py          # URL routing
│   │   ├── admin.py         # Admin configurations
│   │   └── forms.py         # Form definitions
│   ├── Templates/           # HTML templates
│   │   ├── base.html        # Base template
│   │   ├── index.html       # Home page
│   │   ├── doctors/         # Doctor-related templates
│   │   ├── appointments/    # Appointment templates
│   │   └── admin/           # Custom admin templates
│   ├── static/              # Static files
│   │   ├── css/            # Stylesheets
│   │   ├── js/             # JavaScript files
│   │   └── images/         # Static images
│   ├── media/               # User-uploaded media
│   │   ├── doctors/        # Doctor photos
│   │   ├── events/         # Event images
│   │   └── articles/       # Article images
│   └── manage.py           # Django management script
├── requirements.txt        # Python dependencies
├── .gitignore             # Git ignore file
└── README.md              # This file
🚀 Installation Guide
Prerequisites
Python 3.8 or higher

pip (Python package manager)

Git

Step-by-Step Setup
Clone the Repository

bash
git clone https://github.com/fahad14al/Hospitalwebsite.git
cd Hospitalwebsite
Create Virtual Environment

bash
python -m venv venv

# On Windows:
venv\Scripts\activate

# On Mac/Linux:
source venv/bin/activate
Install Dependencies

bash
pip install -r requirements.txt
Configure Database

bash
python manage.py makemigrations
python manage.py migrate
Create Superuser

bash
python manage.py createsuperuser
Follow prompts to create admin account

Collect Static Files

bash
python manage.py collectstatic
Run Development Server

bash
python manage.py runserver
Open browser: http://127.0.0.1:8000


📄 License
This project is licensed under the MIT License - see the LICENSE file for details.

🙏 Acknowledgments
Django Documentation

Bootstrap Team for responsive templates

All contributors and testers

📞 Contact & Support
Developer: Fahad
Email: fahadalmohammad50@gmail.com
GitHub: @fahad14al
Issue Tracker: GitHub Issues

🐛 Common Issues & Solutions
Static Files Not Loading
bash
# Run these commands:
python manage.py collectstatic
# Make sure DEBUG=True in development
Database Migration Errors
bash
python manage.py makemigrations
python manage.py migrate --run-syncdb
Admin Access Issues
bash
python manage.py createsuperuser
# Or reset password:
python manage.py changepassword username
⭐ If you find this project useful, please give it a star! ⭐

