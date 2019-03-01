import React, { Component } from 'react'
import PropTypes from 'prop-types'
import './assets/productDisplay.css'
import json from '../../json/productDisplay'

export default class ProductDisplay extends Component {
    constructor(props) {
        super(props);
        this.state = {
            titel:json.title,
            content:json.content,
            item:json.item
        };
    }
    render() {
        return (
            <section className="container">
                <div className="row k k_service">
                    <h1>{this.state.titel}</h1>
                    <p className="s-info">{this.state.content}</p>
                    <ul>
                        {
                            this.state.item.map((val,key)=>{
                                return(
                                    <li key={key}>
                                    <a href="http://www.ants-city.com/ants/b2c.html">
                                        <img src={require(`./assets/images/${val.image}`)}/>
                                            <div className="mask">
                                                <span>
                                                    <em></em>
                                                </span>
                                                <h3>{val.name}</h3>
                                            </div>
                                            <dl>
                                                <dd>{val.name}</dd>
                                            </dl>
                                     </a>
                                 </li>
                                )
                            })
                        }
                         </ul>
    </div>
  </section>
                        )
                      }
                    }
                    
                    
