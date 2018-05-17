pipeline {
    agent any
    stages {
        stage('build') {
            steps {
                bat 'newman run C:/Users/thomas.kaio/Desktop/Automated_tests/pst.json -r junit --reporter-junit-export results.xml'
            }
        }
    }
    post {
        always {
            junit 'results.xml'
        }
    }
}
