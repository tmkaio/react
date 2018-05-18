pipeline {
    agent any
    stages {
        stage('build') {
            steps {
                build job: 'JMeter - Freestyle', parameters: [[$class: 'StringParameterValue', name: 'VirtualUsers', value: '100']]
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
