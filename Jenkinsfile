pipeline {
    environment {
        deploymentFilePath = "${deploymentFilePath}"
        dockerImage = '';
    }
    agent any
    stages {
        stage('Compile & UT') {
            steps {
                echo 'Installing latst Node JS Package Manager'
                echo 'Cleaning up app project directory...'
                sh 'rm -rf ./node_modules'
                sh 'npm install'
                echo 'Compiling app and running UTs...'
                sh 'npm run test'
                sh 'ng build --prod'
            }
        }
        stage('Build Docker Image') {
            steps {
                echo 'Building Docker image...'
                script {
                   sh 'docker login'
                   sh 'docker build -t ky-protofolio .'
                }
              }
        }
    }
}
