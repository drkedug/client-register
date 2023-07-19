FROM mysql:latest
ENV MYSQL_ROOT_PASSWORD=
ENV MYSQL_DATABASE=client-register
COPY ./schema.sql /docker-entrypoint-initdb.d/
