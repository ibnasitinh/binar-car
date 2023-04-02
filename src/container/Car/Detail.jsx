import React, { useEffect, useState } from 'react'
import Banner from '../../component/Banner'
import CarDetail from '../../component/CarDetail'
import { useParams } from 'react-router-dom';
import axios from 'axios';
import Navbar from "../../component/Navbar";
import Footer from "../../component/Footer";
import config from "../../config/index"
import Filter from '../../component/Filter';

export default function Detail() {
  const [dataCar, setDataCar ] = useState({})

  const { id } = useParams();

  useEffect(()=> { 
    const getCarById = async() => {
      const apiUrl = config.apiBaseUrl + `/customer/car/${id}`
      const response = await axios.get(apiUrl)
      setDataCar(response.data)
    }
    getCarById();  
  },[id])

  return (
    <>
      <Banner />
      <Filter></Filter>
      <CarDetail data={dataCar}/>
    </>
  )
}
