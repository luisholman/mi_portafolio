import React from "react";

const About =()=>{

    return(
        <div className="about">
            <div className="container">

                <div className="common">
                    <h1 className="about-title">Sobre Mi</h1>
                    <div className="underline-border"></div>
                </div>
                <div className="row h-650 alignCenter">
                    <div className="col-6">
                        <div className="about__img">
                            <img src="./image/about.jpg" alt="img about" />
                            
                        </div>
                    </div>

                    <div className="col-6">
                        <div className="about__info">
                            <h1>Creative Ui & Ux Design <br /> basado en new york, USA</h1>
                            <div className="about__info">
                                <p>
                                    Lorem ipsum dolor sit amet consectetur adipisicing 
                                    elit. Voluptatem minus repudiandae rerum. Dignissimos
                                    cumque molestiae assumenda odit? Sit tenetur quidem
                                    aliquid doloribus assumenda velit nesciunt pariatur,
                                    distinctio repellat similique, atque eligendi error
                                    asperiores officiis nihil illum odio? Vero unde a
                                    enim, earum fugiat, molestiae esse cumque ducimus
                                    sit, minima quasi?
                                </p>
                                <div className="abouts__buttons">
                                    <a href="#about" className="btn about-btn-outline">
                                        Descargar CV
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About;