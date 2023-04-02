import './../../style/home.css';
import React, { Component, Fragment } from 'react';
import Banner from '../../component/Banner';
import Service from '../../component/Service';
import Faq from '../../component/Faq';
import Whyus from '../../component/Whyus';
import Testimoni from '../../component/Testimoni';
import ContentBanner from '../../component/ContentBanner';


class Home extends Component {
  render () {
    return (
      <Fragment>
        <Banner></Banner>
        <Service></Service>
        <Whyus></Whyus>
        <Testimoni></Testimoni>
        <ContentBanner></ContentBanner>
        <Faq></Faq>
      </Fragment>
    )
  }
}

export default Home;
