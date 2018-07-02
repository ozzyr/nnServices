# instala uma imagem MYSQL 
docker run --name database -e MYSQL_ROOT_PASSWORD=adm161283 -p 3306:3306 -d mysql

#abre a instancia do mysql no shel do docker

docker exec -it database mysql -p

