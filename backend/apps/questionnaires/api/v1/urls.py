from django.conf import settings
from rest_framework.routers import DefaultRouter

from apps.questionnaires.api.v1.views import SurveyViewSet

router = DefaultRouter()


router.register(r"surveys", SurveyViewSet, basename="survey")


app_name = "api"
urlpatterns = []
urlpatterns += router.urls
