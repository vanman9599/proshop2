from django.shortcuts import render

from rest_framework.decorators import api_view, permission_classes
from rest_framework.permissions import IsAuthenticated, IsAdminUser

from rest_framework.response import Response

from base.models import Product, Blog, Order, OrderItem, ShippingAddress
from base.serializers import BlogSerializer
from datetime import datetime

from rest_framework import status


@api_view(['GET'])
def getBlogs(request):
    blogs = Blog.objects.filter(isHidden=False).order_by('-_id').values()
    serializer = BlogSerializer(blogs, many=True)
    return Response(serializer.data)
