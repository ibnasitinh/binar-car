import React, { Component } from 'react';
import { Link } from "react-router-dom";

class Banner extends Component {
  render () {
    return (
      <div className='container-fluid'>
        <div className='row banner'>
          <div className='col-md-6 text-banner'>
            <h1 className='title'>Sewa & Rental Mobil Terbaik di kawasan (Lokasimu)</h1>
            <p className='description'>Selamat datang di Binar Car Rental. Kami menyediakan mobil kualitas terbaik dengan harga terjangkau. Selalu siap melayani kebutuhanmu untuk sewa mobil selama 24 jam.</p>
            <Link to="/car"> <button className="btn_banner">Mulai Sewa Mobil</button></Link>
          </div>
          <div className='col-md-6 img-banner'>
            <img src='/images/img_car.png' width="100%" alt='car'></img>
          </div>
        </div>
      </div>
    )
  }
}

export default Banner;
