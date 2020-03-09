import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
//import App from './App';
import * as serviceWorker from './serviceWorker';
import Sidebar from './components/Sidebar'
import BindEvent from './components/BindEvent'

import ShowSelected from './components/ShowSelected'


/**
 * 
 * Now I am just calling the select page from sidebar
 * 
 * Course and clist are legacy, no need to look
 * 
 */

console.log(typeof(cc))
ReactDOM.render(
    <div>
        <Sidebar />, mountNode
        
        
    </div>,document.getElementById('root')
    
)

serviceWorker.unregister();
