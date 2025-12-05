from django.contrib import admin
from .models import (
    Service,
    Specialty,
    Doctor,
    Department,
    Appointment,
    ArticleCategory,
    Article,
    EventCategory,
    Event,
    JobCategory,
    JobOpening,
    ContactMessage,
    Testimonial,
    GalleryCategory,
    GalleryImage,
)

admin.site.register(Service)
admin.site.register(Specialty)
admin.site.register(Doctor)
admin.site.register(Department)
admin.site.register(Appointment)
admin.site.register(ArticleCategory)
admin.site.register(Article)
admin.site.register(EventCategory)
admin.site.register(Event)
admin.site.register(JobCategory)
admin.site.register(JobOpening)
admin.site.register(ContactMessage)
admin.site.register(Testimonial)
admin.site.register(GalleryCategory)
admin.site.register(GalleryImage)