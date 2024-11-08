from django.urls import path
from . import views

urlpatterns = [
    path('signup', views.signup, name = "signup"),
    path('signin', views.signin, name = "signin"),
	path('logout/', views.logout, name="logout"),
 
    path("",views.home,name = "home"),
    path("aboutus",views.aboutus,name = "aboutus"),
    path("base",views.base,name = "base"),
    path("contactus",views.contactus,name = "contactus"),
    path("contactpost/",views.contactpost,name = "contactpost"),
    path("contactlist/",views.contactlist,name = "contactlist"),
    path("viewcontact/<int:id>/",views.viewcontact,name = "viewcontact"),
    path('deletecontact/<int:id>/', views.deletecontact, name = "deletecontact"),
    path("dashboard/",views.dashboard,name = "dashboard"),
    path("services/",views.services,name = "services"),
    path("shop/",views.shop,name = "shop"),
    
    path("faq/",views.faq,name = "faq"),
    path("pricing/",views.pricing,name = "pricing"),
    path("privancy/",views.privancy,name = "privancy"),
    path("developer/",views.developer,name = "developer"),

]