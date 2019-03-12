import React, { Component } from 'react';
import axios from 'axios';
import '../style/App.css';
import '../style/bootstrap.min.css';
import '../style/main.css';
import IsiTop from '../components/IsiTop';
const urlHeadline = 'https://newsapi.org/v2/top-headlines'
const api_key = 'e7f87120a12d4566b76749df7eba0742'

class TopNews extends Component{
    constructor(props){
        super(props);
        this.state = {
            listTop: []
        }    
    };

    componentDidMount = () => {
        const self = this;
        axios
            .get(urlHeadline, {
                params: {
                    country: 'id',
                    pageSize: 5
                },
                headers: {
                    'X-Api-Key': api_key
                }
            })
            .then(function(response){
                self.setState({listTop: response.data.articles});
                console.log(response.data)
            })
            .catch(function(error){
                console.log(error);
            });
    };

    render(){
        const {listTop} = this.state;
        return(
            <div className="TopNews">
                <div className="card">
                    <div className="card-header top-judul">
                        Berita Terkini
                    </div>
                    <div className="card-body list-group list-group-flush">
                        {listTop.map((item, key) => {
                            return <IsiTop key={key} url={item.url} title={item.title} />;
                        })}
                    </div>
                </div>
            </div>
        );
    }
}

export default TopNews;