FROM golang:1.13

# Install beego and the bee dev tool
# github.com/SashaIr/hanabi-live


RUN apt update
RUN apt install npm -y

RUN npm i npm@latest -g

ENV GOPATH /go
RUN mkdir -p "$GOPATH/src/github.com/Zamiell/" /repo
RUN cd "$GOPATH/src/github.com/Zamiell/" && ln -s /repo hanabi-live
WORKDIR "$GOPATH/src/github.com/Zamiell/hanabi-live"

# Copy local files in container
COPY . .

# Build files
RUN ./install/install_dependencies.sh

# Expose the application on port 8080
EXPOSE 80

STOPSIGNAL SIGINT

CMD ./run.sh
