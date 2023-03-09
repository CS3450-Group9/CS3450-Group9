from django.urls import path

from . import views

urlpatterns = [
    path('carRetrivalForm', views.carRetrivalForm, name='carRetrivalForm'),
    path('helpOTW', views.helpOTW, name='helpOTW')
]