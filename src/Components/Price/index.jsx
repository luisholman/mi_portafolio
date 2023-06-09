import React from "react";

const Price =()=>{

    const header ={
        subHeading: "proyecto creativo de plan de precios populares",
        text: "When building a webside, start here. Our shared service delivers a powerful, proven",
    };

    const state = [
        {
            id: 1,
            heading: "Basic",
            price: 30,
            msg1: "Web Design (UX/UI)",
            msg2: "Software Development",
            msg3: "Fashion Design (Arts)",
            msg4: "Web Development (php)",
            msg5: "Gamw Design & DV", 
        },
        {
            id: 2,
            heading: "Basic",
            price: 69,
            msg1: "Web Design (UX/UI)",
            msg2: "Software Development",
            msg3: "Fashion Design (Arts)",
            msg4: "Web Development (php)",
            msg5: "Gamw Design & DV", 
        },
        {   id: 3,
            heading: "Basic",
            price: 199,
            msg1: "Web Design (UX/UI)",
            msg2: "Software Development",
            msg3: "Fashion Design (Arts)",
            msg4: "Web Development (php)",
            msg5: "Gamw Design & DV", 
        },
    ];

    return(
        <div className="prices">
            <div className="container__prices">
                <div className="common">
                    <h2 className="mainHeader">
                        {header.subHeading}
                    </h2>
                    <h6 className="mainContent">{header.text}</h6>
                    <div className="commonBo"></div>
                </div>

                <div className="row">
                    {state.map((prices) =>(
                        <div className="col-4" key={prices.id}>
                            <div className="price">
                                <div className="priceHeading">${prices.heading}</div>
                                <div className="price__rs">
                                    <span>$</span>
                                    {prices.price}
                                </div>
                                <ul>
                                    <li>{prices.msg1}</li>
                                    <li>{prices.msg2}</li>
                                    <li>{prices.msg3}</li>
                                    <li>{prices.msg4}</li>
                                    <li>{prices.msg5}</li>
                                </ul>
                                <div className="price__btn">
                                    <a href="price" className="btn btn-outline"> Empezar Ahora</a>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Price;