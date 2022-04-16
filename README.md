## Curso Docker Full Cycle

### Comandos Container: nginx como exemplo
- Rodar um container: ```docker run nginx```
- Parar um container: ```docker stop nginx```
- Iniciar um container: ```docker start nginx```
- Listar os containers em execução: ```docker ps```
- Listar todos os container: ```docker ps -a```
- Remover um container parado: ```docker rm nginx```
- Forçar Remover container: ```docker rm -f nginx```
- Nomear um container: ```docker run --name nginx nginx```
- Entrar em um container: ```docker exec -it NOnginxME bash```
- Mapear pasta local pra Container: ```docker run -v "$(pwd)"/html:/usr/share/nginx/html nginx```
- Executar container montando volume: ```docker run -d --name nginx -p 8080:80 --mount type=bind,source="$(pwd)"/html,target=/usr/share/nginx/html nginx```
- Mapear volume para container: ```docker run -d --name nginx -p 8080:80 --mount type=volume,source=NOME_VOLUME,target=/app nginx``` ou ```docker run -d --name nginx2 -v NOME_VOLUME nginx```
- Mostrar bash do Container: ```docker attach NOME```
- Executar container com Rede: ```docker run -dti --network NOME_REDE NOME_CONTAINER```
- 

### Comandos Volumes
- Listar volumes: ```docker volume ls```
- Criar volume: ```docker volume create NOME_VOLUME```
- Remover um volume: ```docker volume rm NOME_VOLUME```
- Inspecionar um volume: ```docker volume inspect NOME_VOLUME``` 

### Comandos Imagem
- Criar uma imagem via Dockerfile: ```docker build -t NOME_IMAGEM:latest .```
- Listar imagens: ```docker images```

### Opções Docker:
- Modo iterativo: ```-it```
- detach(deixar terminal livre): ```-d```
- Mapear porta: ```-p PORTA:PORTA_CONTAINER```
- Mapear Volume: ```-v NOME_VOLUME:VOLUME_CONTAINER```

### Comandos Dockerfile
- Imagem de base: ```FROM nginx:latest```
- Diretório de trabalho: ```WORKDIR /diretorio```
- Rodar um comando: ```RUN comando```
- Configurar usuário: ```USER nome_usuario```
- Ponto de entrada: ```ENTRYPOINT file```
- Executar comandos(Substituível): ```CMD ["echo", "Hello World"]```
- Executar comandos(Fixos): ```ENTRYPOINT ["echo", "Hello World"]```

### Comandos de Rede
- Listar redes: ```docker network ls```
- Remover redes não utilizadas: ```docker network prune```
- Criar uma nova Rede: ```docker network create --driver bridge NOME_REDE```
- Conectar container a Rede: ```docker network connect NOME_REDE NOME_CONTAINER```
- Container acessando maquina: ```curl http://host.docker.internal:8000```
