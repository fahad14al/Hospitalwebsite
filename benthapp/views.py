from django.shortcuts import render, redirect, get_object_or_404
from django.urls import reverse
from django.contrib import messages
from .models import *
from .forms import AppointmentForm, ContactMessageForm

# Create your views here.
def index(request):
    return render(request, "index.html")

def main(request):
    return render(request, "main.html")

def services(request):
    return render(request, "services.html")

def about(request):
    return render(request, "about.html")

def contact(request):
    if request.method == 'POST':
        form = ContactMessageForm(request.POST)
        if form.is_valid():
            form.save()
            messages.success(request, 'Thank you for contacting us! We will get back to you within 24 hours.')
            return redirect('contact')
    else:
        form = ContactMessageForm()
    return render(request, "contact.html", {'form': form})

def doctors(request):
    doctors = Doctor.objects.all()
    return render(request, "doctors.html",{'doctors':doctors})

def news(request):
    featured_articles = Article.objects.filter(is_featured=True).order_by('-publish_date')[:3]
    latest_articles = Article.objects.all().order_by('-publish_date')
    categories = ArticleCategory.objects.all()
    
    context = {
        'featured_articles': featured_articles,
        'latest_articles': latest_articles,
        'categories': categories
    }
    return render(request, "news.html", context)

def career(request):
    jobs = JobOpening.objects.all().order_by('-posted_date')
    categories = JobCategory.objects.all()
    return render(request, "career.html", {'jobs': jobs, 'categories': categories})

def appointment(request):
    if request.method == 'POST':
        form = AppointmentForm(request.POST)
        if form.is_valid():
            appointment_instance = form.save(commit=False)
            appointment_instance.status = 'Pending' # Set default status
            appointment_instance.save()
            # Store appointment ID in session for success page
            request.session['last_appointment_id'] = appointment_instance.id
            # Redirect to a success page or display a success message
            return redirect(reverse('appointment_success')) # Assuming you have an appointment_success URL
        else:
            # If form is not valid, re-render the page with errors
            doctors = Doctor.objects.all()
            return render(request, "appointment.html", {'form': form, 'doctors': doctors})
    else:
        form = AppointmentForm()
        doctors = Doctor.objects.all()
    return render(request, "appointment.html", {'form': form, 'doctors': doctors})

def appointment_success(request):
    # This is a simple success page. For a more robust implementation,
    # you could pass the appointment ID via session and display details.
    messages.success(request, 'Your appointment is booked successfully!')
    return render(request, "appointment_success.html")

def events(request):
    events = Event.objects.all().order_by('-date')
    return render(request, "events.html", {'events': events})

def gallery(request):
    images = GalleryImage.objects.all().order_by('-date')
    categories = GalleryCategory.objects.all()
    return render(request, "gallery.html", {'images': images, 'categories': categories})

def doctor_detail(request, slug):
    doctor = get_object_or_404(Doctor, slug=slug)
    return render(request, "doctor_detail.html", {'doctor': doctor})

def service_detail(request, slug):
    # For now, just render the services list page
    return render(request, "services.html")

def testimonials(request):
    testimonials = Testimonial.objects.all()
    return render(request, "testimonials.html", {'testimonials': testimonials})


