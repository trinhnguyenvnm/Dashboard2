node{
    
    echo 'Demo CICD'
    
    stage('Clone code') {
        echo '==========Step 1: Clone code=========='
        try{
            checkout([$class: 'GitSCM', branches: [[name: '*/master']], doGenerateSubmoduleConfigurations: false, extensions: [], submoduleCfg: [], userRemoteConfigs: [[credentialsId: '833ea7c2402173b6671b26a89a04eb54c6d7f841', url: 'https://github.com/trinhnguyenvnm/Dashboard2.git']]])
            currentBuild.result = 'SUCCESS'
        }catch(any){
		    currentBuild.result = 'FAILURE'
		    throw any
        }
    }

    stage('Install npm') {
        echo '==========Step 2: Install npm=========='
        try{
            nodejs(configId: 'trinh-npm-config-id', nodeJSInstallationName: 'NodeJS v9-latest') {
                sh 'npm install phantomjs-prebuilt'
                sh 'npm install'
                currentBuild.result = 'SUCCESS'
            }

        }catch(any){
            currentBuild.result = 'FAILURE'
        }
    }

    stage('Unit Test') {
        echo '==========Step 3: Run UT=========='

        try{
            nodejs(configId: 'trinh-npm-config-id', nodeJSInstallationName: 'NodeJS v9-latest') {
                sh 'npm test'
                currentBuild.result = 'SUCCESS'
            }

        }catch(any){
            currentBuild.result = 'FAILURE'
        }
    }

    stage('Build product') {
        echo '==========Step 4: Build product=========='

        try{
            nodejs(configId: 'trinh-npm-config-id', nodeJSInstallationName: 'NodeJS v9-latest') {
                sh 'npm run-script build'
                currentBuild.result = 'SUCCESS'
            }
        } catch(any) {
            currentBuild.result = 'FAILURE'
        }
    }
    stage('Deploy') {
        echo '==========Step 5: Deploy=========='

        try{
            nodejs(configId: 'trinh-npm-config-id', nodeJSInstallationName: 'NodeJS v9-latest') {                
                sh 'tar -czvf dist.tar.gz dist'
                sh 'cp dist.tar.gz /opt/tomcat/webapps/'

                sh 'rm -rf /opt/tomcat/webapps/dist'
                sh 'tar -xzvf /opt/tomcat/webapps/dist.tar.gz -C /opt/tomcat/webapps/'
                sh 'rm -rf /opt/tomcat/webapps/dist.tar.gz'
                currentBuild.result = 'SUCCESS'
            }
        } catch(any) {
            currentBuild.result = 'FAILURE'
        }
    }
}
