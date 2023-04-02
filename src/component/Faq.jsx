import './../style/faq.css';
import React, { Component } from 'react';
import Accordion from 'react-bootstrap/Accordion';


class Faq extends Component {
    render () {
        return (
            <div className='container container-faq'>
                <div className='row'>
                    <div className='col-md-6'>
                        <h1 className='title'>Frequently Asked Question</h1>
                        <p className='description'>Lorem impsum dolor sit amet, consectetur adipiscing elit</p>
                    </div>
                    <div className='col-md-6'>
                        <Accordion className='padding-bottom-10'>
                            <Accordion.Item eventKey="0">
                                <Accordion.Header className='description'>Apa saja syarat yang dibutuhkan ?</Accordion.Header>
                                <Accordion.Body className='description'>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                                minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                                aliquip ex ea commodo consequat. Duis aute irure dolor in
                                reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                                pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                                culpa qui officia deserunt mollit anim id est laborum.
                                </Accordion.Body>
                            </Accordion.Item>
                        </Accordion>
                        <Accordion className='padding-bottom-10'>
                            <Accordion.Item eventKey="1">
                                <Accordion.Header className='description'>Berapa hari minimal sewa mobil lepas kunci ?</Accordion.Header>
                                <Accordion.Body className='description'>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                                minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                                aliquip ex ea commodo consequat. Duis aute irure dolor in
                                reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                                pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                                culpa qui officia deserunt mollit anim id est laborum.
                                </Accordion.Body>
                            </Accordion.Item>
                        </Accordion>
                        <Accordion className='padding-bottom-10'>
                            <Accordion.Item eventKey="2">
                                <Accordion.Header className='description'>Berapa hari sebelumnya sebaiknya booking sewa mobil ?</Accordion.Header>
                                <Accordion.Body className='description'>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                                minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                                aliquip ex ea commodo consequat. Duis aute irure dolor in
                                reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                                pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                                culpa qui officia deserunt mollit anim id est laborum.
                                </Accordion.Body>
                            </Accordion.Item>
                        </Accordion>
                        <Accordion className='padding-bottom-10'>
                            <Accordion.Item eventKey="3">
                                <Accordion.Header className='description'>Apakah ada biaya antar jemput ?</Accordion.Header>
                                <Accordion.Body className='description'>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                                minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                                aliquip ex ea commodo consequat. Duis aute irure dolor in
                                reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                                pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                                culpa qui officia deserunt mollit anim id est laborum.
                                </Accordion.Body>
                            </Accordion.Item>
                        </Accordion>
                        <Accordion className='padding-bottom-10'>
                            <Accordion.Item eventKey="4">
                                <Accordion.Header className='description'>Bagaimana jika terjadi kecelakaan ?</Accordion.Header>
                                <Accordion.Body className='description'>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                                minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                                aliquip ex ea commodo consequat. Duis aute irure dolor in
                                reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                                pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                                culpa qui officia deserunt mollit anim id est laborum.
                                </Accordion.Body>
                            </Accordion.Item>
                        </Accordion>
                    </div>
                </div>
            </div>
        )
    }
}

export default Faq;
