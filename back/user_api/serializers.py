from django.contrib.auth.models import User, Group
from user_api.models import MyGroup
from django.contrib.auth import get_user_model
from rest_framework import serializers

UserModel = get_user_model()


class GroupSerializer(serializers.ModelSerializer):
    class Meta:
        model = MyGroup
        fields = ('id', 'name', 'description')


class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = UserModel
        fields = ('id', 'username', 'date_joined', 'groups',)

