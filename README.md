# Docker_Foundation

Docker is an open-source platform designed to simplify the development, deployment, and management of applications by using containerization. Containers are lightweight, portable, and self-sufficient environments that package an application along with all its dependencies, libraries, and configuration files. This ensures that the application runs consistently across various computing environments, from development to production, regardless of the underlying infrastructure.

# Here’s a breakdown of some key Docker concepts:

 - Containers: Lightweight and isolated environments where applications run, bundling the code, runtime, libraries, and settings. This ensures consistency across environments.
 - Docker Engine: The core component that enables you to run containers. It's a client-server application, where the server (Docker daemon) creates and manages the containers, and the client is the interface you interact with using the Docker CLI.
 - Images: Immutable snapshots of an application’s environment, including the OS, libraries, dependencies, and the application itself. Containers are instances of these images.
 - Dockerfile: A text file with a series of instructions that define how to build a Docker image. It includes steps such as copying code, installing dependencies, and setting environment variables.
 - Docker Hub: A cloud-based registry service where Docker users can store and share container images. You can pull pre-built images or push your own images.

# Docker is widely used for:

 - Microservices: Deploying applications as independent, loosely coupled services.
 - DevOps: Ensuring consistency between development and production environments.
 - CI/CD Pipelines: Automating testing and deployment in a reproducible environment.

# Docker Components
The architecture of Docker is built around a client-server model, and it involves several key components working together to provide a platform for containerization. The primary components are:

1. Docker Client
The Docker client (docker) is the user-facing component that you interact with via the command line or API. When you run Docker commands like docker run, docker build, or docker pull, the client sends these commands to the Docker daemon for execution.
It communicates with the Docker daemon via REST API over UNIX sockets or a network interface.

2. Docker Daemon (dockerd)
The Docker daemon (dockerd) is the engine that does the heavy lifting of building, running, and managing Docker containers. It listens for API requests from the Docker client and performs the requested actions like creating, starting, or stopping containers.
It also handles container orchestration, image management, network communication, and volume management.

3. Docker Images
Images are the read-only blueprints for Docker containers. They contain the application code, runtime environment, dependencies, libraries, configuration files, and other binaries needed to run the application.
Images are built using Dockerfile, which includes instructions to install software, copy files, expose ports, etc.

4. Docker Containers
Containers are instances of Docker images. When you create and run a container, Docker takes an image and adds a writable layer on top, allowing the container to have its own environment.
Containers are isolated environments, sharing the host’s OS kernel, but each container has its own user space, file system, network interfaces, and process namespace.

5. Docker Registries
A registry stores Docker images. Docker Hub is the default public registry, but there are private registries (Docker Trusted Registry or self-hosted options) as well.
The client can pull images from the registry using docker pull and push images to the registry using docker push. This enables sharing images across different environments and machines.

6. Docker Engine
The Docker Engine is the core part of the Docker architecture, which includes the Docker daemon (server) and Docker client. It can run on various platforms and is responsible for managing all Docker components (images, containers, volumes, networks).

7. Storage and Volumes
Docker uses storage drivers to manage the file system layers of containers. Containers have ephemeral storage, but persistent storage can be achieved using volumes.
Volumes allow data to be stored outside the container’s writable layer, ensuring that data is not lost when the container is removed or stopped.

8. Docker Networks
Docker provides networking capabilities to connect containers to each other or to external systems. By default, Docker containers can communicate with each other over a bridge network, and custom networks can be created.
There are several network drivers available, including bridge, overlay, and host, allowing containers to communicate in isolated or shared environments.

9. Docker Compose
Docker Compose is a tool that allows you to define and run multi-container Docker applications. It uses a YAML file to configure the application's services, networks, and volumes.
This is particularly useful in microservices architecture, where different services (databases, frontends, backends) are run in separate containers.

10. Docker Swarm (Optional)
Docker Swarm is Docker’s native clustering and orchestration tool. It enables you to create a group (or "swarm") of Docker hosts, run containers across them, and manage the cluster via the Docker CLI.
It allows you to deploy and scale containerized applications seamlessly across a cluster of machines.


```plaintext
          +------------------------------------------------------+
          |                    Docker Client                     |
          +------------------------+-----------------------------+
                                   |
                                   v
          +------------------------------------------------------+
          |                   Docker REST API                    |
          +------------------------+-----------------------------+
                                   |
                                   v
          +------------------------------------------------------+
          |                    Docker Daemon                     |
          |               (Container Manager)                    |
          +------------------------+-----------------------------+
           |        |            |            |              |
           v        v            v            v              v
   +------------+ +------------+ +-----------+ +------------+ +------------+
   | Containers | | Images     | | Networks  | | Volumes    | | Plugins    |
   +------------+ +------------+ +-----------+ +------------+ +------------+

   +-------------------------------------------------------------+
   |                     Docker Registries (e.g., Docker Hub)     |
   +-------------------------------------------------------------+
```
# Create a react base project with vite

```bash
npm create vite@latest <app_name>
```
# Create Docker file like Dockerfile

```plaintext
# Specify the base image
FROM <base_image>

# Set the working directory
WORKDIR /app

# Copy package manager files (if applicable)
COPY <package_manager_files> ./

# Install dependencies
RUN <install_dependencies_command>

# Copy the rest of the application code
COPY . .

# Expose the application port
EXPOSE <port>

# Command to run the application
CMD ["<command_to_run_application>"]
```


# After creating docker file run

```bash
docker build -t <image_name>:<tag> .
```
# Check docker images
```bash
docker image ls
```

# To run docker image
```bash 
docker run <image_ID>
```
# To see docker status
```bash
docker ps
```
# To stop docker
```bash
docker stop <image_name>
```
# To run the app outside the container
```bash
docker run -p exposed_port:current_port <image_id>
```

# Run a Docker Container from the Image and detached mode:
```bash
docker run -d -p exposed_port:current_port <image_name>:<tag>
```

# To remove after stop container
```bash
docker run -d --rm -p exposed_port:current_port <image_name>:<tag>
```
# To assigne name any time
```bash
docker run -d --rm --name "give_name" -p exposed_port:current_port <image_name>:<tag>
```

# Before remove any container at first stop the container:
```bash
docker ps
docker stop <container_ID_or_name>
docker rm <container_ID_or_name>
```

# To use any pre-define image from docker hub:
```bash
docker pull <image_name>:<tag>
docker image ls
```

# To use intractive mode:
```bash
docker run -it <image_name>:<tag>
```



## push a Docker image to Docker Hub, you'll follow a few steps. Here's a step-by-step guide:

 - Step 1: Create a Docker Hub Account
If you haven't already, create an account on Docker Hub.

 - Step 2: Log in to Docker Hub from the CLI
Log in to your Docker Hub account from the command line:

```bash
docker login
```
You'll be prompted to enter your Docker Hub username and password.

 - Step 3: Tag Your Docker Image
You need to tag the image with your Docker Hub repository name. The format for tagging an image is:

```bash
docker tag <local_image>:<tag> <dockerhub_username>/<repository_name>:<tag>
```
# Example:
If your local image is my-react-app:1.0 and your Docker Hub username is asutoshsidhya, tag the image as follows:

```bash
docker tag my-react-app:1.0 asutoshsidhya/my-react-app:1.0
```
 - Step 4: Push the Docker Image to Docker Hub
Now push the tagged image to your Docker Hub repository:

```bash
docker push <dockerhub_username>/<repository_name>:<tag>
```
