from django.conf.urls import include, url
from django.contrib import admin
from products import views
from rest_framework import routers
from products import views

router = routers.DefaultRouter()
router.register(r'product', views.ProductView,'product')
# from django.urls import path,re_path
urlpatterns = [
    url(r'admin/', admin.site.urls),
    url(r'api/', include(router.urls)),
    # url(r'api/products',views.product_list),
    # url(r'api/products/([0-9])',views.product_detail),
]
