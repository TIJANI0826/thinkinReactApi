from django.shortcuts import render

# Create your views here.
from rest_framework.response import Response
from rest_framework.decorators import api_view
from rest_framework import status,viewsets
from rest_framework.utils import serializer_helpers

from .models import Product
from .serializers import *
from products import serializers

# @api_(["viewGET","POST", "PUT","DELETE"])
class ProductView(viewsets.ModelViewSet):
    serializer_class = ProductSerializer
    queryset = Product.objects.all()

@api_view(["GET","POST"])
def product_list(request):
    if request.method == "GET":
        data = Product.objects.all()

        serializer = ProductSerializer(data,context={'request': request},many=True)

        return Response(serializer.data)
    elif request.method == "POST":
        serializer = ProductSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(status=status.HTTP_201_CREATED)

        return Response(serializer.errors,status=status.HTTP_400_BAD_REQUEST)

@api_view(["PUT","DELETE"])
def product_detail(request,pk):
    try:
        product = Product.object.get(pk=pk)
    except Product.DoesNotExist:
        return Response(status=status.HTTP_404_NOT_FOUND)
    
    if request.method == 'PUT':
        serializer = ProductSerializer(product,data=request.data,context={'request':request})
        if serializer.is_valid():
            serializer.save()
            return Response(status=status.HTTP_204_NO_CONTENT)
        
        return Response(serializer.errors,status=status.HTTP_400_BAD_REQUEST)
    elif request.method == "DELETE":
        product.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)
