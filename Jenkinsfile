node {
   stage 'Run JMeter Test'
   bat 'C:/Users/thomas.kaio/Desktop/apache-jmeter-4.0/apache-jmeter-4.0/bin/jmeter.bat -n -t "HTTP Request.jmx" -l test.jtl'
   step([$class: 'ArtifactArchiver', artifacts: 'test.jtl'])
}
