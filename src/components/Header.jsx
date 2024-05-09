import React from "react";
import { Link } from "react-router-dom";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import { faList, faPlus, faUser, faCircleInfo, } from "@fortawesome/free-solid-svg-icons";


const Header = () => {
    return(
        <header >
            <nav>
                <div>
                    < Link to="/lista-enquetes">
                        <FontAwesomeIcon icon={faList} /> Lista Enquetes
                    </Link>
                    < Link to="/sobre">
                        <FontAwesomeIcon icon={faCircleInfo} /> Sobre
                    </Link>
                </div>

                <div>
                < Link to="/adicionar-enquete">
                        <FontAwesomeIcon icon={faPlus} /> Adicionar nova Enquete
                    </Link>
                    < Link to="/admin">
                        <FontAwesomeIcon icon={faUser} /> Login
                    </Link>
                </div>
            </nav>
        </header>
    )
}



export default Header;