import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import RForm from './components/form/form';
import {Grid, Col, Row} from 'react-bootstrap';
import rule from './validations/rules';

class App extends Component {
  headers = ["First Name", "Last Name", "Emp Id"];
  data= [
    { first_name: "Bhushan", last_name: "Mer", emp_id: 456, id:25},
    { first_name: "Bhushan", last_name: "Mer", emp_id: 456, id: 85}
  ];
  render() {
    var inputParams = {
      label: "Name",
      value: "Bhushan",
    };
    var objRules = new rule;
    console.log('I am in rule object..');
    console.log(objRules.validationRules.length('bhushanm01', 10));

    this.formParams = {
      rows: [
        {
          elements: [
            {
              label: "First Name",
              value: "",
              
              gridClass: "col-lg-4 col-md-4",
              helperText: "First Name",
              strId: "fname"
              
            },
            {
              label: "Middle Name",
              value: "",
              gridClass: "col-lg-4 col-md-4",
              strId: "mname"
              
            },
            {
              label: "Last Name",
              value: "",
              gridClass: "col-lg-4 col-md-4",
              strId: "lname",
              validate: {
                email:{}
              }
              
            }
          ],
        },
        {
          elements: [
            {
              label: "Email ID",
              value: "",
              strId: "email_id",
              type: "email",
              size: 8
            },
            {
              label: "Password",
              value: "",
              type: "password",
              strId: "password",
              size: 8
            },
            {
              label: "Confirm Password",
              value: "",
              type: "password",
              strId: "confirm_password",
              size: 8
            }
          ]
        },
        {
          elements: [
            {
              label: "Description",
              value: "",
              strId: "description",
              elementType: "textarea",
              size: 12
            },
          ]
        },
        {
          elements: [
            {
              label: "Gender",
              value: "",
              strId: "gender",
              elementType: "select",
              size: 12
            },
          ]
        },
        {
          elements: [
            {
              label: "Gender",
              value: "",
              strId: "genderRadio",
              elementType: "radio",
              isInline: true,
              comboElements:[
                {
                  value: "M",
                  title: "Male",
                  isInline: true,
                  isChecked: true
                },
                {
                  value: "F",
                  title: "Female",
                  isInline: true,
                  isReadOnly: true
                }
              ],
              size: 12
            },
          ]
        }
      ]
    };

    var inputParams1 = inputParams
    return (
      // <Table headers = {this.headers} data={this.data} enableRowSelection = {true}/>
      <div>
        <RForm formParams = {this.formParams}/>
      </div>
    );
  }
}

export default App;
