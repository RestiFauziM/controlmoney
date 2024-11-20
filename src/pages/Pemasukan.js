import React from 'react'

function Pemasukan() {
  return (
    <section id="pemasukan" style={{ display: 'none' }}>
    <div className="inputkelola-header-and-form">
      <h2>Pemasukan</h2>
      <div className="inputkelola-form-and-illustration">
        <form id="expense-form">
          <div className="inputkelola-form-group">
            <label className="inputkelola-date-label" htmlFor="date">Tanggal</label>
            <input type="date" id="date" placeholder="Tanggal-Bulan-Tahun" />
          </div>
          <div className="inputkelola-form-group">
            <label className="inputkelola-wallet-name-label" htmlFor="walletName">Nama Dompet</label>
            <input type="text" id="walletName" placeholder="Masukkan nama dompet anda" />
          </div>
          <div className="inputkelola-form-group">
            <label className="inputkelola-needs-label" htmlFor="source">Asal Uang</label>
            <input type="text" id="source" placeholder="Asal Pendapatan Anda" />
          </div>
          <div className="inputkelola-form-group">
            <label className="inputkelola-amount-label" htmlFor="amount">Nominal</label>
            <input type="text" id="amount" placeholder="Rp." />
          </div>
          <div className="inputkelola-form-group inputkelola-full-width">
            <label className="inputkelola-notes-label" htmlFor="notes">Catatan</label>
            <textarea id="notes" placeholder="Masukkan catatan tambahan"></textarea>
            <button className="btn-kelola" type="button">Simpan</button>
          </div>
        </form>
        <div className="inputkelola-illustration">
          <img src="/assets/images/computer.png" alt="Smartphone" />
        </div>
      </div>
    </div>
  </section>
  )
}

export default Pemasukan
