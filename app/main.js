import React from 'react'
import ReactDOM from 'react-dom'
import {Router,Route,hashHistory,IndexRoute} from 'react-router'
import Home from './components/Home'
import Cover from './components/Cover'
import About from './components/About'
import Works from './components/Works'
import Contact from './components/Contact'

ReactDOM.render(
    (
        <Router history={hashHistory}>
            <Route path="/" component={Home} >
                <IndexRoute component={Cover}/>
                <Route path="/about" component={Cover} />
                <Route path="/works" component={Works} />
                <Route path="/contact" component={Contact} />
            </Route>
        </Router>
    ),
    document.getElementById('app')
);