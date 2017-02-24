import React,{Component} from 'react'
import {Link} from 'react-router'
import ReactCSSTransitionGroup from 'react-addons-css-transition-group'
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
                <ReactCSSTransitionGroup
                    transitionName="transitionWrapper"
                    component="div"
                    className={style.transitionWrapper}
                    transitionEnterTimeout={500}
                    transitionLeaveTimeout={500}>
                    <div key={this.props.location.pathname}
                        style={{position:"absolute", width: "100%"}}>
                        {
                            this.props.children
                        }
                    </div>
                </ReactCSSTransitionGroup>
            </div>
        )
    }
}

export default Home;