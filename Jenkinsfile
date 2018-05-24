pipeline {
    agent any
    stages {
        stage('build') {
            steps {
                bat 'cd C:/Users/thomas.kaio/Desktop/Automated_tests/hellocucumber'
                bat 'node_modules/.bin/cucumber-js --format=json'
            }
        }
    }
    post {
        always {
            junit 'res.xml'
        }
    }
}
