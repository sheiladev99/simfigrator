# Generated by Django 4.1.13 on 2024-04-30 14:46

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Question',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('title', models.TextField(verbose_name='Question Title')),
                ('question_type', models.CharField(choices=[('single_choice', 'Single Choice'), ('multiple_choice', 'Multiple Choice'), ('ordered_choice', 'Ordered Choice')], default='single_choice', max_length=15, verbose_name='Question Type')),
                ('order', models.SmallIntegerField(default=0, verbose_name='Question Order')),
            ],
            options={
                'verbose_name': 'Question',
                'verbose_name_plural': 'Questions',
                'db_table': 'questions',
            },
        ),
        migrations.CreateModel(
            name='Answer',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('title', models.CharField(max_length=255, verbose_name='Answer Title')),
                ('description', models.TextField(blank=True, verbose_name='Answer Description')),
                ('order', models.SmallIntegerField(default=0, verbose_name='Answer Order')),
                ('question', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='questionnaires.question', verbose_name='Question')),
            ],
            options={
                'verbose_name': 'Answer',
                'verbose_name_plural': 'Answers',
                'db_table': 'answers',
            },
        ),
    ]
