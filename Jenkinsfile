node{
    
    echo 'Demo CICD'
    
    stage('Clone code') {
        echo 'Step 1: Clone code'
        try{
            checkout([$class: 'GitSCM', branches: [[name: '*/master']], doGenerateSubmoduleConfigurations: false, extensions: [], submoduleCfg: [], userRemoteConfigs: [[url: 'https://github.com/trinhnguyenvnm/Dashboard2.git']]])
            currentBuild.result = 'SUCCESS'
        }catch(any){
		    currentBuild.result = 'FAILURE'
		    throw any
        }
    }

    stage('install npm') {
        echo 'Step 2: Install npm'
        try{
            nodejs(configId: 'trinh-npm-config-id', nodeJSInstallationName: 'NodeJS v9-latest') {
                sh 'npm install'
                currentBuild.result = 'SUCCESS'
            }

        }catch(any){
            currentBuild.result = 'FAILURE'
        }
    }

    stage('Unit Test') {
        echo 'Step 3: Run UT'

        try{
            nodejs(configId: 'trinh-npm-config-id', nodeJSInstallationName: 'NodeJS v9-latest') {
                sh 'npm test'
                currentBuild.result = 'SUCCESS'
            }

        }catch(any){
            currentBuild.result = 'FAILURE'
        }
    }

    stage('Deploy') {
        echo 'Step 4: Build product'

        try{
            nodejs(configId: 'trinh-npm-config-id', nodeJSInstallationName: 'NodeJS v9-latest') {
                sh 'npm run-script build'
                // TODO: deploy to server
                currentBuild.result = 'SUCCESS'
            }
        } catch(any) {
            currentBuild.result = 'FAILURE'
        }
    }
}


