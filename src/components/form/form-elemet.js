import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Checkbox, ControlLabel, FormControl, FormGroup, HelpBlock, Radio } from 'react-bootstrap';
// import Validation from './../validations/validation';
import Bootstrap from './../bootstrapGrid.js';
import rules from './../../validations/rules';
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
        this.objParams = this.props.eleParams;
        
        /* Define a bootstrap object */
        this.objBootstrap = new Bootstrap();

        /**
         * Set parameters in variable or Set it to default value.
         * Sr.     Variable Name       Default Value
         * 1.       label               Label
         * 2.       value               ""
         * 3.       size                4
         * 4.       control Id(strId)   Id which is used to uniquely identify a element
         * 5.       name(strName)       default to controlId
         * 6.       eleClass            ""
         * 7.       gridClass           if "" then will be decided based on size
         * 8.       helperText          ""
         * 9.       type                if element type is input then it will used. Default is text for input else ""
         * 10.      placeholder         label
         * 11.      elementType         Type of HTML Elemtn. Default is input.
         * 12.      isSrOnly            It's used to Enable and disable a control label. Default is false.
         * 13.      objValidationRules  It's contains the rule for which field should be validated and required parameters for the same.
         */

        this.elementType = this.props.elementType || (this.objParams && this.objParams.elementType)?this.objParams.elementType: "input";
        this.label = this.props.label || (this.objParams && this.objParams.label)?this.objParams.label: "Label";
        this.value = this.props.value || (this.objParams && this.objParams.value)?this.objParams.value: "";
        this.size = this.props.size || (this.objParams && this.objParams.size)?this.objParams.size: 4;
        this.strId = this.props.strId || (this.objParams && this.objParams.strId)?this.objParams.strId: "";
        this.strName = this.props.strName || (this.objParams && this.objParams.strName)?this.objParams.strName: this.strId;
        this.eleClass = this.props.eleClass || (this.objParams && this.objParams.eleClass)?this.objParams.eleClass: "";
        this.gridClass = this.props.gridClass || (this.objParams && this.objParams.gridClass)?this.objParams.gridClass: this.objBootstrap.getGridClass(this.size);
        this.helperText = this.props.helperText || (this.objParams && this.objParams.helperText)?this.objParams.helperText: "";
        this.type = (this.elementType === "input")?(this.props.type || (this.objParams && this.objParams.type)?this.objParams.type: "text"):"";
        this.placeholder = this.props.placeholder || (this.objParams && this.objParams.placeholder)?this.objParams.placeholder: this.label;
        this.isSrOnly = this.props.isSrOnly || (this.objParams && this.objParams.isSrOnly)?this.objParams.isSrOnly: false;
        this.isInline = this.props.isInline || (this.objParams && this.objParams.isInline)?this.objParams.isInline: false;
        this.isDisabled = this.props.isDisabled || (this.objParams && this.objParams.isDisabled)?this.objParams.isDisabled: false;
        this.objValidationRules = this.props.validate || (this.objParams && this.objParams.validate)?this.objParams.validate: false;

        /**
         * Bind Events
         *      Event Name                  Description
         *      handleChange                It's used to update a value of an element.
         */
        this.handleChange = this.handleChange.bind(this);
        
        this.state = {
            value: this.value,
            isFocused: false
        }
        // this.handleChange = this.handleChange.bind(this);
        // this.handleClick = this.handleClick.bind(this);
        // this.handleMouseHover = this.handleMouseHover.bind(this);
        // this.handleMouseOut = this.handleMouseOut.bind(this);
        // this.handlKeyDown = this.handlKeyDown.bind(this);
        // this.handleOnLoad = this.handleOnLoad.bind(this);
    }

    /* Update a value of element whenever input is changed. */
    handleChange(event) {
        this.setState({ 
            value: event.target.value,
            isFocused: true
        });
    }

    getValidationState() {
        console.log(this.state.isFocused);
        if(this.objValidationRules && this.state.isFocused){
            console.log(this.objValidationRules);
            var objValidation = new rules;
            var arrRules = Object.keys(this.objValidationRules);
            var intRuleCount = arrRules.length;

            for(var intCount = 0; intCount < intRuleCount; intCount++){
                var strRule = arrRules[intCount];
                var objRulePara = this.objValidationRules[strRule];
                console.log(objValidation.validationRules[strRule](this.state.value, objRulePara));
                if(!objValidation.validationRules[strRule](this.state.value, objRulePara))
                    return 'error';
            }
            return 'success';
        }
    }

    render() {
        switch(this.elementType) {
            case "radio":
                return(
                    <FormGroup className={this.gridClass} controlId={this.strId}>
                        {this.objParams.comboElements.map((comboEle)=><Radio disabled={this.isDisabled} inline={this.isInline} checked={comboEle.isChecked}  name = {comboEle.name || this.strName} value={comboEle.value}>{comboEle.title +" "}</Radio>)}
                    </FormGroup>
                );
                break;
            case "checkbox":
                return(
                    this.objParams.comboElements.map((comboEle)=><Checkbox inline={this.isInline} checked={comboEle.isChecked || false} readOnly={comboEle.isReadOnly || false} name = {comboEle.name || this.strName} value={comboEle.value}>{comboEle.title +" "}</Checkbox>)
                );
                break;
        }
        return (
            <FormGroup validationState = {this.getValidationState()} className={this.gridClass} controlId={this.strId}>
                <ControlLabel srOnly={this.isSrOnly}>{this.label}</ControlLabel>
                <FormControl componentClass={this.elementType} type={this.type} value={this.state.value} placeholder={this.label} onChange={this.handleChange }/>
                {/* <FormControl.Feedback /> */}
                <HelpBlock>{this.helperText}</HelpBlock>
            </FormGroup>
        );
    }
}

export default RFormElement;