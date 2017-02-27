import React,{Component} from 'react'
import style from '../css/works.css'

class Works extends Component{
    render(){
        return (
            <div className={style.works}>
                <h2 className={style.title}>Works List</h2>
                <ul className={style.list}>
                    <li className={style.item}>
                        <a href="https://github.com/ymjrcc/Fireball_by_React" target="_blank">Fireball Demo</a>
                    </li>
                    <li className={style.item}>
                        <a href="https://github.com/ymjrcc/My_GitHub_Pages" target="_blank">My GitHub Pages</a>
                    </li>
                    <li className={style.item}>
                        <a href="https://github.com/ymjrcc/Gallery_by_React" target="_blank">Gallery</a>
                    </li>
                    <li className={style.item}>
                        <a href="https://github.com/ymjrcc/carousel" target="_blank">Carousel</a>
                    </li>
                    <li>……</li>
                </ul>
                <div className={style.fireball}>
                    <img src={require('../images/FireballQrcode.png')}/>
                    <div className={style.fireballTitle}>Fireball Demo</div>
                </div>
            </div>
        )
    }
}

export default Works;