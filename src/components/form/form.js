import React, { Component } from 'react';
import PropTypes from 'prop-types';
import FormRow from './form-row' 

class RForm extends React.Component{
    constructor(props){
        super(props);
        this.objParams = this.props.formParams;
        console.log(this.objParams);
        console.log("this.objParams");
    }

    render() {
        return (
            <form>
                {this.objParams.rows.map((row)=><FormRow rowParams = {row}/>)}
            </form>
        );
    }

}

export default RForm;