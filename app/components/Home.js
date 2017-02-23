import React,{Component} from 'react'
import {Link} from 'react-router'
import style from '../css/home.css'

class Nav extends Component{
    render(){
        return (
            <nav className={style.nav}>
                <div className={style.logo}><Link to="/">Yiming</Link></div>
                <ul className={style.navRight}>				
                    <li className={style.navItem}><Link to="/about">About</Link></li>
                    <li className={style.navItem}><Link to="/works">Works</Link></li>
                    <li className={style.navItem}><Link to="/contact">Contact</Link></li>
                </ul>
            </nav>
        )
    }
}

class Home extends Component{
    render(){
        return (
            <div className={style.home}>
                <Nav />            
                {this.props.children}
            </div>
        )
    }
}

export default Home;