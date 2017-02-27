import React,{Component} from 'react'
import style from '../css/contact.css'

class Contact extends Component{
    render(){
        return (
            <div className={style.contact}>
                <h2 className={style.title}>联系我</h2>
                <div className={style.hr}></div>
                <div className={style.info}>
                    <p>手机：15271831026</p>						
                    <p>邮箱：hym826@126.com</p>
                    <p>QQ/微信：420491300</p>
                </div>
            </div>
        )
    }
}

export default Contact;