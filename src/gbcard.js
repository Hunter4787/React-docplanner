
import React, { Component } from 'react';
import AOS from 'aos'
class GbCard extends Component {
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
        const {crd}=this.props
        return (<div className="d-flex flex-direction-row" data-aos="fade-up-left">
          {crd.map((card, i) => <div className={(i==1)?"col-lg-5 col-md-12 rounded text-white card2-bg":"col-lg-5 col-md-12 rounded text-white card1-bg "}>
               <h5 data-aos="fade-up-left" className="card-color">{card.title}</h5>
               <h1 data-aos="fade-up-left">{card.parag}</h1>
          
               <div className="container-fluid ">
                   <div className=" hide-img row">
                          
                       <select data-aos="fade-up" className={(i==1)?"col-5 dltslct":"style-select col-5"} data-id="domain-switcher">
                           <option>{card.slct}</option>
                           <option value="http://www.doctoraliar.com">{card.opt.opt0}</option>
                           <option value="http://www.doctoralia.com.au">{card.opt.opt1}</option>
                           <option value="http://www.doctoralia.com.br">{card.opt.opt2}</option>
                           <option value="http://www.doctoralia.cl">{card.opt.opt3}</option>
                           <option value="http://www.doctoralia.co">{card.opt.opt4}</option>
                           <option value="http://www.znamylekar.cz">{card.opt.opt5}</option>
                       </select>
                       <div data-aos="fade-up-left" className={(i==0)?"col-5":"col-5 marg-img"}>
                           <img  src={card.img} width="250%"/>
                       </div>
                   </div>
               </div>
           </div>
          
          
          
          
              )

          }
        </div>  );
    }
}
 
export default GbCard;