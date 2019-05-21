import React from 'react'
import OfficeCard from './offcard'

const FooterCard = () => {
    let arr = [{
        href: "/career?&amp;loc=poland#jobs-offers",
        src: "https://www.docplanner.com/images/warsaw.png",
        srcset: "https://www.docplanner.com/images/warsaw.png 1x, https://www.docplanner.com/images/warsaw@2x.png 2x",
        title: "Warsaw"
    },
    {
        href: "/career?&amp;loc=spain#jobs-offers",
        src: "https://www.docplanner.com/images/barcelona.png",
        srcset:"https://www.docplanner.com/images/barcelona.png 1x, https://www.docplanner.com/images/barcelona@2x.png 2x",
        title: "Barcelona"
    },
    {
        href:"/career?&amp;loc=rome#jobs-offers",
        src: "https://www.docplanner.com/images/istanbul.png",
        srcset:"https://www.docplanner.com/images/istanbul.png 1x, https://www.docplanner.com/images/istanbul@2x.png 2x",
        title: "Istanbul"
    },
    {
        href:"/career?&amp;loc=italy#jobs-offers",
        src: "https://www.docplanner.com/images/rome.png",
        srcset:"https://www.docplanner.com/images/rome.png 1x, https://www.docplanner.com/images/rome@2x.png 2x",
        title: "Rome"
    },
    {
        href:"/career?&amp;loc=mexico#jobs-offers",
        src:"https://www.docplanner.com/images/mexico-city.png",
        srcset:"https://www.docplanner.com/images/mexico-city.png 1x, https://www.docplanner.com/images/mexico-city@2x.png 2x",
        title: "Mexico City"
    },
    {
        href:"/career?&amp;loc=brazil#jobs-offers",
        src:"https://www.docplanner.com/images/curitiba.png",
        srcset:"https://www.docplanner.com/images/curitiba.png 1x, https://www.docplanner.com/images/curitiba@2x.png 2x",
        title: " Curitiba"
    },
    ]
    return (<div class="container space bg-light">
        <div class="row">

            <OfficeCard footcard={arr} />

        </div>
    </div>)
}
export default FooterCard