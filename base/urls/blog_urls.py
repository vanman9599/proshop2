from django.urls import path

from base.views import blog_views as views


urlpatterns = [

    path('', views.getBlogs, name="blogs"),


]
