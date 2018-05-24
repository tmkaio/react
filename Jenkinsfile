pipeline {
    agent any
    stages {
        stage('build') {
            steps {
                bat 'C:/Users/thomas.kaio/Desktop/Automated_tests/hellocucumber/node_modules/.bin/cucumber-js'
            }
        }
    }
    post {
        always {
            junit 'res.xml'
        }
    }
}
