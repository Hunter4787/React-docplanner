
import React, { Component } from 'react';
import AOS from 'aos'

class Flags extends Component{
  
        constructor(props) {
            super(props);
            this.state = {  }
        }
        componentDidMount(){
            AOS.init({
                duration : 2000
            })
        }
        render() { 
            const {flg}=this.props
            return (<div className="flags row col-sm-12" >
            {
                flg.map((el, i) =>
                <div data-aos="fade-up-left" className={((i==0)||(i==2))?"vert-align col-lg-6 bg-white flag-styles flag-left text-center":"vert-align col-lg-6 col-sm-12 bg-white flag-right text-center"}>
                <img className="img-fluid" scr={flg[i].src}
                srcset={flg[i].srcset}/>
                <h4 className="text-doc">{flg[i].h4}</h4>
                <p>
                {flg[i].p}
                </p>
                
                </div>)
            }
            </div>  );
        }
    }
    

export default Flags
 
