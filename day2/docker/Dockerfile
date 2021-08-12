FROM node:14 
#이미지받아오기

# docker build . -t study/hello-node:step1
# docker create -it --name doc-node-test study/hello-node:step1
# docker create -it -p 8080:8080 -p 8022:22 --name doc-node-test study/hello-node:step1

# docker images
# docker ps (컨테이너 확인)
# docker ps -a (전부 확인)
# docker start *containerId*
# docker exec -it 181ac710b420(id) bash (linux 접속)
# docker exec -it f5264c437570 ls (정보)
# exit (linux 나가기)
# docker start 181ac710b420 (docker 시작)
# docker stop 181ac710b420 (docker 중지)

# nano /etc/ssh/sshd_config (bash 에서)
# passwd root
# ssh root@localhost -p 8022 (ssh 접속)
# service ssh start
# logout

#mongodb


#FROM node:14
#RUN apt-get update && \
#apt-get install -y vim nano net-tools openssh-server
#여기에..
RUN apt-get update && \
    apt-get install -y vim nano net-tools openssh-server


