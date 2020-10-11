import React, { Component } from 'react';
import PropTypes from 'prop-types';
class Bootstrap {

    static propTypes = {
        objParams: PropTypes.object
    }

    constructor(objParams){
        this.objParams = objParams;
        this.sizeFactor = {
            intXs: 12,
            intSm: 9,
            intMd: 4,
            intLg: 3
        }
    }

    getGridClass(intNum) {
        var intSize = intNum || this.objParams.size;
        return " col-xs-" +this.getXsSize(intSize) +" col-sm-" +this.getSmSize(intSize) +" col-md-" +intSize +" col-lg-" +this.getLgSize(intSize);
    }

    getXsSize(intSize) {
        var size = Math.ceil(this.sizeFactor.intXs * intSize / this.sizeFactor.intMd);
        return   size > 12 ? 12: size;
    }

    getSmSize(intSize) {
        var size = Math.ceil(this.sizeFactor.intSm * intSize / this.sizeFactor.intMd);
        return   size > 12 ? 12: size;
    }

    getLgSize(intSize) {
        var size = Math.ceil(this.sizeFactor.intLg * intSize / this.sizeFactor.intMd);
        return   size > 12 ? 12: size;
    }
}

export default Bootstrap;