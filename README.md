# where are you from?
This challenge belongs to the Web Exploitation category, which involves manipulating the use of Referer headers.

## Requirements
- Docker installed and running (Linux / Windows / macOS).  
- RAM: **50–90 MB** available for the container.  
- Storage: around **70–200 MB** free for the image and container.  
- An available host port (default example uses `9000`).

## Setup 
To setup this challenge, you need to built this into docker image first:
```
sudo docker build -t hmtictf/chall1-web:latest .
```
Create a new container using this image (you can change 9000 with other port if it's already used):
```
sudo docker run --name chall1-web -d -p 9000:5000 hmtictf/chall1-web:latest
```
Make sure the container is running:
```
sudo docker ps
```
---
## Writeups

