import React, { Component } from 'react';
import PropTypes from 'prop-types';
import '../style/App.css';
import '../style/bootstrap.min.css';
import '../style/main.css';

const IsiTop = (props) => {
    return(
        <div className="IsiTop">
            <a className="list-group-item" href={props.url}>{props.title}</a>
        </div>
    );
};

IsiTop.propTypes = {
    title: PropTypes.string.isRequired,
    url: PropTypes.string
}

export default IsiTop;