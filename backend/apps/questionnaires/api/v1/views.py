from rest_framework import viewsets, status
from rest_framework.decorators import action
from rest_framework.response import Response
from apps.questionnaires.models import Question, Country
from apps.questionnaires.api.v1.serializers import (
    QuestionSerializer,
    SurveySubmissionSerializer,
    CountrySerializer,
)


class SurveyViewSet(viewsets.GenericViewSet):
    queryset = Question.objects.all()
    serializer_class = QuestionSerializer

    def list(self, request, *args, **kwargs):
        queryset = self.get_queryset()
        serializer = self.get_serializer(queryset, many=True)
        countries = Country.objects.all()
        return Response(
            {
                "questions": serializer.data,
                "countries": CountrySerializer(countries, many=True).data,
            },
            status=status.HTTP_200_OK,
        )

    @action(detail=False, methods=["post"], serializer_class=SurveySubmissionSerializer)
    def survey(self, request):
        serializer = self.get_serializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
