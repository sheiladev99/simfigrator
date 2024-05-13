from django.db import models
from django.utils.translation import gettext_lazy as _


class QuestionTypes(models.TextChoices):
    SINGLE = "single_choice", _("Single Choice")
    MULTIPLE = "multiple_choice", _("Multiple Choice")
    ORDERED = "ordered_choice", _("Ordered Choice")


class QuestionCategory(models.TextChoices):
    EXPERIENCE_LEVEL = "experience_level", _("Experience Level")
    BUDGET = "budget", _("Budget")
    COMPONENTS = "components", _("Components")
    PRIORITY_AND_OTHERS = "priority_and_others", _("Priority & Others")
    GAMES_AND_UTILITY = "games_and_utility", _("Games & Utility")
    LOCATION = "location", _("Locations")


class Continents(models.TextChoices):
    NORTH_AMERICA = "north_america", _("North America")
    SOUTH_AMERICA = "SOUTH_AMERICA", _("SOUTH AMERICA")
    EUROPE = "europe", _("Europe")
    ASIA_PACIFIC = "asia_pacific", _("Asia Pacific")
    AUSTRALIA = "australia", _("Australia")
