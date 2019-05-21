import React from 'react'
import TopParag from './top-parag'


const par = [{p : "We want patients to find the perfect doctor and book an appointment in the most easy way. Thepatient journey should be enjoyable, and that's why we are always next to them: to help them find the best possible care. Anytime, anywhere."},
             {p : "We also help doctors to better manage their practice and build their online reputation. With our integrated end-to-end solution, doctors are able not only to improve their online presence, but also to devote their time to what really matters: their patients."}]

const TitleTop = () => {

    return (<div className="container text-center space">
        <img className="img-fluid " alt="" src="https://www.docplanner.com/img/sygnet.png"
            srcSet="https://www.docplanner.com/img/sygnet.png 1x, https://www.docplanner.com/img/sygnet@2x.png 2x" />
        <h1 className="text-doc">
            Making the healthcare experience more human
                </h1>
        <div className="container paragraphes">
            <div className="row text-secondary text-left parag-top">
                 <TopParag para={par} />
            </div>
        </div>
        </div>)
    }
export default TitleTop