from rest_framework.test import APITestCase
from rest_framework import status
from django.urls import reverse
from apps.questionnaires.models import Question, Answer, UserRequest, Country
from apps.questionnaires.choices import Continents


class QuestionnaireAPITest(APITestCase):
    def setUp(self):
        self.question = Question.objects.create(
            title="What is your favorite color?",
            question_type="text",
            description="The color of the sky",
            order=1,
            question_category="general",
        )
        self.answer = Answer.objects.create(
            title="Blue",
            description="The color of the sky",
            order=1,
            question=self.question,
        )
        self.country = Country.objects.create(
            name="United State", code="US", continent=Continents.NORTH_AMERICA
        )
        self.list_url = reverse("api:survey-list")
        self.survey_url = reverse("api:survey-survey")

    def test_list_questions(self):
        response = self.client.get(self.list_url)
        self.assertEqual(response.status_code, status.HTTP_200_OK)
        self.assertEqual(len(response.data), 2)

    def test_survey_submission(self):
        data = {
            "first_name": "John",
            "last_name": "Doe",
            "email": "john@example.com",
            "country": self.country.id,
            "surveys": [
                {"question_id": self.question.pk, "answer_ids": [self.answer.pk]}
            ],
        }
        response = self.client.post(self.survey_url, data, format="json")
        self.assertEqual(response.status_code, status.HTTP_201_CREATED)
        self.assertEqual(UserRequest.objects.count(), 1)
        user_info = UserRequest.objects.first()
        self.assertEqual(user_info.first_name, "John")
        self.assertEqual(user_info.last_name, "Doe")
        self.assertEqual(user_info.email, "john@example.com")
        self.assertEqual(user_info.country, self.country)
