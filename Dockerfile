FROM golang:1.13

# Install beego and the bee dev tool
# github.com/SashaIr/hanabi-live


RUN apt update
RUN apt install mariadb-server npm -y

RUN npm i npm@latest -g

ENV GOPATH /go
RUN mkdir -p "$GOPATH/src/github.com/Zamiell/" /repo
RUN cd "$GOPATH/src/github.com/Zamiell/" && ln -s /repo hanabi-live && git clone https://github.com/SashaIr/hanabi-live hanabi-live
WORKDIR "$GOPATH/src/github.com/Zamiell/hanabi-live"
RUN ./install/install_dependencies.sh

RUN service mysql start && \
mysql -u root -e "\
UPDATE mysql.user SET Password=PASSWORD('cusu') WHERE User='root';\
DELETE FROM mysql.user WHERE User='';\
DELETE FROM mysql.user WHERE User='root' AND Host NOT IN ('localhost', '127.0.0.1', '::1');\
DROP DATABASE IF EXISTS test;\
DELETE FROM mysql.db WHERE Db='test' OR Db='test\\_%';\
CREATE DATABASE hanabi;\
CREATE USER 'hanabiuser'@'localhost' IDENTIFIED BY '1234567890';\
GRANT ALL PRIVILEGES ON hanabi.* to 'hanabiuser'@'localhost';\
FLUSH PRIVILEGES;" && \
./install/install_database_schema.sh

# Expose the application on port 8080
EXPOSE 80

VOLUME /repo

CMD ./install/install_dependencies.sh && ./build_client.sh && service mysql start && ./run.sh
