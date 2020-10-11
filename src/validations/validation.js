import React, { Component } from 'react';
import { Table } from 'react-bootstrap';
import PropTypes from 'prop-types';

class Validation extends React.Component{
    constructor(props){
        super(props);
        this.element = this.createElement();
    }

    createElement() {
        var strElement = "";
        strElement += " type = '"+ this.props.validation.element.type +"' ";
        strElement += " value = '"+ this.props.validation.element.value + "' "; 
        return strElement;
    }

    render() {
        var element = this.element;
        return (
            <input test={element}/>
        );
    }

}

export default Validation;