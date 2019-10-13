from django.contrib.auth.models import User, Group
from django.contrib.auth import get_user_model
from rest_framework import serializers

UserModel = get_user_model()

class GroupSerializer(serializers.HyperlinkedModelSerializer):
    class Meta:
        model = Group
        fields = ('id', 'name')


class UserSerializer(serializers.ModelSerializer):
    groups = GroupSerializer(many=True)

    class Meta:
        model = UserModel
        fields = ('id', 'username', 'date_joined', 'groups',)

