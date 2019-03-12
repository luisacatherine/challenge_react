import React, { Component } from 'react';
import axios from 'axios';
import '../style/App.css';
import '../style/bootstrap.min.css';
import '../style/main.css';
import TopNews from '../components/TopNews';
import Berita from '../components/Berita';
import Search from '../components/Search'

import photo1 from '../img/sms.png'
const az = {photo1}
const urlTop = 'https://newsapi.org/v2/everything'
const api_key = 'e7f87120a12d4566b76749df7eba0742'
class ClassCnbc extends Component{
    constructor(props){
        super(props);
        this.state = {
            listNews: []
        }
    };

    componentDidMount = () => {
        const self = this;
        axios
            .get(urlTop, {
                params: {
                    sources: 'cnbc'
                },
                headers: {
                    'X-Api-Key': api_key
                }
            })
            .then(function(response){
                self.setState({listNews: response.data.articles});
                console.log(response.data)
            })
            .catch(function(error){
                console.log(error);
            });
    };

    render(){
        const {listNews} = this.state;
        return(
            <div className="ClassCnbc">
                <div className="container container-blog">
                    <div className="row">
                        <div className="col-md-4 col-blog">
                            <div className="nav-left">
                                <TopNews />
                                <Search doSearch = {e => this.handleInputChange(e)}/>
                            </div>
                        </div>
                        <div className="col-md-8 col-blog">
                            {listNews.map((item, key) => {
                                const src_img = item.urlToImage === null ? az : item.urlToImage;
                                const content = item.urlToImage !== null ? item.content : "";
                                return <Berita key={key} title={item.title} img={src_img} content={content} date={item.publishedAt} author={item.author} />; 
                            })}
                        </div>
                    </div>
                </div>
            </div>
        )
    };
};

export default ClassCnbc;