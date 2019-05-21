import React from 'react'
import Flags from './flags'

const MainFlags = () => {
    let flags = [{
        src: "https://www.docplanner.com/img/flag.png",
        srcset: "https://www.docplanner.com/img/flag.png 1x, https://www.docplanner.com/img/flag@2x.png 2x",
        h4: "Leader in 10 countries",
        p: "Poland, Turkey, Spain, Italy, Czech Republic,Mexico, Brazil,Colombia,Argentina and Chile"
    },
    {
        src: "https://www.docplanner.com/img/visits.png",
        srcset: "https://www.docplanner.com/img/visits.png 1x, https://www.docplanner.com/img/visits@2x.png 2x",
        h4: "1.5 million appointments",
        p: "booked last month"
    },
    {
        src: "https://www.docplanner.com/img/patients.png",
        srcset: "https://www.docplanner.com/img/patients.png 1x, https://www.docplanner.com/img/patients@2x.png 2x",
        h4: "30 million unique patients",
        p: "visit us every month"
    },
    {
        src: "https://www.docplanner.com/img/doctors.png",
        srcset: "https://www.docplanner.com/img/doctors.png 1x, https://www.docplanner.com/img/doctors@2x.png 2x",
        h4: "2 million active doctors",
        p: "trust our solutions"
    }]
    return (
        <div className="container-fluid flags-bg">
            <div className="container">
                <section className="row">
                    <div className="mid-flag text-left col-lg-5 col-sm-12">
                        <h1 className="text-doc">
                            The world's
                    <br />biggest healthcare platform
                </h1>
                        <p className="text-secondary">
                            We work from 6 offices all over the world, bringing Docplanner Group to life in almost
                            20
                            countries.
                </p>
                        <img src={require('./Capture-bg.png')} alt="doc logo" />
                    </div>
                    <div className="d-flex justify-content-around col-lg-6 col-sm-12">
                        <Flags flg={flags} />

                    </div>
                </section>
            </div>
        </div>
    )
}
export default MainFlags