from .import views
from django.urls import path

apps_name="App"

urlpatterns = [
    path('',views.home,name="home"),
    path('about/',views.about,name="about"),
    path('send-message-form/',views.sendMessageForm.as_view(), name="send_message_form")

]