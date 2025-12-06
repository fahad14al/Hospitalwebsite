from django import forms
from .models import Appointment, ContactMessage

class AppointmentForm(forms.ModelForm):
    class Meta:
        model = Appointment
        fields = ['patient_name', 'patient_email', 'patient_phone', 'appointment_date', 'doctor', 'symptoms']
        widgets = {
            'patient_name': forms.TextInput(attrs={
                'class': 'form-control',
                'placeholder': 'Enter your full name',
                'id': 'patient_name'
            }),
            'patient_email': forms.EmailInput(attrs={
                'class': 'form-control',
                'placeholder': 'Enter your email address',
                'id': 'patient_email'
            }),
            'patient_phone': forms.TextInput(attrs={
                'class': 'form-control',
                'placeholder': 'Enter your phone number',
                'id': 'patient_phone',
                'type': 'tel'
            }),
            'appointment_date': forms.DateTimeInput(attrs={
                'class': 'form-control',
                'type': 'datetime-local',
                'id': 'appointment_date'
            }),
            'doctor': forms.Select(attrs={
                'class': 'form-control',
                'id': 'doctor'
            }),
            'symptoms': forms.Textarea(attrs={
                'class': 'form-control',
                'placeholder': 'Describe your symptoms...',
                'id': 'symptoms',
                'rows': 4
            }),
        }
        labels = {
            'patient_name': 'Patient Name *',
            'patient_email': 'Email Address *',
            'patient_phone': 'Phone Number *',
            'appointment_date': 'Appointment Date & Time *',
            'doctor': 'Select Doctor *',
            'symptoms': 'Symptoms *',
        }


class ContactMessageForm(forms.ModelForm):
    class Meta:
        model = ContactMessage
        fields = ['name', 'phone', 'email', 'subject', 'message']
        widgets = {
            'name': forms.TextInput(attrs={
                'class': 'form-control',
                'placeholder': 'Enter your full name',
                'id': 'name'
            }),
            'phone': forms.TextInput(attrs={
                'class': 'form-control',
                'placeholder': 'Enter your phone number',
                'id': 'phone',
                'type': 'tel'
            }),
            'email': forms.EmailInput(attrs={
                'class': 'form-control',
                'placeholder': 'Enter your email address',
                'id': 'email'
            }),
            'subject': forms.TextInput(attrs={
                'class': 'form-control',
                'placeholder': 'Enter subject',
                'id': 'subject'
            }),
            'message': forms.Textarea(attrs={
                'class': 'form-control',
                'placeholder': 'Please describe your inquiry in detail...',
                'id': 'message',
                'rows': 5
            }),
        }
        labels = {
            'name': 'Full Name *',
            'phone': 'Phone Number *',
            'email': 'Email Address *',
            'subject': 'Subject *',
            'message': 'Your Message *',
        }