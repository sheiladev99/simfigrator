from rest_framework import serializers
from apps.questionnaires.models import Question, Answer, UserRequest, Country


class AnswerSerializer(serializers.ModelSerializer):
    class Meta:
        model = Answer
        fields = ("id", "title", "description", "order")


class QuestionSerializer(serializers.ModelSerializer):
    answer_set = AnswerSerializer(many=True, read_only=True)

    class Meta:
        model = Question
        fields = (
            "id",
            "title",
            "description",
            "question_type",
            "order",
            "question_category",
            "answer_set",
        )


class CountrySerializer(serializers.ModelSerializer):
    continent = serializers.CharField(source="get_continent_display")

    class Meta:
        model = Country
        fields = (
            "id",
            "name",
            "code",
            "continent",
        )


class SurveyItemSerializer(serializers.Serializer):
    question_id = serializers.PrimaryKeyRelatedField(queryset=Question.objects.all())
    answer_ids = serializers.ListField(
        child=serializers.PrimaryKeyRelatedField(queryset=Answer.objects.all()),
        write_only=True,
    )


class SurveySubmissionSerializer(serializers.ModelSerializer):
    surveys = serializers.ListField(
        child=SurveyItemSerializer(),
        write_only=True,
    )

    class Meta:
        model = UserRequest
        fields = (
            "first_name",
            "last_name",
            "email",
            "country",
            "surveys",
        )

    def create(self, validated_data):
        surveys_data = validated_data.pop(
            "surveys"
        )  # We will use the surveys data in the future
        user_info = UserRequest.objects.create(**validated_data)
        return user_info
