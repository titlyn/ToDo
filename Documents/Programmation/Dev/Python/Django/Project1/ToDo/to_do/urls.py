from django.urls import path
from . import views

urlpatterns = [
    path('', views.index, name='to_do-index'),
    path('update/<int:pk>/', views.update, name='to_do-update'),
    path('delete/<int:pk>/', views.delete, name='to_do-delete'),
]