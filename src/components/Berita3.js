import React, { Component } from 'react';
import '../style/App.css';
import '../style/bootstrap.min.css';
import '../style/main.css';
import photo1 from '../img/pulsa.jpg'

class Berita3 extends Component{
    render(){
        return(
            <div className="Berita3">
                <img className="img-blog" src={photo1}></img>
                <h2 className="head-2">Sudah Transaksi Pulsa, Kenapa Pulsa Saya Tidak Terkirim?</h2>
                <p className="publish-date">
                    <span>11 Maret 2019</span><br/>
                    <span>Sepulsa</span>
                </p>
                <p className="isi-blog">
                    Pembahasan yang akan kita bahas ini sepertinya adalah masalah yang beberapa orang pernah merasakannya, dimana kamu sudah selesai bertransaksi pulsa tetapi pulsa tidak juga terisi. Hal ini akan sangat menyebalkan terlebih jika kondisi kamu pada saat itu sangat membutuhkan pulsa.<br/><br/>                                
                    Banyak alasan yang menyebabkan pulsa kamu tidak terkirim bisa jadi ini merupakan kesalahan agen / distributor pulsa atau keteledoran dari penjual pulsa tradisional, banyak kasus juga tidak terkirimnya pulsa bisa disebabkan oleh pelanggan itu sendiri. Lalu, apa saja yang perlu kamu perhatikan agar dapat memastikan bahwa pulsa kamu benar-benar terkirim? Team sepulsa akan membahasnya bersama dibawah ini.<br/><br/>
                    Pastikan bahwa kamu mendapatkan serial number pada setiap transaksi, SN akan dikirm via SMS kepada agen pulsa dan pelanggan jika pulsa sukses terkirim. Jadi jika saja konfirmasi transaksi sukses berserta SN telah terkirim tetapi pulsa tidak kunjung juga diterima maka bagi pelanggan kamu dapat komplain ke agen atau komplain langsung ke provider yang bersangkutan.
                </p>
                <hr/><br/>
            </div>
        );
    }
}

export default Berita3;