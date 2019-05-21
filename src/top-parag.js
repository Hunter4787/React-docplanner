import React from 'react'

const TopParag = (props) => 
     props.para.map((el, i) => (
        <p className="col-lg-5 col-sm-12" key={i}>{el.p}</p>)
    )


export default TopParag