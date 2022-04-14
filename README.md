## Curso Docker Full Cycle

### Docker commands
- Rodar um container: ```docker run NOME```
- Parar um container: ```docker stop NOME```
- Iniciar um container: ```docker start NOME```
- Listar os containers em execução: ```docker ps```
- Listar todos os container: ```docker ps -a```
- Remover um container parado: ```docker rm NOME```
- Forçar Remover container: ```docker rm -f NOME```
- Nomear um container: ```docker run --name NOVO_NOME NOME```
- Entrar em um container: ```docker exec -it NOME bash```


### Opções Docker
- Modo iterativo: ```-it```
- detach: ```-d```
- Mapear porta: ```-p PORTA:PORTA_CONTAINER```
- Configurar volume: ```-v NOME_VOLUME```