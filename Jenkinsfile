pipeline {
    agent any
    stages {
        stage('build') {
            steps {
                bat 'newman run C:/Users/thomas.kaio/Desktop/Automated_tests/pst.json -r junit --reporter-junit-export C:/Users/thomas.kaio/Desktop/Automated_tests/result.xml'
            }
        }
    }
    post {
        always {
            junit 'C:/Users/thomas.kaio/Desktop/Automated_tests/result.xml'
        }
    }
}
