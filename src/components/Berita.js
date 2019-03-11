import React, { Component } from 'react';
import '../style/App.css';
import '../style/bootstrap.min.css';
import '../style/main.css';
import photo1 from '../img/sms.png'

class Berita extends Component{
    render(){
        return(
            <div className="Berita">
                <img className="img-blog" src={photo1}></img>
                <h2 className="head-2">OTP, Si Kode Rahasia nan Berbahaya</h2>
                <p className="publish-date">
                    <span>11 Maret 2019</span><br/>
                    <span>Sepulsa</span>
                </p>
                <p className="isi-blog">
                    Kemudahan dalam berbagai transaksi perbankan memang banyak memberikan keuntungan bagi nasabah. Bayangkan saja, aktivitas jual beli yang pada awalnya membutuhkan waktu dan tempat, kini bisa dilakukan tanpa perlu beranjak dari tempat duduk kamu dan pembayaran lunas dalam hitungan detik dengan transaksi online. Namun tanpa disadari, kemudahan tersebut bukan berarti tanpa celah.<br/><br/>                                
                    Sebelum kita membahas lebih jauh, mari kita kenali lebih dalam salah satu tahapan otentikasi, yaitu kode OTP (One Time Password) atau kata sandi sekali pakai yang digunakan untuk transaksi online maupun login akun. Kode OTP terdiri darikombinasi angka yang bersifat unik, dan rahasia. Kode ini dikirimkan melalui SMS oleh pihak bank, aplikasi, atau operator dengan masa berlaku setiap kode selama 5 menit. Kode ini ditujukan sebagai bentuk keamanan dalam mengkonfirmasi login atau konfirmasi transaksi online.<br/><br/>
                    Kode OTP ini sebenarnya ditujukan untuk keamanan, namun ketidakwaspadaan nasabah dimanfaatkan sebagai kesempatan oleh pelaku penipuan. Awalnya, korban akan menerima SMS berisikan kode OTP untuk transaksi atau login akun yang tidak dilakukan. Tidak lama kemudian, pelaku akan menghubungi korban dengan berpura-pura menjadi Customer Service atau karyawan dari instansi terkait. Mulai dari iming-iming hadiah hingga transaksi mencurigakan, pelaku akan meminta kode OTP yang korban terima sebagai bentuk verifikasi. Seribu satu cara pelaku lakukan, tidak jarang diikuti dengan tindakan pemaksaan dan ancaman. Padahal, tidak ada pihak manapun yang berhak meminta serta menggunakan kode OTP tersebut selain penggunanya sendiri.
                </p>
                <hr/><br/>
            </div>
        );
    }
}

export default Berita;