import React from 'react'

const TopParag = (props) => {
    return(<div className="row">
     {props.para.map((el, i) => (
        <p className="col-lg-5 col-sm-12" key={i}>{el.p}</p>)
    )} </div>)
}


export default TopParag