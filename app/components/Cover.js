import React,{Component} from 'react'
import style from '../css/home.css'

class Cover extends Component{
    render(){
        return (
            <div className={style.cover}>
				<h1 className={style.title}>Yiming</h1>
				<p className={style.subTitle}>Life is not easy,</p>
                <p className={style.subTitle}>but I have a rock heart!</p>
			</div>
        )
    }
}

export default Cover;