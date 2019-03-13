import React, { Component } from 'react';
import '../style/App.css';
import '../style/bootstrap.min.css';
import '../style/main.css';
import iconSearch from '../ico/ico-search.png';

class Search extends Component {
	render() {
    	return (
      		<div className="Search">
                <div className="searchbar">
                    <div className="input-group text-right">
                        <input 
                            type = "text" 
                            className = "form-control" 
                            placeholder = {this.props.placeholder} 
                            aria-label = "Search" 
                            aria-describedby = "basic-addon2"
                            value = {this.props.keyword}
                            onChange = {this.props.doSearch}
                        />
                        <div className="input-group-append">
                            <button className="btn btn-outline-warning" type="submit"><span><img src={iconSearch} style={{width: 'auto', height: '15px'}} /></span></button>
                        </div>
                    </div>
                </div>
      		</div>
    	);
  	}
}

export default Search;
