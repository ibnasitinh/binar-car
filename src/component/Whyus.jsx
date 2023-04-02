import './../style/whyus.css';
import React, { Component } from 'react';

class Whyus extends Component {
    render () {
        return (
            <div className='container padding-top-60'>
                <div className='title-why-us'>
                    <h1 className='title'>Why Us ?</h1>
                    <p className='description'>Menagapa harus pilih Binar Car Rental ?</p>
                </div>
                <div className='row'>
                    <div className='col-md-3'>
                        <div className="card">
                            <div className="card-body">
                                <img className='why-us-icon' src="/images/icon_complete.svg" alt="icon_complete" />
                                <h6 className="card-subtitle mb-2">Mobil Lengkap</h6>
                                <p className="card-text description">Tersedia banyak pilihan mobil, kondisi masih baru, bersih dan terawat</p>
                            </div>
                        </div>
                    </div>
                    <div className='col-md-3'>
                        <div className="card">
                            <div className="card-body">
                                <img className='why-us-icon' src="/images/icon_price.svg" alt="icon_complete" />
                                <h6 className="card-subtitle mb-2">Harga Murah</h6>
                                <p className="card-text description">Harga murah dan bersaing, bisa bandingkan harga kami dengan rental mobil lain</p>
                            </div>
                        </div>
                    </div>
                    <div className='col-md-3'>
                        <div className="card">
                            <div className="card-body">
                                <img className='why-us-icon' src="/images/icon_24hrs.svg" alt="icon_complete" />
                                <h6 className="card-subtitle mb-2">Layanan 24 jam</h6>
                                <p className="card-text description">Siap melayani kebutuhan Anda selama 24 jam nonstop. Kami juga tersedia di akhir minggu</p>
                            </div>
                        </div>
                    </div>
                    <div className='col-md-3'>
                        <div className="card">
                            <div className="card-body">
                                <img className='why-us-icon' src="/images/icon_professional.svg" alt="icon_complete" />
                                <h6 className="card-subtitle mb-2">Sopir Profesional</h6>
                                <p className="card-text description">Sopir yang profesional, berpengalaman, jujur, ramah dan selalu tepat waktu</p>
                            </div>
                        </div>
                    </div>
                    
                    
                </div>
            </div>
        )
    }
}

export default Whyus;
