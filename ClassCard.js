import React from 'react';
class ClassCard extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        let {id,name,age,designation}=this.props.employee;
        return (
            <div>
                <div className="App">
                    <div className="card">
                        <div className="card-body">
                            <h3>{this.props.info}</h3>
                            <ul>
                                <li>ID:{id}</li>
                                <li>Name:{name}</li>
                                <li>ID:{age}</li>
                                <li>ID:{designation}</li>
                            </ul>
                            <p>loremThe Lorem ipum filling text is used by graphic designers, programmers and printers with the aim of occupying the spaces of a website, an advertising product or ...</p>
                        </div>
                    </div>
                </div>
            </div>
        );

    }
}
export default ClassCard;
