import React from "react";
import './FuncCard.css';

let FuncCard = (props) => {
    console.log(props);

    return (

        <div>
            <div className="App">
                <div className="card">
                    <div className="card-body">
                        <h3>{props.info}</h3>
                        <p>{new Date().toDateString()}</p>
                        <p>{new Date().toLocaleTimeString()}</p>

                        <ul>
                    <li>ID:{props.employee.id}</li>
                    <li>Name:{props.employee.name}</li>
                    <li>ID:{props.employee.age}</li>
                    <li>ID:{props.employee.designation}</li>
                   </ul>
                        <p>loremThe Lorem ipum filling text is used by graphic designers, programmers and printers with the aim of occupying the spaces of a website, an advertising product or ...</p>
                    </div>
                </div>
                </div>

            </div>
            );
};
            export default FuncCard;