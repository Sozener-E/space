from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from rest_framework_simplejwt.tokens import RefreshToken
from .models import RefreshToken as RefreshTokenModel
from django.contrib.auth import authenticate
from .serializers import SignUpSerializer, LoginSerializer
from django.http import JsonResponse
from django.contrib.auth import get_user_model

User = get_user_model()

class SignUpView(APIView):
    def post(self, request):
        serializer = SignUpSerializer(data=request.data)
        if serializer.is_valid():
            user = serializer.save()  
            
            refresh = RefreshToken.for_user(user)
            access_token = str(refresh.access_token)

            response = JsonResponse({"message": "Welcome to our community."}, status=status.HTTP_201_CREATED)
            
            response.set_cookie(
                key="access_token",
                value=access_token,
                httponly=True,  
                secure=False,  
                samesite="Strict"  
            )

            return response
        print("Serializer hataları:", serializer.errors)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
     
    
class LoginView(APIView):
    def post(self, request):
        serializer = LoginSerializer(data=request.data)
        if serializer.is_valid():
            email = serializer.validated_data['email']
            password = serializer.validated_data['password']
            user = authenticate(request, email=email, password=password)
            if user:
               
                refresh = RefreshToken.for_user(user)
                
                RefreshTokenModel.objects.create(user=user, refresh_token=str(refresh))

                response = Response({"message": "Login successful"}, status=status.HTTP_200_OK)
                response.set_cookie(
                    key="refresh_token",
                    value=str(refresh),
                    httponly=True,  
                    samesite="Lax",  
                    secure=True  
                )
                response.data["access_token"] = str(refresh.access_token)
                return response

            return Response({"error": "Invalid login information."}, status=status.HTTP_401_UNAUTHORIZED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


