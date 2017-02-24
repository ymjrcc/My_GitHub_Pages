import React,{Component} from 'react'
import style from '../css/about.css'

class About extends Component{
    render(){
        return (
            <div className={style.about}>
                <p>我叫何一鸣；</p>
                <p>生于 1992 年 10 月；</p>
                <p>2014 年 7 月毕业于天津大学；</p>
                <p>2015 年 9 月开始从事前端开发；</p>
                <p>爱好：看小说、听港乐、写代码；</p>
                <p>目标：成为一名优秀的前端开发工程师。</p>
                <a className={style.cv} href="https://ymjrcc.github.io/my_cv/build/" target="_blank">在线简历</a>
            </div>
        )
    }
}

export default About;