import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
//import App from './App';
import * as serviceWorker from './serviceWorker';
import Sidebar from './components/Sidebar'
import BindEvent from './components/BindEvent'

import ShowSelected from './components/ShowSelected'




console.log(typeof(cc))
ReactDOM.render(
    <div>
        <Sidebar />, mountNode
        
    </div>,document.getElementById('root')
    
)

serviceWorker.unregister();
