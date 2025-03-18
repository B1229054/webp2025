#from django.db import models

# Create your models here.

#from django.db import models

#class Post(models.Model):
    #title = models.CharField(max_length=100)
    #content = models.TextField(blank=True)
    #photo = models.URLField(blank=True)
    #location = models.CharField(max_length=100)
    #created_at = models.DateTimeField(auto_now_add=True)

from django.db import models

from django.db import models

class course(models.Model):
    instructor = models.CharField(max_length=100)  
    coursetitle = models.CharField(max_length=255)  
    department = models.CharField(max_length=255) 


