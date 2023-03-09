from django.shortcuts import render
from django.http import HttpResponse , HttpResponseRedirect
from django.http import Http404
from django.shortcuts import get_object_or_404
from django.urls import reverse
# Create your views here.

def carRetrivalForm(request):
    
    return render(request, 'Customer/carRetrivalForm.html')

def helpOTW(request):
    return render(request, 'Customer/helpOTW.html')
