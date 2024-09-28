pipeline {
  agent any

  tools {
    nodejs "NodeJS"
  }

  environment {
    APP_NAME = 'frontend'
    IMAGE_NAME = 'frontend-image' // Replace with your Docker Hub username or appropriate image name
    GITHUB_REPO='https://github.com/zsAdiba/frontend'
  }

  stages {

    stage('Clone Repository') {
      steps {
        // Clone the Git repository from the remote URL
        git branch: 'main', url: "${GITHUB_REPO}"
      }
    }


    stage('Install Packages') {
      steps {
        // Install the dependencies
        echo "installing dependencies..."
        sh "npm install"
        sh "npm i -g @angular/cli"
      }
    }
    stage('Performing test') {
      steps {
        echo "running test..."
        sh 'ng test --watch=false --browsers=ChromeHeadless'  //failed at headless chrome
      }
    }
    stage('Build app') {
      steps {
        echo "building app..."
        sh 'ng build --configuration production'
      }
    }
    stage("Build Docker") {
      steps {
        script {
          sh 'docker build -t ${IMAGE_NAME} .'
        }
      }
    }
    stage("Deploy & Activate") {
      steps {
        echo 'Starting deployment and activation...'

        script {
          // Check if the container is created
          def containerId = sh(script: "docker ps -a -q -f name=${APP_NAME}", returnStdout: true).trim()

          if (containerId) {
            echo "Stopping existing container ${APP_NAME}..."
            sh "docker stop ${APP_NAME}"
        
            echo "Removing existing container ${APP_NAME}..."
            sh "docker rm ${APP_NAME}"
          } else {
            echo "No existing container named ${APP_NAME} found."
          }
        }

        // Run the new container
        echo "Deploying a new container ${APP_NAME}..."
        sh 'docker run --restart always -d --name ${APP_NAME} -p 3004:4200 ${IMAGE_NAME}'
      }
    }
  }

  post {
        always {
            // Clean up workspace after build
            cleanWs()
        }
        success {
            echo 'Build, Test, and Deployment completed successfully.'
        }
        failure {
            echo 'Build or Deployment failed.'
        }
    }
}
