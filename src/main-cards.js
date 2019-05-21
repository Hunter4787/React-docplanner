import React from 'react'
import GbCard from './gbcard'
const MainCards = () => {
    let crds= [{title :"For patients",
                parag : "Find a doctor, book a visit and solve any health-related doubt",
                slct : "Choose country",
                opt : {opt0: "Argentina",
                       opt1 : "Australia", 
                       opt2 : "Brazil", 
                       opt3 : "Chile", 
                       opt4 : "Colombia", 
                       opt5 : "Czech" },
                img : "https://www.docplanner.com/img/screen-marketplace@2x.png"},
                {title :"For patients",
                parag : "Find a doctor, book a visit and solve any health-related doubt",
                slct : "",
                opt : "",
                img : "https://www.docplanner.com/img/screen-saas@2x.png" }]
    return (<div className="container ">
        <div className="row justify-content-around">
        <GbCard crd={crds} />
        </div>
    </div>)
}
export default MainCards