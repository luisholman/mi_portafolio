import React from "react";

const Header = () => {
    return (
        <header className="header">
            <div className="container">
                <div className="row">
                    <div className="col-6">
                        <div className="header__content">
                            <div className="header-section">
                                <h2>Hola, yo soy </h2>
                                <h1>Luis Holman Oicata Jaime</h1>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit maiores placeat sapiente illo architecto ab eaque vitae atque voluptas ipsa? Quibusdam nostrum delectus voluptas natus doloribus eveniet, mollitia fugiat magni!</p>
                                <div className="header__buttons">
                                    <a href="header" className="btn btn-outline">Contratame</a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-6">
                        <img src="./image/perfil.jpg" alt="nn" className="image" />
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Header;