import React, { Component } from 'react';
import '../style/App.css';
import '../style/bootstrap.min.css';
import '../style/main.css';
import photo1 from '../img/bosan.jpg'

class Berita2 extends Component{
    render(){
        return(
            <div className="Berita2">
                <img className="img-blog" src={photo1}></img>
                <h2 className="head-2">Bosan Ngantor? Yuk Belajar Cara Memulai Bisnis Sampingan!</h2>
                <p className="publish-date">
                    <span>11 Maret 2019</span><br/>
                    <span>Sepulsa</span>
                </p>
                <p className="isi-blog">
                    Jika orang-orang di masa lalu (baca: orang tua kita) beranggapan bahwa kerja kantoran, setiap hari pulang pergi menggunakan setelan necis, berkutat dengan dokumen di pojok kantor berlantai 2 digit adalah sebuah prestisi. Tapi lain halnya dengan milenial.<br/><br/>                                
                    Milenial beranggapan bahwa kesuksesan karir dapat diraih apabila mereka lebih luwes, mandiri, dan berjiwa entrepreneur. Mungkin itulah sebabnya di masa kini kita lebih sering melihat pengusaha-pengusaha muda yang bermunculan.<br/><br/>
                    Nih, berdasarkan survey yang dilakukan Universitas Bentley ternyata cuma 13% loh milenial yang ingin berkarir secara konsisten di korporasi. Cuma 13% aja yang berharap di masa mendatang dirinya akan menjadi seorang CEO dengan memanjat tangga korporat perlahan-lahan!
                </p>
                <hr/><br/>
            </div>
        );
    }
}

export default Berita2;