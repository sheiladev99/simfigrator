#!/bin/bash



# Function to wait for PostgreSQL to be ready
wait-for-it -t 60 "$POSTGRES_HOST:$POSTGRES_PORT" -- echo "Postgres is up - continuing"


# Check the environment and run the appropriate command
if [ "$DJANGO_ENV" = "dev" ]; then
    echo "Running in development environment"
    make run-dev
elif [ "$DJANGO_ENV" = "prd" ]; then
    echo "Running in production environment"
    make run
else
    echo "Invalid environment specified."
fi

mkdir -p /var/log/supervisor

/usr/bin/supervisord -c /etc/supervisor/supervisord.conf
