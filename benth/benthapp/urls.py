from django.urls import path
from . import views

urlpatterns = [
    path("", views.index, name="index"),
    path("main/", views.main, name="main"),
    path("services/", views.services, name="services"),
    path("about/", views.about, name="about"),
    path("contact/", views.contact, name="contact"),
    path("doctors/", views.doctors, name="doctors"),
    path("news/", views.news, name="news"),
    path("career/", views.career, name="career"),
    path("appointment/", views.appointment, name="appointment"),
    path("appointment/success/", views.appointment_success, name="appointment_success"),
    path("events/", views.events, name="events"),
    path("gallery/", views.gallery, name="gallery"),
    path('doctor/<slug:slug>/', views.doctor_detail, name='doctor_detail'),
    path('service/<slug:slug>/', views.service_detail, name='service_detail'),
    path("testimonials/", views.testimonials, name="testimonials"),
]