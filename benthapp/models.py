from django.db import models

class Service(models.Model):
    name = models.CharField(max_length=100)
    icon = models.CharField(max_length=50)
    description = models.TextField()
    slug = models.SlugField(unique=True)

    def __str__(self):
        return self.name

class Specialty(models.Model):
    name = models.CharField(max_length=100)

    def __str__(self):
        return self.name

class Doctor(models.Model):
    name = models.CharField(max_length=100)
    specialty = models.ForeignKey(Specialty, on_delete=models.CASCADE)
    qualification = models.CharField(max_length=200)
    experience_years = models.PositiveIntegerField()
    rating = models.DecimalField(max_digits=3, decimal_places=1)
    image = models.ImageField(upload_to='doctors/')
    slug = models.SlugField(unique=True)

    def __str__(self):
        return self.name

class Department(models.Model):
    name = models.CharField(max_length=100)
    phone = models.CharField(max_length=20, blank=True, null=True)
    email = models.EmailField(blank=True, null=True)

    def __str__(self):
        return self.name

class Appointment(models.Model):
    doctor = models.ForeignKey(Doctor, on_delete=models.CASCADE)
    patient_name = models.CharField(max_length=100)
    patient_email = models.EmailField()
    patient_phone = models.CharField(max_length=20)
    appointment_date = models.DateTimeField()
    symptoms = models.TextField()
    status = models.CharField(max_length=20, choices=[('Pending', 'Pending'), ('Confirmed', 'Confirmed'), ('Cancelled', 'Cancelled')], default='Pending')

    def __str__(self):
        return f"Appointment with {self.doctor} for {self.patient_name}"

class ArticleCategory(models.Model):
    name = models.CharField(max_length=100)

    def __str__(self):
        return self.name

class Article(models.Model):
    title = models.CharField(max_length=200)
    category = models.ForeignKey(ArticleCategory, on_delete=models.CASCADE)
    author = models.ForeignKey(Doctor, on_delete=models.SET_NULL, null=True, blank=True)
    publish_date = models.DateField()
    image = models.ImageField(upload_to='articles/')
    content = models.TextField()
    excerpt = models.TextField(blank=True, null=True)
    is_featured = models.BooleanField(default=False)
    slug = models.SlugField(unique=True)

    def __str__(self):
        return self.title

class EventCategory(models.Model):
    name = models.CharField(max_length=100)

    def __str__(self):
        return self.name

class Event(models.Model):
    title = models.CharField(max_length=200)
    category = models.ForeignKey(EventCategory, on_delete=models.CASCADE)
    image = models.ImageField(upload_to='events/')
    date = models.DateTimeField()
    location = models.CharField(max_length=200)
    description = models.TextField()
    is_featured = models.BooleanField(default=False)
    slug = models.SlugField(unique=True)

    def __str__(self):
        return self.title

class JobCategory(models.Model):
    name = models.CharField(max_length=100)

    def __str__(self):
        return self.name

class JobOpening(models.Model):
    title = models.CharField(max_length=200)
    category = models.ForeignKey(JobCategory, on_delete=models.CASCADE)
    location = models.CharField(max_length=100)
    experience_required = models.CharField(max_length=50)
    posted_date = models.DateField()
    description = models.TextField()
    requirements = models.TextField()
    salary_range = models.CharField(max_length=100, blank=True, null=True)
    slug = models.SlugField(unique=True)

    def __str__(self):
        return self.title

class ContactMessage(models.Model):
    name = models.CharField(max_length=100)
    phone = models.CharField(max_length=20)
    email = models.EmailField()
    subject = models.CharField(max_length=100)
    message = models.TextField()
    received_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return f"Message from {self.name} on {self.subject}"

class Testimonial(models.Model):
    author = models.CharField(max_length=100)
    quote = models.TextField()
    rating = models.PositiveIntegerField(default=5)
    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return f'Testimonial by {self.author}'

class GalleryCategory(models.Model):
    name = models.CharField(max_length=100)

    def __str__(self):
        return self.name

class GalleryImage(models.Model):
    title = models.CharField(max_length=200)
    category = models.ForeignKey(GalleryCategory, on_delete=models.CASCADE)
    image = models.ImageField(upload_to='gallery/')
    description = models.TextField(blank=True, null=True)
    date = models.DateField()

    def __str__(self):
        return self.title