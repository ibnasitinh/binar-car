import React, { Component } from 'react';
import { Link } from "react-router-dom";
import './../style/content_banner.css';

class ContentBanner extends Component {
  render () {
    return (
      <div className='container'>
        <div className='row content-banner'>
          <div className='col-md-12' align="center">
            <h1 className='title'>Sewa Mobil di (Lokasimu) Sekarang</h1>
            <p className='description'>Selamat datang di Binar Car Rental. Kami menyediakan mobil kualitas terbaik dengan harga terjangkau. Selalu siap melayani kebutuhanmu untuk sewa mobil selama 24 jam.</p>
            <Link to="/car"> <button className="btn_banner">Mulai Sewa Mobil</button></Link>
          </div>
        </div>
      </div>
    )
  }
}

export default ContentBanner;
