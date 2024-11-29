import React, { useState } from 'react';
import { useUserContext } from '../context/UserContext'; 
import { useNavigate } from 'react-router-dom';

function Kelola() {
  const navigate = useNavigate();
  const [nominal, setNominal] = useState('');  
  const { totalPengeluaran, updateTotalPengeluaran } = useUserContext(); 

  const handleSimpanClick = async () => {
    const parsedNominal = parseInt(nominal);
    if (isNaN(parsedNominal)) {
      alert("Masukkan nominal yang valid");
      return;
    }

    try {
      const response = await fetch('http://localhost:8081/add-budget', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ nominal: parsedNominal }),  
      });

      if (response.ok) {
        const data = await response.json();
        console.log('Data successfully saved:', data);

        updateTotalPengeluaran(parsedNominal);

        navigate('/grafik');
      } else {
        console.error('Failed to save data');
      }
    } catch (error) {
      console.error('Error occurred:', error);
    }
  };

  return (
    <section id="kelola" style={{ display: 'block' }}>
      <div className="kelola-hero-section">
        <h2>Langkah awal dalam mengelola keuangan yang bijak adalah dengan menentukan anggaran secara terencana</h2>
      </div>
      <div className="kelola-image-container">
        <img src="/assets/images/card Homepage.png" alt="Card Homepage" className="kelola-card-homepage" />
      </div>
      <div className="kelola-form-container">
        <h3 className="kelola-form-title">ATUR BUDGET BULANAN</h3>
        <label htmlFor="nominal" className="kelola-label">Nominal</label>
        <div className="kelola-input-group">
          <span>Rp. </span>
          <input
            type="number"
            id="nominal"
            placeholder=""
            value={nominal}  
            onChange={(e) => setNominal(e.target.value)}  
          />
        </div>
        <button className="kelola-button" onClick={handleSimpanClick}>Simpan</button>
      </div>
    </section>
  );
}

export default Kelola;
