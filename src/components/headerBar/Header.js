import React, { PureComponent } from 'react';
import { Menu, Icon,Affix } from 'antd';
import header_json from '../../json/header';
import { Row, Col } from 'antd';
import './assets/css/header.css';
const SubMenu = Menu.SubMenu;
const MenuItemGroup = Menu.ItemGroup;



class Header extends PureComponent {
    constructor(props) {
        super(props);
        this.state = {
           json:header_json,
           current:'0',
           top: 0,
    bottom: 0,
        }
        console.log(this.setState);
    };
    handleClick = (e) => {
        console.log('click ', e);
        this.setState({
          current: e.key,
        });
      }

    render() {
        return (
      
        <Affix offsetTop={this.state.top}>
        <Menu onClick={this.handleClick} selectedKeys={[this.state.current]} mode="horizontal" >
        <Menu.Item ><img className='logo' src={require('./assets/logo.png')} alt="" /></Menu.Item>
                {
                    this.state.json.map((value,key)=>{
                        if(value.child){
                            return (
                            <SubMenu  key={key} title={<span className=""> {value.name}</span>}>
                                {value.child.map(function(cval,ckey){
                                  return <Menu.Item key={cval.name} to='/news'><a href={cval.url}>{cval.name}</a></Menu.Item>
                                })}
                          </SubMenu>
                          )
                        }
                        else{
                            return   <Menu.Item key={key}><a href={value.url}>{value.name}</a></Menu.Item>
                        }
                       
                    })
                }    
         </Menu> 
        </Affix>
    
        )
    }
}
export default Header;