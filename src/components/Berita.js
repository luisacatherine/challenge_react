import React, { Component } from 'react';
import PropTypes from 'prop-types';
import '../style/App.css';
import '../style/bootstrap.min.css';
import '../style/main.css';
import photo1 from '../img/sms.png'

const Berita = (props) => {
    return(
        <div className="Berita">
            <img className="img-blog" src={props.img}></img>
            <h2 className="head-2">{props.title}}</h2>
            <p className="publish-date">
                <span>{props.date}</span><br/>
                <span>{props.author}</span>
            </p>
            <p className="isi-blog">{props.content}</p>
            <hr/><br/>
        </div>
    );
};

Berita.propTypes = {
    title: PropTypes.string.isRequired,
    content: PropTypes.string.isRequired,
    date: PropTypes.string,
    author: PropTypes.string,
    img: PropTypes.string
}

export default Berita;