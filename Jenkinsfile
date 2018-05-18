node {
   stage 'Build Application'
   // do what you need to do to build your application
   echo 'Compilation is done'
   stage 'Deploy Application'
   // do what you need to do to deploy your application
   echo 'Deploy is done'
   stage 'Execute JMeter Performance Tests'
   build job: 'JMeter - Freestyle'
}
