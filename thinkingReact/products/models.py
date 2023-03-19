from django.db import models

# Create your models here.

class Product(models.Model):
    name = models.CharField("Name",max_length=240)
    stocked= models.BooleanField()
    category= models.CharField(max_length=20)
    price= models.DecimalField(max_digits=19,decimal_places=2)
    
    def __str__(self):
        return self.name
