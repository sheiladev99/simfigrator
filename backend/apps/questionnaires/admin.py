from django.contrib import admin
from .models import Question, Answer, UserRequest, Country


class AnswerInline(admin.TabularInline):
    model = Answer
    extra = 1


class QuestionAdmin(admin.ModelAdmin):
    list_display = (
        "id",
        "title",
        "description",
        "question_type",
        "order",
        "question_category",
    )
    list_filter = (
        "question_type",
        "question_category",
    )
    search_fields = ("title",)
    inlines = [AnswerInline]


admin.site.register(Question, QuestionAdmin)


class AnswerAdmin(admin.ModelAdmin):
    list_display = (
        "id",
        "title",
        "question",
        "order",
    )
    list_filter = ("question",)
    search_fields = ("title",)


admin.site.register(Answer, AnswerAdmin)


class UserRequestAdmin(admin.ModelAdmin):
    list_display = (
        "first_name",
        "last_name",
        "email",
        "country",
    )
    search_fields = (
        "first_name",
        "last_name",
        "email",
    )
    list_filter = ("country",)


admin.site.register(UserRequest, UserRequestAdmin)


class CountryAdmin(admin.ModelAdmin):
    list_display = (
        "id",
        "name",
        "code",
        "continent",
    )
    list_filter = ("continent",)
    search_fields = ("name","code")


admin.site.register(Country, CountryAdmin)
