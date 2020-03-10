import React from 'react';
import ReactDOM from 'react-dom';
import * as serviceWorker from './serviceWorker';
import Sidebar from './components/Sidebar'
import Amplify from 'aws-amplify';
import config from './config';
import './index.css';

Amplify.configure({
    Auth: {
        mandatorySignIn: true,
        region: config.cognito.region,
        userPoolId: config.cognito.USER_POOL_ID,
        identityPoolId: config.cognito.IDENTITY_POOL_ID,
        userPoolWebClientId: config.cognito.APP_CLIENT_ID
    },
    Storage: {
        region: config.s3.REGION,
        bucket: config.s3.BUCKET,
        identityPoolId: config.cognito.IDENTITY_POOL_ID
    },
    API: {
        endpoints: [
            {
                name: "bcadmin",
                endpoint: config.apiGateway.URL,
                region: config.apiGateway.REGION,
            }
        ]
    }
});

console.log(typeof(cc))
ReactDOM.render(
    <div>
        <Sidebar />, mountNode
        
        
    </div>,document.getElementById('root')
    
)

serviceWorker.unregister();
