import React, { Component } from 'react';
import { Table } from 'react-bootstrap';
import PropTypes from 'prop-types';

class RTable extends Component {
    static propTypes = {
        headers: PropTypes.arrayOf(PropTypes.string).isRequired,
        data: PropTypes.any,
        noDataMsg: PropTypes.string,
        tblClass: PropTypes.string,
        alias: PropTypes.arrayOf(PropTypes.string),
        enableRowSelection: PropTypes.bool = false
    };
    
    constructor(props) {
        super(props);
        this.alias = (this.props.alias && this.props.headers.length === this.props.alias.length)? this.props.alias : this.headerToAliasConversion(this.props.headers);
        this.state ={
            selectedRow: []
        };
    }

    headerToAliasConversion() {
        return this.props.headers.map(element => this.convertToAlias(element));   
    }

    convertToAlias(strHeader) {
        return strHeader.toLowerCase().replace(' ', '_');   
    }

    render() {
        return(
            <div className ="row">
                <div className ="col-sm-12">
                    <Table responsive bordered className = {this.props.tblClass || "table-striped table-hover table-condensed"}>
                        <TableHeader headers = {this.props.headers} />
                        <TableBody alias={this.alias} data = {this.props.data} noDataMsg={this.props.noDataMsg || "No Record(s) are found"} noOfCols = { this.props.headers.length } />
                    </Table>
                </div>
            </div>
        );
    }

}

class TableHeader extends Component{
    constructor(props) {
        super(props);
    }
    render() {
        return(
            <thead>
                <TableRow headers = {this.props.headers} thead="1" />
            </thead>
        );
    }
}

class TableBody extends Component {
    constructor(props) {
        super(props);
        this.onclickRowSelection = this.onclickRowSelection.bind(this);
    }

    onclickRowSelection(event) {
        event.preventDefault();
        console.log(event.target);        
    }
    
    render() {
        var strBody = "";
        if(this.props.data === undefined) {
            strBody = (
                <tr>
                    <td colspan={this.props.noOfCols} className="text-center">
                        <strong className="text-info">{this.props.noDataMsg}</strong>
                    </td> 
                </tr>
            );
        }
        else{
            strBody = this.props.data.map((arrVal, intIndex)=><TableRow onClick={this.onclickRowSelection} alias={this.props.alias} index ={intIndex} key={arrVal.id || intIndex} data={arrVal} tbody = {1} />);
        }
        return(
            <tbody>
                {strBody}
            </tbody>
        );
        
    }
}

class TableFooter extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return(
            <tfoot>

            </tfoot>
        );
    }
}

class TableRow extends Component {
    constructor(props) {
        super(props);
    }
    
    getTalbeRowChidren() {
        if(this.props.thead || this.props.tfoot) {
            return this.props.headers.map((header)=> <HeaderCell title={header} />);
        } else {
            return this.props.alias.map((alias, index)=> <BodyCell value={this.props.data[alias]} />);
        }
    }
    
    render() {
        return(
            <tr id={this.props.data && this.props.data.id || this.props.index}>
                {this.getTalbeRowChidren()}
            </tr>
        );
    }
}


class HeaderCell extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return(
            <th> {this.props.title} </th>
        );
    }
}

class BodyCell extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return(
            <td> {this.props.value} </td>
        );
    }
}

export default RTable;