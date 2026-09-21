# TeamHub – Employee Management System

A 3-tier Employee Management System built to demonstrate **React, Node.js, MongoDB, Docker, Kubernetes, AWS EC2, and Jenkins CI/CD**.

---

## 🚀 Tech Stack

### Frontend

* React
* TypeScript
* Tailwind CSS
* Axios
* Nginx

### Backend

* Node.js
* Express.js
* Mongoose
* MongoDB

### DevOps & Infrastructure

* Docker
* Docker Compose
* Kubernetes
* Minikube
* AWS EC2
* Jenkins
* GitHub

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
```

---

## 🏗️ Application Architecture

TeamHub follows a **3-tier architecture**:

```text
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
                 │ Stateful Storage  │
                 └──────────────────┘
```

### Application Flow

1. Users interact with the React frontend.
2. Nginx serves the frontend application.
3. Frontend communicates with the Node.js backend through REST APIs.
4. Express handles API requests and business logic.
5. Mongoose communicates with MongoDB.
6. MongoDB stores employee data.

---

## ☸️ Kubernetes Architecture

The application can be deployed locally using **Minikube** and Kubernetes.

```text
                         Browser
                            │
                            ▼
                     NGINX Ingress
                            │
                            ▼
                  frontend-service:80
                            │
                   ┌────────┴────────┐
                   ▼                 ▼
              Frontend Pod      Frontend Pod
                   │                 │
                   └────────┬────────┘
                            │
                           /api/*
                            │
                            ▼
                  backend-service:5000
                            │
                   ┌────────┴────────┐
                   ▼                 ▼
              Backend Pod       Backend Pod
                   │                 │
                   └────────┬────────┘
                            │
                            ▼
                  mongodb-service:27017
                            │
                            ▼
                       MongoDB Pod
                            │
                            ▼
                           PVC
```

### Kubernetes Components

* **Namespace** – Isolates TeamHub resources.
* **Deployments** – Manage frontend and backend replicas.
* **Service** – Provides internal communication between components.
* **StatefulSet** – Manages the MongoDB workload.
* **PersistentVolumeClaim (PVC)** – Provides persistent MongoDB storage.
* **ConfigMap** – Stores non-sensitive configuration.
* **Secret** – Stores sensitive configuration.
* **Ingress** – Routes external HTTP traffic to the frontend.

---

## 🐳 Docker Compose Architecture

For AWS EC2 deployment, the application can run using Docker Compose.

```text
                         INTERNET
                            │
                            ▼
                    AWS EC2 Instance
                            │
                            ▼
                     Docker Compose
                            │
              ┌─────────────┼─────────────┐
              ▼             ▼             ▼
        ┌──────────┐  ┌──────────┐  ┌──────────┐
        │ Frontend │  │ Backend  │  │ MongoDB  │
        │  React   │  │ Node.js  │  │          │
        │  Nginx   │  │ Express  │  │ MongoDB  │
        │   :80    │  │  :5000   │  │  :27017  │
        └────┬─────┘  └────┬─────┘  └────┬─────┘
             │              │             │
             └──────────────┴─────────────┘
                            │
                    Docker Network
```

---

## ⚙️ Local Setup

### 1. Clone the Repository

```bash
git clone https://github.com/YOUR_USERNAME/YOUR_REPOSITORY.git
cd Employee_Management_System
```

### 2. Install Frontend Dependencies

```bash
cd frontend
npm install
```

### 3. Install Backend Dependencies

```bash
cd ../backend
npm install
```

### 4. Configure Environment Variables

Create the required `.env` file inside the backend directory.

Example:

```env
PORT=5000
MONGO_URI=your_mongodb_connection_string
```

Do not commit `.env` files to GitHub.

### 5. Run the Backend

```bash
cd backend
npm run dev
```

### 6. Run the Frontend

```bash
cd frontend
npm run dev
```

---

## 🐳 Running with Docker Compose

Build and start all services:

```bash
docker compose up --build
```

Run in detached mode:

```bash
docker compose up --build -d
```

Check running containers:

```bash
docker ps
```

Stop the application:

```bash
docker compose down
```

---

## ☸️ Running with Kubernetes

Make sure Minikube is running:

```bash
minikube start
```

Apply the namespace:

```bash
kubectl apply -f k8s/namespace.yaml
```

Apply the Kubernetes resources:

```bash
kubectl apply -f k8s/
```

Check pods:

```bash
kubectl get pods -n teamhub
```

Check services:

```bash
kubectl get svc -n teamhub
```

Check deployments:

```bash
kubectl get deployments -n teamhub
```

Check ingress:

```bash
kubectl get ingress -n teamhub
```

---

## 🔄 CI/CD Pipeline

Jenkins is used to automate the application deployment workflow.

```text
                    GitHub
                       │
                       ▼
                    Jenkins
                       │
                       ▼
                 Checkout Code
                       │
                       ▼
                 Build Docker Images
                       │
                       ▼
              Deploy with Docker Compose
                       │
                       ▼
                  AWS EC2
                       │
              ┌────────┼────────┐
              ▼        ▼        ▼
          Frontend  Backend  MongoDB
```

### Pipeline Flow

1. Developer pushes code to GitHub.
2. Jenkins detects the changes.
3. Jenkins checks out the latest code.
4. Docker images are built.
5. Existing containers are stopped.
6. Updated containers are started using Docker Compose.
7. Application becomes available on the EC2 instance.

---

## ☁️ AWS EC2 Deployment

The application can be deployed on an **AWS EC2 instance** using Docker Compose.

### Deployment Steps

1. Launch an EC2 instance.
2. Configure the required security group ports.
3. Install Docker and Docker Compose.
4. Install and configure Jenkins.
5. Clone the GitHub repository.
6. Configure the Jenkins pipeline.
7. Build the Docker images.
8. Start the application using Docker Compose.

Example:

```bash
docker compose up --build -d
```

Check running services:

```bash
docker ps
```

---

## 🔌 API Endpoints

### Employee APIs

| Method | Endpoint             | Description        |
| ------ | -------------------- | ------------------ |
| GET    | `/api/employees`     | Get all employees  |
| GET    | `/api/employees/:id` | Get employee by ID |
| POST   | `/api/employees`     | Create employee    |
| PUT    | `/api/employees/:id` | Update employee    |
| DELETE | `/api/employees/:id` | Delete employee    |

---

## 🔐 Environment Variables

The application uses environment variables for configuration.

Example:

```env
PORT=5000
MONGO_URI=your_mongodb_connection_string
```

Sensitive credentials should **never be committed to GitHub**.

For Kubernetes deployments, sensitive values are managed using Kubernetes Secrets.

---

## 📌 Key DevOps Concepts Demonstrated

* Containerization with Docker
* Multi-container application using Docker Compose
* Kubernetes Deployments
* Kubernetes Services
* StatefulSets
* Persistent Volumes
* ConfigMaps
* Secrets
* Kubernetes Ingress
* Local Kubernetes deployment with Minikube
* Jenkins CI/CD
* GitHub integration
* AWS EC2 deployment
* Container networking
* Application scaling using Kubernetes replicas

---

## 🚀 Future Improvements

* Implement authentication and authorization
* Add automated testing
* Add Docker image registry such as Docker Hub
* Implement Kubernetes Horizontal Pod Autoscaling
* Add monitoring and logging
* Add HTTPS using a reverse proxy and SSL certificates
* Improve Jenkins pipeline with automated testing and rollback

---

## 👨‍💻 Author

**Soumojit Gon**

B.Tech – Computer Science and Engineering

````

**One important thing:** I intentionally used wording like **“can be deployed”** for Kubernetes/EC2 rather than claiming everything is currently production-deployed. That keeps the README accurate if you're still demonstrating the project locally/through Minikube and deploying via EC2.

Also, before you push this, **replace**:

```text
https://github.com/YOUR_USERNAME/YOUR_REPOSITORY.git
````

with your actual GitHub repository URL.

Then:

```bash
git add README.md
git commit -m "Update project README"
git push origin main
```
