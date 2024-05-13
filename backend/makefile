CHANGED_FILES = git diff --name-only --diff-filter=d | grep -E "\.py$" | tr "\n" " "
BACKEND_COMPOSE = docker compose exec backend
DATABASE_COMPOSE = docker compose exec database
MANAGE_PY =  $(BACKEND_COMPOSE) python manage.py


githook:
	@ git config --local core.hooksPath .githooks/

createsuperuser:
	@ $(MANAGE_PY) createsuperuser

makemigrations:
	@ $(MANAGE_PY) makemigrations

migrate:
	@ $(MANAGE_PY) migrate

shell:
	@ $(MANAGE_PY) shell

backend-bash:
	@ $(BACKEND_COMPOSE) bash

database-bash:
	@ $(DATABASE_COMPOSE) bash

run-dev:
	python manage.py runserver 0.0.0.0:8000

run:
	python manage.py runserver 0.0.0.0:8000

pip:
	pip install -r ./requirements/production.txt

pip-dev:
	pip install -r ./requirements/local.txt

test:
	@ $(BACKEND_COMPOSE) python manage.py test apps

up:
	docker compose up -d --build

down:
	docker compose down 

format:
	black **/*.py --exclude '\.venv/|\.git/'

format-check:
	black **/*.py --check --exclude '\.venv/|\.git/'

lint:
	pylint --recursive=y .

lint-changed-files:
	FILES=$("$CHANGED_FILES") && [[ ! -z "$(FILES)" ]] && pylint --recursive=y "$(FILES)" || echo ""

qa-check:
	FILES=$("$CHANGED_FILES") && [[ ! -z "$(FILES)" ]] && pylint --recursive=y "$(FILES)" || echo ""
	black **/*.py --check --exclude '\.venv/|\.git/'

%:
	@:
