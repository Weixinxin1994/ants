import React, { Component } from 'react'
import './assets/footer.css'
class FooterBar extends Component {
    constructor(props) {
        super(props);
        this.state = {  };
    }
    render() {
        return (
            <footer className="clear">
            <div className="container">
              <div className="row">
                <div className="do_well">
                  <div className="p1">
                    <span>CROSS-BORDER DIRECTLY&nbsp;</span>
                    <br/> 因为专业&nbsp;&nbsp;&nbsp;所以信赖&nbsp;
                    <i></i>
                  </div>
                </div>
                <div className="code_img">
                  <img src={require('./assets/images/two_code.png')}width="120" alt=""/> 官方微信二维码 </div>
              </div>
            </div>
            <div className="footer_b">
              <div className="container">
                <div className="footer_l">
                  <p>咨询热线：18621141992</p>
                  <p>公司邮箱：
                    <a href="mailto:sales@ants-city.com">sales@ants-city.com</a>
                  </p>
                  <p>上海蚁城网络科技有限公司 版权所有| Copyright © 2011-2012 ants-city.com |
                    <a href="http://www.miitbeian.gov.cn/publish/query/indexFirst.action"
                      type="url">沪ICP备14026785号</a>
                 <script type="text/javascript">
					/*var _bdhmProtocol = (("https:" == document.location.protocol) ? " https://" : " http://");
					document.write(unescape("%3Cscript src='" + _bdhmProtocol + "hm.baidu.com/h.js%3Fe7c978547f8551b49d79d5dfd781d877' type='text/javascript'%3E%3C/script%3E"));
					var cnzz_protocol = (("https:" == document.location.protocol) ? " https://" : " http://");document.write(unescape("%3Cspan id='cnzz_stat_icon_1000534629'%3E%3C/span%3E%3Cscript src='" + cnzz_protocol + "s11.cnzz.com/z_stat.php%3Fid%3D1000534629%26show%3Dpic' type='text/javascript'%3E%3C/script%3E"));*/
              </script>
                  </p>
                </div>
                <div className="footer_r">
                  <a href="/">官方首页</a>
                  <a href="http://www.ants-city.com/ants/fenxiao.html">产品中心</a>
                  <a href="http://www.ants-city.com/ants/direct.html">解决方案</a>
                  <a href="http://www.ants-city.com/ants/service.html">跨境专题</a>
                  <a href="http://www.ants-city.com/ants/customercase.html">客户案例</a>
                  <a href="/ants/channel.html">渠道合作</a>
                  <a href="http://www.ants-city.com/ants/companynew.html">最新动态</a>
                  <a href="/ants/about-us.html">关于我们</a>
                  <p>Ants city network technology co., LTD</p>
                </div>
              </div>
            </div>
            <a key="0" logo_size="124x47" logo_type="business" href="http://www.anquan.org">
              <script src="http://static.anquan.org/static/outer/js/aq_auth.js"></script>
            </a>
          </footer>
        );
    }
}

export default FooterBar;