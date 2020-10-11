import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Element from './form-elemet' 

class RFormRow extends React.Component{
    constructor(props){
        super(props);
        this.objParams = this.props.rowParams;
    }

    render() {
        return (
            <div className="row">
                {this.objParams.elements.map((element)=><Element eleParams = {element}/>)}
            </div>
        );
    }

}

export default RFormRow;