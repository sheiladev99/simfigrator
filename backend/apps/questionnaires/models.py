from django.db import models
from django.utils.translation import gettext_lazy as _
from django.contrib.postgres.fields import HStoreField

from apps.questionnaires.choices import QuestionTypes, QuestionCategory, Continents
from apps.questionnaires.fields import LowercaseEmailField


class Question(models.Model):
    title = models.TextField(verbose_name=_("Question Title"))
    question_type = models.CharField(
        verbose_name=_("Question Type"),
        max_length=15,
        choices=QuestionTypes.choices,
        default=QuestionTypes.SINGLE,
    )
    order = models.SmallIntegerField(verbose_name=_("Question Order"), default=0)
    question_category = models.CharField(
        verbose_name=_("Question Category"),
        max_length=19,
        choices=QuestionCategory.choices,
        default=QuestionCategory.EXPERIENCE_LEVEL,
    )
    description = models.TextField(verbose_name=_("Question Description"), blank=True)
    

    def __str__(self) -> str:
        return f"Question {self.question_category}- {self.order}"

    class Meta:
        verbose_name = _("Question")
        verbose_name_plural = _("Questions")
        db_table = "questions"


class Answer(models.Model):
    question = models.ForeignKey(
        Question,
        verbose_name=_("Question"),
        on_delete=models.CASCADE,
    )
    title = models.CharField(verbose_name=_("Answer Title"), max_length=255)
    description = models.TextField(verbose_name=_("Answer Description"), blank=True)
    order = models.SmallIntegerField(
        verbose_name=_("Answer Order"),
        help_text=_(
            "If needed, this field can be used to specify the answers order.(Not Necessary)"
        ),
        default=0,
    )

    def __str__(self) -> str:
        return self.title

    class Meta:
        verbose_name = _("Answer")
        verbose_name_plural = _("Answers")
        db_table = "answers"


class Country(models.Model):
    name = models.CharField(verbose_name=_("Name"), max_length=50)
    code = models.CharField(verbose_name=_("Code"), max_length=2)
    continent = models.CharField(
        verbose_name=_("Continent"),
        max_length=15,
        choices=Continents.choices,
        default=Continents.NORTH_AMERICA,
    )

    def __str__(self) -> str:
        return self.name

    class Meta:
        verbose_name = _("Country")
        verbose_name_plural = _("Countries")
        db_table = "countries"


class UserRequest(models.Model):
    first_name = models.CharField(verbose_name=_("First Name"), max_length=150)
    last_name = models.CharField(verbose_name=_("Last Name"), max_length=150)
    email = LowercaseEmailField(verbose_name=_("Email Address"))
    country = models.ForeignKey(
        Country, verbose_name=_("Country"), on_delete=models.CASCADE
    )

    def __str__(self) -> str:
        return self.email

    class Meta:
        verbose_name = _("User Request")
        verbose_name_plural = _("User Requests")
        db_table = "user_requests"
