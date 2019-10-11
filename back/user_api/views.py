from django.shortcuts import render
from django.contrib.auth.models import User, Group


from rest_framework import viewsets
from rest_framework import generics
from rest_framework.views import APIView
from rest_framework.response import Response

from user_api.serializers import *


class UserViewSet(viewsets.ModelViewSet):
    """
    API endpoint that allows users to be viewed or edited.
    """
    queryset = User.objects.all().order_by('-id')
    serializer_class = UserSerializer


class GroupViewSet(viewsets.ModelViewSet):
    """
    API endpoint that allows groups to be viewed or edited.
    """
    queryset = Group.objects.all()
    serializer_class = GroupSerializer



class UserList(APIView):

    def get(self, request, pk=None, format=None):
        users = User.objects.all()

        context = {
            'request': request,
        }
        return Response(UserSerializer(users,many = True, context=context).data)
