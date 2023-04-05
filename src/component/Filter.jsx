import React, { useState, useEffect } from "react";

export default function Filter() {


  return (
    <>
    <div className="container seacrh-car">
      <form className="table-option">
        <div className="grid-input">
          <label htmlFor="inputEmail4" className="form-label">
            Nama Mobil
          </label>
          <input
            type="nama mobil"
            className="form-control"
            id="inputNamaMobil"
            placeholder="ketik nama/type mobil"
          />
        </div>
        <div className="grid-input">
          <label htmlFor="inputState" className="form-label">
            Category
          </label>
          <select id="inputState" className="form-select">
            <option value="">Masukan Kapasitas Mobil</option>
            <option value="small">2 - 4 orang</option>
            <option value="medium">4 - 6 orang</option>
            <option value="large">6 - 8 0rang</option>
          </select>
        </div>
        <div className="grid-input">
          <label htmlFor="inputState" className="form-label">
            Harga
          </label>
          <select id="inputState" className="form-select">
            <option value="">Masukan Harga Per Hari</option>
            <option value="300000">300000</option>
            <option value="500000">500000</option>
            <option value="600000">600000</option>
          </select>
        </div>
        <div className="grid-input">
          <label htmlFor="inputState" className="form-label">
            Status
          </label>
          <select id="inputState" className="form-select">
            <option value="">Pilih Status Mobil</option>
            <option value="free">free</option>
            <option value="disewa">disewa</option>
          </select>
        </div>

        <div className="grid-input btn-filter">
          <button type="submit" className="btn btn-flat">
            cari mobil
          </button>
        </div>
      </form>
      </div>
    </>
  );
}
