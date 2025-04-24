pipeline {
    agent any

    tools {
        nodejs "NodeJS"
    }

    stages {
        stage('Checkout Code') {
            steps {
                git 'https://github.com/sushanthreddy009/Food_Delivery_Application.git'
            }
        }

        stage('Install Backend Dependencies') {
            steps {
                dir('server') {
                    sh 'npm install'
                    // Add: sh 'npm test' if you have backend tests
                }
            }
        }

        stage('Install Frontend Dependencies') {
            steps {
                dir('client') {
                    sh 'npm install'
                    // Add: sh 'npm test' if you have frontend tests
                }
            }
        }
    }
}
