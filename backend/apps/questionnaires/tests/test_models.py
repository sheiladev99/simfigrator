from django.test import TestCase
from apps.questionnaires.models import Question, Answer, UserRequest, Country
from apps.questionnaires.choices import QuestionTypes, QuestionCategory, Continents


class QuestionModelTestCase(TestCase):
    def setUp(self):
        self.question = Question.objects.create(
            title="What is your favorite color?",
            question_type=QuestionTypes.SINGLE,
            description="My favorite color is blue.",
            question_category=QuestionCategory.EXPERIENCE_LEVEL,
            order=0,
        )

    def test_question_creation(self):
        self.assertEqual(self.question.title, "What is your favorite color?")
        self.assertEqual(self.question.question_type, QuestionTypes.SINGLE)
        self.assertEqual(
            self.question.question_category, QuestionCategory.EXPERIENCE_LEVEL
        )
        self.assertEqual(self.question.description, "My favorite color is blue.")
        self.assertEqual(self.question.order, 0)

    def test_str_representation(self):
        self.assertEqual(
            str(self.question),
            f"Question {self.question.question_category}- {self.question.order}",
        )


class AnswerModelTestCase(TestCase):
    def setUp(self):
        self.question = Question.objects.create(
            title="What is your favorite color?",
            description="My favorite color is blue.",
            question_type=QuestionTypes.SINGLE,
            order=0,
        )
        self.answer = Answer.objects.create(
            question=self.question,
            title="Blue",
            description="My favorite color is blue.",
            order=1,
        )

    def test_answer_creation(self):
        self.assertEqual(self.answer.title, "Blue")
        self.assertEqual(self.answer.description, "My favorite color is blue.")
        self.assertEqual(self.answer.order, 1)
        self.assertEqual(self.answer.question, self.question)

    def test_answer_optional_fields(self):
        # Test creation without optional fields
        answer_without_optional_fields = Answer.objects.create(
            question=self.question, title="Red"
        )
        self.assertEqual(answer_without_optional_fields.title, "Red")
        self.assertEqual(answer_without_optional_fields.description, "")
        self.assertEqual(answer_without_optional_fields.order, 0)

    def test_str_representation(self):
        self.assertEqual(str(self.answer), "Blue")


class UserInformationModelTest(TestCase):
    def setUp(self):
        self.country = Country.objects.create(
            id=1, name="United State", code="US", continent=Continents.NORTH_AMERICA
        )
        self.user = UserRequest.objects.create(
            first_name="John",
            last_name="Doe",
            email="john@example.com",
            country=self.country,
        )

    def test_user_information_creation(self):
        self.assertEqual(self.user.first_name, "John")
        self.assertEqual(self.user.last_name, "Doe")
        self.assertEqual(self.user.email, "john@example.com")
        self.assertEqual(self.user.country, self.country)

    def test_str_representation(self):
        self.assertEqual(str(self.user), "john@example.com")

class CountryModelTest(TestCase):
    def setUp(self):
        self.country = Country.objects.create(
            id=1, name="United State", code="US", continent=Continents.NORTH_AMERICA
        )

    def test_country_creation(self):
        self.assertEqual(self.country.name, "United State")
        self.assertEqual(self.country.code, "US")
        self.assertEqual(self.country.continent, Continents.NORTH_AMERICA)

    def test_str_representation(self):
        self.assertEqual(str(self.country), "United State")
