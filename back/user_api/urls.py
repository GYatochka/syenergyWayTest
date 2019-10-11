from django.urls import path, include
from user_api import views

urlpatterns = [

    path('users',views.UserList.as_view(),name='user-list'),
    #path('users/<int:pk>',views.UserDetail.as_view(),name='user-detail'),
]

