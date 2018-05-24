pipeline {
    agent any
        stages {
         stage('build') {
             steps {
                bat 'C:/Users/thomas.kaio/Desktop/Automated_tests/hellocucumber/node_modules/.bin/cucumber-js --format=json | C:/Users/thomas.kaio/Desktop/Automated_tests/hellocucumber/node_modules\.bin\cucumber-junit > res.xml'
             }
         }
     }
     post {
         always {
            junit 'res.xml'
         }
     }
}
