pipeline {
    agent any
    stages {
        stage('build') {
            steps {
                bat 'C:/Users/thomas.kaio/Desktop/apache-jmeter-4.0/apache-jmeter-4.0/bin/jmeter -n -t "C:/Users/thomas.kaio/Desktop/apache-jmeter-4.0/apache-jmeter-4.0/bin/HTTP Request.jmx" -l resulting.jtl'
            }
        }
    }
    post {
        always {
            junit 'results.xml'
        }
    }
}
