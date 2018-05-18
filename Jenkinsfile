pipeline {
    agent any
    environment {
        JMETER_HOME="C:/Users/thomas.kaio/Desktop/apache-jmeter-4.0/apache-jmeter-4.0"
    }
    stages {
        stage('build') {
            steps {
                echo "$JMETER_HOME"
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
