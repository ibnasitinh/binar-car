import './../../style/list.css';
import axios from 'axios';
import React, { Component, Fragment, useEffect, useState } from 'react';
import Banner from '../../component/Banner';
import Filter from '../../component/Filter';
import CarList from '../../component/CarList';
import config from "../../config/index"


export default function List() {

  const [dataCar, setDataCar] = useState({
    cars: []
  });


  useEffect(() => {
    getCars();
  }, []);

  const apiUrl = config.apiBaseUrl
  const getCars = async (params = {}) => {
    const response = await axios.get(
      apiUrl + "/customer/v2/car", {
      params
    }
    );
    setDataCar(response.data);
  };

  const onFilter = (payload) => {
    getCars(payload)
  }

  return (
    <Fragment>
      <Banner></Banner>
      <Filter></Filter>
      <CarList data={dataCar}></CarList>
    </Fragment>
  )
}

// class Find extends Component {
//   render () {
//     return (
//       <Fragment>
//         <Banner></Banner>
//         <Filter></Filter>
//         <CarList></CarList>
//       </Fragment>
//     )
//   }
// }

// export default Find;
