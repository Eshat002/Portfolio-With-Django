from django.shortcuts import render
from django.http import JsonResponse
from django.views import View
import json
from django.core.mail import EmailMessage


def home(request):
    return render(request,"App/home.html",context={})

 
def about(request):
    return render(request,"App/about.html",context={})



class sendMessageForm(View):
    def post(self, request, *args, **kwargs):
        try:
            form_data = json.loads(request.body)  # Parse JSON data
            print("data",form_data)
            name=form_data.get("name")
            email=form_data.get("email")
            body=form_data.get("message")
            to_email=["eshatjubayer22@outlook.com"]
            subject=form_data.get("subject")
             
            if name.strip() == "" or email.strip() == "":
                return JsonResponse({"RequiredError":"Name and Email both should be filled."},safe=False)
            
             
            subject = subject
            body = body
            to_email = to_email
            from_email = email
            email = EmailMessage(subject, body, from_email, to_email)
            email.send()
                
          

            response_data = {'message': 'Form data received successfully'}
            return JsonResponse(response_data)

        except json.JSONDecodeError as e:
            return JsonResponse({'error': 'Invalid JSON format'}, status=400)