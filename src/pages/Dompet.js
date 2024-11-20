import React, { useState } from 'react';

function Dompet() {
  const [saldoBCA, setSaldoBCA] = useState(0);
  const [saldoBRI, setSaldoBRI] = useState(0);
  const [saldoDANA, setSaldoDANA] = useState(0);
  const [saldoGopay, setSaldoGopay] = useState(0);
  const [saldoShopeePay, setSaldoShopeePay] = useState(0);
  const [saldoTunai, setSaldoTunai] = useState(0);

  const [isFormVisible, setIsFormVisible] = useState(false);
  const [selectedWallet, setSelectedWallet] = useState('');
  const [newAmount, setNewAmount] = useState('');

  const bukaFormDompet = (wallet) => {
    setSelectedWallet(wallet);
    setIsFormVisible(true);
  };

  const tutupForm = () => {
    setIsFormVisible(false);
    setNewAmount('');
  };

  const perbaruiDompet = () => {
    if (selectedWallet && newAmount) {
      switch (selectedWallet) {
        case 'BCA':
          setSaldoBCA(saldoBCA + parseInt(newAmount));
          break;
        case 'BRI':
          setSaldoBRI(saldoBRI + parseInt(newAmount));
          break;
        case 'DANA':
          setSaldoDANA(saldoDANA + parseInt(newAmount));
          break;
        case 'Gopay':
          setSaldoGopay(saldoGopay + parseInt(newAmount));
          break;
        case 'ShopeePay':
          setSaldoShopeePay(saldoShopeePay + parseInt(newAmount));
          break;
        case 'Tunai':
          setSaldoTunai(saldoTunai + parseInt(newAmount));
          break;
        default:
          break;
      }
      tutupForm();
    } else {
      alert('Masukkan jumlah yang valid');
    }
  };

  return (
    <section id="tab1" style={{ display: isFormVisible ? 'none' : 'block' }}>
      <div className="containersaldo">
        <div className="saldo">
          <h2>Saldo Anda</h2>
          <p id="saldo-total">Rp. {saldoBCA + saldoBRI + saldoDANA + saldoGopay + saldoShopeePay + saldoTunai}</p>
        </div>
        <div className="daftar-dompet" id="daftar-dompet">
          <div className="item-dompet" onClick={() => bukaFormDompet('BCA')}>
            <span>BCA</span>
            <span id="saldo-BCA">Rp. {saldoBCA}</span>
            <i className="fas fa-chevron-right"></i>
          </div>
          <div className="item-dompet" onClick={() => bukaFormDompet('BRI')}>
            <span>BRI</span>
            <span id="saldo-BRI">Rp. {saldoBRI}</span>
            <i className="fas fa-chevron-right"></i>
          </div>
          <div className="item-dompet" onClick={() => bukaFormDompet('DANA')}>
            <span>DANA</span>
            <span id="saldo-DANA">Rp. {saldoDANA}</span>
            <i className="fas fa-chevron-right"></i>
          </div>
          <div className="item-dompet" onClick={() => bukaFormDompet('Gopay')}>
            <span>Gopay</span>
            <span id="saldo-Gopay">Rp. {saldoGopay}</span>
            <i className="fas fa-chevron-right"></i>
          </div>
          <div className="item-dompet" onClick={() => bukaFormDompet('ShopeePay')}>
            <span>ShopeePay</span>
            <span id="saldo-ShopeePay">Rp. {saldoShopeePay}</span>
            <i className="fas fa-chevron-right"></i>
          </div>
          <div className="item-dompet" onClick={() => bukaFormDompet('Tunai')}>
            <span>Tunai</span>
            <span id="saldo-Tunai">Rp. {saldoTunai}</span>
            <i className="fas fa-chevron-right"></i>
          </div>
        </div>
        <div className="tambah-dompet" onClick={() => bukaFormDompet('')}>
          <i className="fas fa-plus"></i>
        </div>
      </div>

      {isFormVisible && (
        <div className="wadah-form" id="wadah-form">
          <div className="form">
            <h3>Nama Dompet: {selectedWallet}</h3>
            <input
              id="nama-dompet"
              type="text"
              placeholder="Masukkan nama dompet"
              disabled
              value={selectedWallet}
            />
            <h3>Nominal</h3>
            <input
              id="jumlah-dompet"
              type="text"
              placeholder="Rp."
              value={newAmount}
              onChange={(e) => setNewAmount(e.target.value)}
            />
            <button onClick={perbaruiDompet}>Tambahkan</button>
            <button onClick={tutupForm}>Batal</button>
          </div>
        </div>
      )}
    </section>
  );
}

export default Dompet;
