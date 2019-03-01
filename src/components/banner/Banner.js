import { Divider } from "antd";
import React, { PureComponent } from 'react';
import {Carousel, Input, Tabs, Icon} from 'antd';
import './assets/css/banner.css';
import  banner_json from'../../json/banner';

class Banner extends PureComponent {
    constructor(props) {
        super(props);
        this.next = this.next.bind(this);
        this.prev = this.prev.bind(this);
        this.state = {
         ban:banner_json
        }
    }
    next() {
        this.slider.slick.slickNext();
    }
    prev() {
        this.slider.slick.slickPrev();
    }
    render() {
        const lunboSetting = {
            dots: true,
            lazyLoad: true,
            autoplay:true,
        };
        return (
            <div className="home-lunbo">
                <Carousel {...lunboSetting} ref={el => (this.slider = el)}>
{
    this.state.ban.map((val,key)=>{
        return  <div key={key}> <a href="/ants"><img className='ba_img' src={require(`./assets/image/${val.url}`)} alt="" /></a></div>
    })
}
                    <div key={1}><img className='ba_img' src={require('./assets/image/041522424182.jpg')} alt="" /></div>
                </Carousel>
                {/* <Icon type="left-circle"onClick={this.prev}/>
                <Icon type="right-circle" onClick={this.next}/> */}
            </div>
        )
    }
}

export default Banner;