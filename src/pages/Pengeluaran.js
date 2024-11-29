import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; 

function Pengeluaran() {
  const [tanggal, setTanggal] = useState('');
  const [namaDompet, setNamaDompet] = useState('');
  const [kebutuhan, setKebutuhan] = useState('');
  const [nominal, setNominal] = useState('');
  const [catatan, setCatatan] = useState('');
  
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    const data = {
      date: tanggal,
      walletName: namaDompet,
      source: kebutuhan,
      amount: nominal,
      notes: catatan,
    };

    try {
      const response = await fetch('http://localhost:8081/add-expense', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      const result = await response.json();

      if (result.Message === "Expense added successfully") {
        // Tampilkan alert sukses
        alert("Pengeluaran berhasil disimpan!");

        // Redirect ke halaman grafik setelah berhasil
        navigate('/grafik');
      } else {
        console.log('Error: ', result);
      }
    } catch (error) {
      console.error('Error: ', error);
    }
  };

  return (
    <section id="pengeluaran" style={{ display: 'block' }}>
      <div className="inputkelola-header-and-form">
        <h2>Pengeluaran</h2>
        <div className="inputkelola-form-and-illustration">
          <form id="expense-form" onSubmit={handleSubmit}>
            <div className="inputkelola-form-group">
              <label className="inputkelola-date-label">Tanggal</label>
              <input
                type="date"
                placeholder="Tanggal-Bulan-Tahun"
                value={tanggal}
                onChange={(e) => setTanggal(e.target.value)}
                required
              />
            </div>
            <div className="inputkelola-form-group">
              <label className="inputkelola-wallet-name-label">Nama Dompet</label>
              <input
                type="text"
                placeholder="Masukkan nama dompet anda"
                value={namaDompet}
                onChange={(e) => setNamaDompet(e.target.value)}
                required
              />
            </div>
            <div className="inputkelola-form-group">
              <label className="inputkelola-needs-label">Kebutuhan</label>
              <input
                type="text"
                placeholder="Tulis kebutuhan anda"
                value={kebutuhan}
                onChange={(e) => setKebutuhan(e.target.value)}
                required
              />
            </div>
            <div className="inputkelola-form-group">
              <label className="inputkelola-amount-label">Nominal</label>
              <input
                type="number"
                placeholder="Rp."
                value={nominal}
                onChange={(e) => setNominal(e.target.value)}
                required
              />
            </div>
            <div className="inputkelola-form-group inputkelola-full-width">
              <label className="inputkelola-notes-label">Catatan</label>
              <textarea
                placeholder="Masukkan catatan tambahan"
                rows="4"
                value={catatan}
                onChange={(e) => setCatatan(e.target.value)}
                required
              ></textarea>
              <button className="btn-kelola" type="submit">
                Simpan
              </button>
            </div>
          </form>
          <div className="inputkelola-illustration">
            <img src="/assets/images/computer.png" alt="Ilustrasi" />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Pengeluaran;
