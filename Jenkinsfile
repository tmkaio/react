pipeline {
    agent any
    stages {
        stage('build') {
            steps {
                bat 'node_modules/.bin/cucumber-js --format=json | node_modules/.bin/cucumber-junit'
            }
        }
    }
    post {
        always {
            junit 'res.xml'
        }
    }
}
