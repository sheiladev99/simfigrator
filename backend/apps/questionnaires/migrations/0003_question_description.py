# Generated by Django 4.1.13 on 2024-05-13 14:03

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('questionnaires', '0002_country_question_question_category_and_more'),
    ]

    operations = [
        migrations.AddField(
            model_name='question',
            name='description',
            field=models.TextField(blank=True, verbose_name='Question Description'),
        ),
    ]
