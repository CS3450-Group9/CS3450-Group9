from django.urls import path

from . import views

urlpatterns = [
    path('carRetrivalForm', views.carRetrivalForm, name='carRetrivalForm'),
]