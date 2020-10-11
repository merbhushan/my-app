import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { ControlLabel, FormControl, FormGroup } from 'react-bootstrap';
import Validation from './../validations/validation';
import Bootstrap from './bootstrapGrid.js';
/**
 * Various JS events
 * Sr.      Event           Description
 * 1.       onchange    	An HTML element has been changed
 * 2.       onclick     	The user clicks an HTML element
 * 3.       onmouseover 	The user moves the mouse over an HTML element
 * 4.       onmouseout  	The user moves the mouse away from an HTML element
 * 5.       onkeydown   	The user pushes a keyboard key
 * 6.       onload      	The browser has finished loading the page
 * 
 */

class RFormElement extends Component {

    static propTypes = {
        inputParams: PropTypes.object = {}
        // email: PropTypes.string,
        // inputFieldType: PropTypes.string,
        // isRequired: PropTypes.number
    };

    constructor(props) {
        super(props);
        this.objParams = this.props.inputParams;
        
        /**
         * Set parameters in variable or Set it to default value.
         * Sr.     Variable Name       Default Value
         * 1.       label               Label
         * 2.       value               ""
         * 3.       size                4
         * 4.       name(strName)       ""
         * 5.       class(strClass)     ""
         */

        this.label = this.props.label || (this.objParams && this.objParams.label)?this.objParams.label: "Label";
        this.value = this.props.value || (this.objParams && this.objParams.value)?this.objParams.value: "Label";
        this.size = this.props.size || (this.objParams && this.objParams.size)?this.objParams.size: 4;
        this.strName = this.props.strName || (this.objParams && this.objParams.strName)?this.objParams.strName: "";
        this.strClass = this.props.strClass || (this.objParams && this.objParams.strClass)?this.objParams.strClass: "";
        
        this.handleChange = this.handleChange.bind(this);
        
        this.state = {
            value: this.value
        }
        // this.handleChange = this.handleChange.bind(this);
        // this.handleClick = this.handleClick.bind(this);
        // this.handleMouseHover = this.handleMouseHover.bind(this);
        // this.handleMouseOut = this.handleMouseOut.bind(this);
        // this.handlKeyDown = this.handlKeyDown.bind(this);
        // this.handleOnLoad = this.handleOnLoad.bind(this);
    }

    handleChange(e) {
        this.setState({ value: e.target.value });
    }
    
    render() {
        var objBootstrap = new Bootstrap();
        var strText = objBootstrap.getGridClass(6);
        return (
            <FormGroup className={objBootstrap.getGridClass(this.size)}>
                <ControlLabel>{this.label}</ControlLabel>
                <FormControl type="text" value={this.state.value} placeholder="Enter text" onChange={this.handleChange}/>
                <FormControl.Feedback />
            </FormGroup>
        );
    }
}

export default RFormElement;