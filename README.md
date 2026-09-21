# TeamHub – Employee Management System

A 3-tier Employee Management System built to demonstrate **React, Node.js, MongoDB, Docker, Kubernetes, AWS EC2, and Jenkins CI/CD**.

---

## 🚀 Tech Stack

### Frontend
- React
- TypeScript
- Tailwind CSS
- Axios
- Nginx

### Backend
- Node.js
- Express.js
- Mongoose
- MongoDB

### DevOps & Infrastructure
- Docker
- Docker Compose
- Kubernetes
- Minikube
- AWS EC2
- Jenkins
- GitHub

---

## 📁 Project Structure

```text
Employee_Management_System/
│
├── frontend/
│   ├── src/
│   ├── public/
│   ├── package.json
│   ├── package-lock.json
│   ├── vite.config.js
│   ├── Dockerfile
│   └── .dockerignore
│
├── backend/
│   ├── src/
│   │   ├── config/
│   │   │   └── db.js
│   │   ├── models/
│   │   │   └── Employee.js
│   │   ├── controllers/
│   │   │   └── employeeController.js
│   │   ├── routes/
│   │   │   └── employeeRoutes.js
│   │   └── server.js
│   │
│   ├── package.json
│   ├── package-lock.json
│   ├── Dockerfile
│   └── .dockerignore
│
├── database/
│   └── init/
│       └── README.md
│
├── k8s/
│   ├── namespace.yaml
│   │
│   ├── frontend/
│   │   ├── deployment.yaml
│   │   └── service.yaml
│   │
│   ├── backend/
│   │   ├── deployment.yaml
│   │   └── service.yaml
│   │
│   ├── database/
│   │   ├── statefulset.yaml
│   │   ├── service.yaml
│   │   └── pvc.yaml
│   │
│   ├── config/
│   │   └── configmap.yaml
│   │
│   ├── secrets/
│   │   └── secret.yaml
│   │
│   └── ingress.yaml
│
├── docker-compose.yml
├── .gitignore
└── README.md

# Architecture

## TeamHub follows a 3-tier architecture:
                         USER
                           │
                           ▼
                    ┌─────────────┐
                    │   Ingress   │
                    └──────┬──────┘
                           │
                           ▼
                 ┌──────────────────┐
                 │ React Frontend   │
                 │     Tier 1       │
                 │   React + Nginx  │
                 └────────┬─────────┘
                          │
                       REST API
                          │
                          ▼
                 ┌──────────────────┐
                 │ Node.js Backend  │
                 │     Tier 2       │
                 │ Express + Mongoose│
                 └────────┬─────────┘
                          │
                          ▼
                 ┌──────────────────┐
                 │     MongoDB      │
                 │     Tier 3       │
                 │  Stateful Storage│
                 └──────────────────┘

# Kubernetes Architecture
### The application can be deployed using Minikube

                         Browser
                            │
                            ▼
                    NGINX Ingress
                            │
                            ▼
                 frontend-service:80
                            │
                    ┌───────┴───────┐
                    ▼               ▼
              Frontend Pod     Frontend Pod
                    │               │
                    └───────┬───────┘
                            │
                          /api/*
                            │
                            ▼
                 backend-service:5000
                            │
                    ┌───────┴───────┐
                    ▼               ▼
               Backend Pod     Backend Pod
                    │               │
                    └───────┬───────┘
                            │
                            ▼
                 mongodb-service:27017
                            │
                            ▼
                       MongoDB Pod
                            │
                            ▼
                           PVC

# Docker Compose Architecture
## For AWS EC2 deployment, the application runs using Docker Compose
                         INTERNET
                            │
                            ▼
                     AWS EC2 Instance
                            │
                            ▼
                     Docker Compose
                            │
             ┌──────────────┼──────────────┐
             ▼              ▼              ▼
        ┌──────────┐   ┌──────────┐   ┌──────────┐
        │ Frontend │   │ Backend  │   │ MongoDB  │
        │ React    │   │ Node.js  │   │          │
        │ Nginx    │   │ Express  │   │ MongoDB  │
        │ :80      │   │ :5000    │   │ :27017   │
        └────┬─────┘   └────┬─────┘   └──────────┘
             │              │              ▲
             │              └──────────────┘
             │
             └──────── Docker Network ────────


# AWS Deployment
                         GitHub
                            │
                            ▼
                         Jenkins
                            │
                       Docker Build
                            │
                            ▼
                     AWS EC2 Instance
                            │
                     Docker Compose
                            │
             ┌──────────────┼──────────────┐
             ▼              ▼              ▼
         Frontend        Backend        MongoDB
         Container       Container      Container
             │              │              │
             └──────────────┴──────────────┘
                            │
                       Docker Network
                            │
                            ▼
                         Internet