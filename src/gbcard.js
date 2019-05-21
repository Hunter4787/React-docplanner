import React from 'react'

const GbCard = (props) => {
    return (props.crd.map((card, i) => <div className={(i==1)?"col-lg-5 col-md-12 rounded text-white card2-bg":"col-lg-5 col-md-12 rounded text-white card1-bg"}>
        <h5 className="card-color">{card.title}</h5>
        <h1>{card.parag}</h1>

        <div className="container-fluid ">
            <div className=" hide-img row">
                
                <select className={(i==1)?"col-5 dltslct":"style-select col-5"} data-id="domain-switcher">
                    <option>{card.slct}</option>
                    <option value="http://www.doctoraliar.com">{card.opt.opt0}</option>
                    <option value="http://www.doctoralia.com.au">{card.opt.opt1}</option>
                    <option value="http://www.doctoralia.com.br">{card.opt.opt2}</option>
                    <option value="http://www.doctoralia.cl">{card.opt.opt3}</option>
                    <option value="http://www.doctoralia.co">{card.opt.opt4}</option>
                    <option value="http://www.znamylekar.cz">{card.opt.opt5}</option>
                </select>
                <div className={(i==0)?"col-5":"col-5 marg-img"}>
                    <img  src={card.img} width="250%"/>
                </div>
            </div>
        </div>
    </div>




    ))
}
export default GbCard