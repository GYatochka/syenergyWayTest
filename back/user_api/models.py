from django.db import models
from django.contrib.auth.models import Group

class MyGroup(Group):
    description = models.TextField(blank=True)

    class Meta:
        db_table = 'Group'
        ordering = ['name']

    def __unicode__(self):
        return self.name