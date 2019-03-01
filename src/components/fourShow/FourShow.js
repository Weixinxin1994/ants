import React, { Component } from 'react';
import './assets/css/fourShow.css';
import fourshow_json from '../../json/fourShow';
import $ from 'jquery'
class FourShow extends Component {
    constructor(props) {
        super(props);
        this.state = {
            display:'none',
            hsdisplay:'block',
            json:fourshow_json
        };
    }
    onMouseOver=(key)=>{
        this.setState({
            display:'block',
            hsdisplay:'none',
            key:key
        })
        console.log(key)
       

        // event.target.display='block'
    }
    onMouseLeave=()=>{
        this.setState({
            display:'none',
            hsdisplay:'block'
        })
    }
    
    render() {
        return (
            <section className="container">
            <div className="row">
            <h1 className="s-case">{this.state.json.title}</h1>
            <p className="s-info">{this.state.json.content}</p>
                
                    <a href="/ants/o2o.html"></a>
   {
       this.state.json.item.map((item,key)=>{
       return(
        <div key={key} className={`img_url img${item.image}`} onMouseOver={this.onMouseOver.bind(this,key)} onMouseLeave={this.onMouseLeave}>
        <div className="info" >
        <h1 style={{display:`${this.state.hsdisplay}`}}>{item.h2}</h1>
        <div className="detail"  style={{display:`${this.state.display}`}}>
            <h1 >{item.h2}</h1>
            <p>线上线下优势互补<br/>全类型客户360°辐射<br/>实现无与伦比的购物体验</p>
        </div>
        </div>
        </div>
       )

       })
   }
                    
              

            </div>
            </section>

        );

    }
}
 $('.img_url').hover(function() {
     
        $(this).find('.info h1').eq(0).fadeOut('fast');
        $(this).find('.detail').fadeIn('fast');
    }, function() {
        $(this).find('.info h1').eq(0).fadeIn('fast');
        $(this).find('.detail').fadeOut('fast');
    });
export default FourShow;