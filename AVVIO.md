# Cose da fare per creare il server

Per creare un nuovo db (visto che mariadb fa schifo) bisogna prima creare il container, poi entrarci
ed eseguire a mano
```
mysql < /docker-entrypoint-initdb.d/init.sql
```

Il sito invece dovrebbe molto in teoria partire da solo quando crei il container, ma deve essere
avviato dopo che il db è già stato inizializzato.

Nel complesso vorrai fare:
```
docker-compose up -d db
docker exec -it <nome del container del db> bash
> dai il comando di prima
docker-compose up -d
```
