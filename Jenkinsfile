pipeline {
    agent any
    stages {
        stage('build') {
            steps {
                bat 'node_modules/.bin/cucumber-js'
            }
        }
    }
    post {
        always {
            junit 'res.xml'
        }
    }
}
