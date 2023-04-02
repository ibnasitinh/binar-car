import './../style/service.css';
import React, { Component, Fragment } from 'react';


class Service extends Component {
  render () {
    return (
        <div className='container padding-top-60'>
            <div className='row'>
                <div className='col-md-6'>
                    <img src='/images/img_service.png' width="80%" alt='service'></img>
                </div>
                <div className='col-md-6 service-description'>
                    <h1 className='title'>Best Car Rental for any kind of trip in (Lokasimu)!</h1>
                    <p className='description'>Sewa mobil di (Lokasimu) bersama Binar Car Rental jaminan harga lebih murah dibandingkan yang lain, kondisi mobil baru, serta kualitas pelayanan terbaik untuk perjalanan wisata, bisnis, wedding, meeting, dll.</p>
                    <ul className='list-service'>
                        <li>Sewa Mobil Dengan Supir di Bali 12 Jam</li>
                        <li>Sewa Mobil Lepas Kunci di Bali 24 Jam</li>
                        <li>Sewa Mobil Jangka Panjang Bulanan</li>
                        <li>Gratis Antar - Jemput Mobil di Bandara</li>
                        <li>Layanan Airport Transfer / Drop In Out</li>
                    </ul>
                </div>
            </div>
        </div>
    )
  }
}

export default Service;