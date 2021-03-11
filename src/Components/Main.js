import React from 'react'
import Navbar from './NavBar'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Home from './Pages/Home'
import Services from './Pages/Services'
import Products from './Pages/Products'
import SignUp from './Pages/SignUp'

function Main() {
    return (
        <div>
            <Switch>
                <Route  path='/' exact component={Home}/>
                <Route path='/services' component={Services}/>
                <Route path='/sign-up' component={SignUp}/>
                <Route path='/products' component={Products}/>
                <Route path='/home' component={Home}/>
                
            </Switch>
        </div>
    )
}

export default Main
