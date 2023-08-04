import React from 'react'

const Services = () => {
    return (
        <div>
            <section className="services" id="services">
                <div className="max-width">
                    <h2 className="title">My services</h2>
                    <div className="serv-content">
                        <div className="card">
                            <div className="box">
                                <i className="fas fa-paint-brush" />
                                <div className="text">UI/UX Design</div>
                            </div>
                        </div>
                        <div className="card">
                            <div className="box">
                                <i className="fas fa-chart-line" />
                                <div className="text">Photoshop</div>
                            </div>
                        </div>
                        <div className="card">
                            <div className="box">
                                <i className="fas fa-code" />
                                <div className="text">PC Service</div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

        </div>
    )
}

export default Services