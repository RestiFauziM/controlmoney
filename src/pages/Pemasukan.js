import React from 'react';
import { useNavigate } from 'react-router-dom';

function Pemasukan() {
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = {
      date: e.target.date.value,
      walletName: e.target.walletName.value,
      source: e.target.source.value,
      amount: e.target.amount.value,
      notes: e.target.notes.value,
    };

    try {
      const response = await fetch('http://localhost:8081/add-income', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        alert('Pemasukan berhasil disimpan!');
        navigate('/grafik'); // Redirect ke halaman grafik
      } else {
        alert('Gagal menyimpan pemasukan.');
      }
    } catch (error) {
      console.error('Error submitting income:', error);
    }
  };

  return (
    <section id="pemasukan" style={{ display: 'block' }}>
      <div className="inputkelola-header-and-form">
        <h2>Pemasukan</h2>
        <div className="inputkelola-form-and-illustration">
          <form id="income-form" onSubmit={handleSubmit}>
            <div className="inputkelola-form-group">
              <label className="inputkelola-date-label" htmlFor="date">Tanggal</label>
              <input type="date" id="date" placeholder="Tanggal-Bulan-Tahun" required />
            </div>
            <div className="inputkelola-form-group">
              <label className="inputkelola-wallet-name-label" htmlFor="walletName">Nama Dompet</label>
              <input
                type="text"
                id="walletName"
                placeholder="Masukkan nama dompet anda"
                required
              />
            </div>
            <div className="inputkelola-form-group">
              <label className="inputkelola-needs-label" htmlFor="source">Asal Uang</label>
              <input
                type="text"
                id="source"
                placeholder="Asal Pendapatan Anda"
                required
              />
            </div>
            <div className="inputkelola-form-group">
              <label className="inputkelola-amount-label" htmlFor="amount">Nominal</label>
              <input
                type="text"
                id="amount"
                placeholder="Rp."
                required
              />
            </div>
            <div className="inputkelola-form-group inputkelola-full-width">
              <label className="inputkelola-notes-label" htmlFor="notes">Catatan</label>
              <textarea
                id="notes"
                placeholder="Masukkan catatan tambahan"
                rows="4"
                required
              ></textarea>
              <button className="btn-kelola" type="submit">
                Simpan
              </button>
            </div>
          </form>
          <div className="inputkelola-illustration">
            <img src="/assets/images/computer.png" alt="Smartphone" />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Pemasukan;
