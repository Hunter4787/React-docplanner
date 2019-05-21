import React from 'react'

const OfficeCard = (props) =>{
    return(props.footcard.map((el, i)=> <div className="col-lg-4 parag-top bg-white" tabindex="-1" role="option" aria-describedby="slick-slide20">
    <a href={props.footcard[i].href} tabindex="-1">
        <figure className="office__image">
            <img scr={props.footcard[i].src}
                srcset={props.footcard[i].srcset}/>
        </figure>
        <div className="d-flex justify-content-around ">
        <span className="text-muted">{props.footcard[i].title}</span>
            <button type="button" className="btn btn-primary">See Openings</button>
        </div>
    </a>
</div>))

}
export default OfficeCard