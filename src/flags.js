import React from 'react'

const Flags = (props) =>{
   return (props.flg.map((el, i) =>
   <div className={((i==0)||(i==2))?"vert-align col-lg-6 bg-white flag-styles flag-left text-center":"vert-align col-lg-6 col-sm-12 bg-white flag-right text-center"}>
    <img className="img-fluid" scr={props.flg[i].src}
        srcset={props.flg[i].srcset}/>
    <h4 className="text-doc">{props.flg[i].h4}</h4>
    <p>
    {props.flg[i].p}
    </p>

</div>)
    )
}
export default Flags