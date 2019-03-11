import React, { Component } from 'react';
import '../style/App.css';
import '../style/bootstrap.min.css';
import '../style/main.css';
import photo1 from '../img/sms.png';
import locationIcon from '../ico/ico-location@2x.png';

class TopNews extends Component{
    render(){
        return(
            <div className="TopNews">
                <div className="card">
                    <div className="card-header top-judul">
                        Berita Terkini
                    </div>
                    <div className="card-body list-group list-group-flush">
                        <a className="list-group-item" href="#">OTP, Si Kode Rahasia nan Berbahaya</a>
                        <a className="list-group-item" href="#">Bosan Ngantor? Yuk Belajar Cara Memulai Bisnis Sampingan!</a>
                        <a className="list-group-item" href="#">Sudah Transaksi Pulsa, Kenapa Pulsa Saya Tidak Terkirim?</a>
                    </div>
                </div>
            </div>
        );
    }
}

export default TopNews;