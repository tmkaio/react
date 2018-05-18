node {
   stage 'Execute JMeter Performance Tests'
   build job: 'JMeter - Freestyle', parameters: [[$class: 'StringParameterValue', name: 'VirtualUsers', value: '100']]
   stage 'Run JMeter Test'
   bat 'C:/Users/thomas.kaio/Desktop/apache-jmeter-4.0/apache-jmeter-4.0/bin/jmeter.bat -n -t "HTTP Request.jmx" -l test.jtl'
   step([$class: 'ArtifactArchiver', artifacts: 'test.jtl'])
}
