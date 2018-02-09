## Multi-container, multi-host app using Docker Compose and Docker Swarm
This sample shows how Docker Compose and Docker Swarm can be used for multi-container, multi-host app. Two containers include 1) NodeJS app 2) HAProxy

### Host 1
- [Install docker on an EC2 instance](https://gist.github.com/brijesh-deb/c223c7d8e7d14e83d96001e87330642a)
- [Install Docker Compose](https://gist.github.com/brijesh-deb/fb6d99e577d73b24f3dfcc35ad745ad1)
- Add TCP/2377 in security group of EC2 instance
- Creare a folder "app" and copy docker-compose.yml to that folder
- Run following command
	-	docker swarm init --advertise-addr [private ip of ec2]:2377 --listen-addr [private ip of ec2]:2377
	- docker stack deploy --compose-file=docker-compose.yml prod
	- docker service ls (should show 3 prod_web)
	- docker service scale prod_web=5
	- docker service ls (should show 5 prod_web)
- Test
	- [public ip address] on browser

### Host 2
- [Install docker on an EC2 instance](https://gist.github.com/brijesh-deb/c223c7d8e7d14e83d96001e87330642a)
- [Install docker compose](https://gist.github.com/brijesh-deb/fb6d99e577d73b24f3dfcc35ad745ad1)
- Add TCP/2377 in security group of EC2 instance
- Execute command in initial manager node (node 1) to get manager token
	- docker swarm join-token manager
- Execute worker token in current node
	- docker node ls (will show 2 nodes)
	- docker service scale prod_web=7
	- docker service ls (should show 7 prod_web)
