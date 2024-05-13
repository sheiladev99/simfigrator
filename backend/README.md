# Django Project Boilerplate

This repository is a boilerplate Django project designed to accelerate the development process and enhance the user
experience when initiating new projects at *Webcentriq*. Created by the **Code Stars** team.

<br>

## Table Of Contents

- [Getting Started](#getting-started)
- [Notes](#notes)
  - [Database host & name](#db_and_host_name)

## Getting Started

Before anything, please consider installing local requirement in `requirements/local.txt`.

1. Please run below command to add pre-commit hook, for code quality assurance (Make sure you will have your pipeline on
   GitLab, referencing `.gitlab-ci.yml` file):
   ```bash
   # If `make` is installed
   $ make githook

   # or

   # If `make` is an unrecognized command
   $ git config --local core.hooksPath ./.githooks/
   ```

2. First you must clone the boilerplate, to do it so use the command below in terminal:
    ```bash
    $ git clone git@github.com:codestarsup/django-starter-template.git
    ```
3. If you don't have docker on your local OS please consider [installing the docker](https://docs.docker.com/desktop/)
   before continuing other steps.
4. Create your `.env` file in root of the project based on `.env.example`.

5. Build the dockerfile files with command bellow in terminal.

    ```bash
    $ docker compose build
    ```

6. Your image is ready, and you can run your project by typing `$ docker compose up` in the terminal if you wish to run
   the container is detached mode(Run containers in the background) please run `$ docker compose up -d`.

<br>

1. To run a command in running container use this structure in your terminal:
    ```bash
    $ docker compose run <container> <command>
    ```
   if you need to start an interactive shell with your container use this command:
   ```bash
   $ docker compose exec -it <container> bash
   ```
   Then run your django project commands inside the container using this following command:
    ```bash
    $ python manage.py makemigrations
    ```

You can combine the commands that describe in previous sections as bellow for building and running the containers in
detached mode:

```bash
  $ docker compose up --build -d
```

## Notes

### Database host & name

**Note #1:** If you are going to change database container name from starter_database to another name such as
project_x_database. consider to change the postgres environment variables in `.env` file accordingly. You should set the
host name
to project_x_database.
