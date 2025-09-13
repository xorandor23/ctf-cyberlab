# You-wouldn-t-get-this-from-any-other-guy!
This is a challenge for Web Exploitation category, to modify the Referer parameter based on Request Headers.

## Requirements
512 MB of RAM and storage around 70-200MB.

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
besok
