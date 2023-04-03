import React, { Component } from 'react';
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper";
import './../style/testimoni.css';

class Testimoni extends Component {
  render () {
    return (
        <div className='container container-testimoni'>
            <div className='col-md-12 text-center'>
                <h1 className='title'>Testimoni</h1>
          <p className='description'>Berbagai review positif dari para pelanggan kami</p>
        </div>
        <Swiper
          slidesPerView={"auto"}
          spaceBetween={30}
          centeredSlides={true}
          loop={true}
          navigation={true}

          modules={[Navigation]}
          className="mySwiper"
          breakpoints={{
            660: {
              slidesPerView: 1,

            },
            1920: {
              slidesPerView: 3,
            },
          }}

        >

          <SwiperSlide className="swiper-slide" key="2" >
            <div className="main-content" >
              <div className="row">
                <div className="align-items-center col-md-3 d-flex justify-content-center">
                  <img
                    src='/images/person/person1.png'
                    alt=""
                    className="img-fluid rounded-circle"
                    style={{ width: "80px", height: "80px" }}
                  />
                </div>
                <div className="col-md-9">
                  <div className="start">
                    <img src='/images/star.svg' alt="star" />
                    <img src='/images/star.svg' alt="star" />
                    <img src='/images/star.svg' alt="star" />
                  </div>
                  <div className="desc" >
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic distinctio ratione cumque placeat, mollitia culpa? Corporis repellendus saepe ipsam maiores odit inventore quo deleniti amet!</p>
                  </div>
                  <div className="fullname">
                    <p>
                      Meli, 21, Bandung
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide className="swiper-slide" key="3" >
            <div className="main-content" >
              <div className="row">
                <div className="align-items-center col-md-3 d-flex justify-content-center">
                  <img
                    src='/images/person/person2.png'
                    alt=""
                    className="img-fluid rounded-circle"
                    style={{ width: "80px", height: "80px" }}
                  />
                </div>
                <div className="col-md-9">
                  <div className="start">
                    <img src='/images/star.svg' alt="star" />
                    <img src='/images/star.svg' alt="star" />
                  </div>
                  <div className="desc" >
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic distinctio ratione cumque placeat, mollitia culpa? Corporis repellendus saepe ipsam maiores odit inventore quo deleniti amet!</p>
                  </div>
                  <div className="fullname">
                    <p>
                      Jaka, 21, Bandung
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide className="swiper-slide" key="4" >
            <div className="main-content" >
              <div className="row">
                <div className="align-items-center col-md-3 d-flex justify-content-center">
                  <img
                    src='/images/person/person3.png'
                    alt=""
                    className="img-fluid rounded-circle"
                    style={{ width: "80px", height: "80px" }}
                  />
                </div>
                <div className="col-md-9">
                  <div className="start">
                    <img src='/images/star.svg' alt="star" />
                    <img src='/images/star.svg' alt="star" />
                  </div>
                  <div className="desc" >
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic distinctio ratione cumque placeat, mollitia culpa? Corporis repellendus saepe ipsam maiores odit inventore quo deleniti amet!</p>
                  </div>
                  <div className="fullname">
                    <p>
                      Udin, 21, Bandung
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide className="swiper-slide" key="5" >
            <div className="main-content" >
              <div className="row">
                <div className="align-items-center col-md-3 d-flex justify-content-center">
                  <img
                    src='/images/person/person4.png'
                    alt=""
                    className="img-fluid rounded-circle"
                    style={{ width: "80px", height: "80px" }}
                  />
                </div>
                <div className="col-md-9">
                  <div className="start">
                    <img src='/images/star.svg' alt="star" />
                    <img src='/images/star.svg' alt="star" />
                    <img src='/images/star.svg' alt="star" />
                    <img src='/images/star.svg' alt="star" />
                  </div>
                  <div className="desc" >
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic distinctio ratione cumque placeat, mollitia culpa? Corporis repellendus saepe ipsam maiores odit inventore quo deleniti amet!</p>
                  </div>
                  <div className="fullname">
                    <p>
                      Yuli, 21, Bandung
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide className="swiper-slide" key="5" >
            <div className="main-content" >
              <div className="row">
                <div className="align-items-center col-md-3 d-flex justify-content-center">
                  <img
                    src='/images/person/person5.png'
                    alt=""
                    className="img-fluid rounded-circle"
                    style={{ width: "80px", height: "80px" }}
                  />
                </div>
                <div className="col-md-9">
                  <div className="start">
                    <img src='/images/star.svg' alt="star" />
                    <img src='/images/star.svg' alt="star" />
                    <img src='/images/star.svg' alt="star" />
                    <img src='/images/star.svg' alt="star" />
                  </div>
                  <div className="desc" >
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic distinctio ratione cumque placeat, mollitia culpa? Corporis repellendus saepe ipsam maiores odit inventore quo deleniti amet!</p>
                  </div>
                  <div className="fullname">
                    <p>
                      Asep, 21, Bandung
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide className="swiper-slide" key="5" >
            <div className="main-content" >
              <div className="row">
                <div className="align-items-center col-md-3 d-flex justify-content-center">
                  <img
                    src='/images/person/person6.png'
                    alt=""
                    className="img-fluid rounded-circle"
                    style={{ width: "80px", height: "80px" }}
                  />
                </div>
                <div className="col-md-9">
                  <div className="start">
                    <img src='/images/star.svg' alt="star" />
                    <img src='/images/star.svg' alt="star" />
                    <img src='/images/star.svg' alt="star" />
                    <img src='/images/star.svg' alt="star" />
                  </div>
                  <div className="desc" >
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic distinctio ratione cumque placeat, mollitia culpa? Corporis repellendus saepe ipsam maiores odit inventore quo deleniti amet!</p>
                  </div>
                  <div className="fullname">
                    <p>
                      Seni, 21, Bandung
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>

        </Swiper>


        </div>
    )
  }
}


export default Testimoni;
