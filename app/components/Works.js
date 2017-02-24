import React,{Component} from 'react'
import style from '../css/works.css'

class Works extends Component{
    render(){
        return (
            <div className={style.works}>
                <h2 className={style.title}>Works List</h2>
                <ul className={style.list}>
                    <li className={style.item}>
                        <a href="https://github.com/ymjrcc/FireBall_by_React" target="_blank">Fireball Demo</a>
                    </li>
                    <li className={style.item}>
                        <a href="https://github.com/ymjrcc/My_Github_Pages" target="_blank">My GitHub Pages</a>
                    </li>
                    <li className={style.item}>
                        <a href="https://github.com/ymjrcc/ymjrcc.github.io/tree/master/mypractice/galleryByReact" target="_blank">Gallery</a>
                    </li>
                    <li className={style.item}>
                        <a href="https://github.com/ymjrcc/carousel" target="_blank">Carousel</a>
                    </li>
                    <li>……</li>
                </ul>
            </div>
        )
    }
}

export default Works;