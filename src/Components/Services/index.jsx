import React from "react";

const Services =()=>{

    const header = {
        mainHeader: "Mi Experiencia",
        subHeading: "Proporcionar una amplia gama de servicios digitales",
    };

    const state = [
        {
            id: 1,
            icon: './image/game.svg',
            heading: "Ui/Ux Design",
            text: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Accusamus, earum dolorum! Suscipit",
        },
        {
            id: 2,
            icon: './image/game.svg',
            heading: "Web Design",
            text: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Accusamus, earum dolorum! Suscipit",
        },{
            id: 3,
            icon: './image/game.svg',
            heading: "Web Developmet",
            text: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Accusamus, earum dolorum! Suscipit",
        },{
            id: 4,
            icon: './image/game.svg',
            heading: "app Develoment",
            text: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Accusamus, earum dolorum! Suscipit",
        },{
            id: 5,
            icon: './image/game.svg',
            heading: "Video Editing",
            text: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Accusamus, earum dolorum! Suscipit",
        },
        {
            id: 6,
            icon: './image/game.svg',
            heading: "Seo Expert",
            text: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Accusamus, earum dolorum! Suscipit",
        },
    ];
    return (
        <div className="services">
            <div className="container">
                <div className="services__header">
                    <div className="common">
                        <h6 className="heading">{header.mainHeader}</h6>
                        <h2 className="subheading">{header.subHeading}</h2>
                        <div className="commonBorder"></div>
                    </div>

                    <div className="row bgMain">
                        {state.map((info) => (
                            <div className="col-6 bgMain">
                                <div className="services__box">
                                    <img src={info.icon} alt="imagenservi" className="commonIcons" />
                                    <h4 className="services__box-header">{info.heading}</h4>
                                    <p className="services__box-p">{info.text}</p>
                                    
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Services;