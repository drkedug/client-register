FROM mysql:latest
ENV MYSQL_ROOT_PASSWORD=gabi
ENV MYSQL_DATABASE=sistema
ENV MYSQL_USER=admin
ENV MYSQL_PASSWORD=admin
COPY ./schema.sql /docker-entrypoint-initdb.d/
EXPOSE 3306