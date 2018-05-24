pipeline {
    agent any
    stages {
        stage('build') {
            steps {
                bat 'node_modules/.bin/cucumber-js --format=json > res.json'
            }
        }
    }
    post {
        always {
            cucumber 'res.json'
        }
    }
}
