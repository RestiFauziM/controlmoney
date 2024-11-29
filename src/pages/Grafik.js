import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Bar } from 'react-chartjs-2';
import axios from 'axios'; // Ensure axios is imported
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';

// Registrasi komponen
ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

function Grafik() {
  const [isPopupVisible, setIsPopupVisible] = useState(false);
  const navigate = useNavigate();

  const [transaksiPemasukan, setTransaksiPemasukan] = useState([]);
  const [transaksiPengeluaran, setTransaksiPengeluaran] = useState([]);

  // Mengambil data pemasukan dan pengeluaran
  useEffect(() => {
    // Mengambil data pemasukan dari API
    axios.get('http://localhost:8081/income')
      .then(response => {
        setTransaksiPemasukan(response.data.Data);  // Menyimpan data pemasukan ke state
      })
      .catch(error => {
        console.error("There was an error fetching the pemasukan data:", error);
      });

    // Mengambil data pengeluaran dari API
    axios.get('http://localhost:8081/expenses')
  .then(response => {
    console.log(response.data);  // Pastikan data ada di sini
    setTransaksiPengeluaran(response.data.Data);  // Menyimpan data pengeluaran ke state
  })
  .catch(error => {
    console.error("There was an error fetching the pengeluaran data:", error);
  });

  }, []);

  // Menghitung total pemasukan dan pengeluaran
  const totalPemasukan = transaksiPemasukan.reduce((total, item) => total + item.amount, 0);
  const totalPengeluaran = transaksiPengeluaran.reduce((total, item) => total + item.amount, 0);

  const togglePopup = () => {
    setIsPopupVisible(!isPopupVisible);
  };

  const handleFormSelection = (type) => {
    setIsPopupVisible(false);
    if (type === 'Pemasukan') {
      navigate('/pemasukan');
    } else if (type === 'Pengeluaran') {
      navigate('/pengeluaran');
    }
  };

  const pemasukanData = {
    labels: ['1-6', '7-13', '14-20', '21-27', '28-31'],
    datasets: [
      {
        label: 'Pemasukan Mingguan',
        data: [totalPemasukan, 0, 0, 0, 0], // Gunakan data totalPemasukan
        backgroundColor: '#4caf50',
        barThickness: 20,
      },
    ],
  };

  const pengeluaranData = {
    labels: ['1-6', '7-13', '14-20', '21-27', '28-31'],
    datasets: [
      {
        label: 'Pengeluaran Mingguan',
        data: [totalPengeluaran, 0, 0, 0, 0, 0],
        backgroundColor: '#f44336',
        barThickness: 20,
      },
    ],
  };

  const budgetData = {
    labels: ['Pemasukan', 'Pengeluaran'],
    datasets: [
      {
        label: 'Sisa Budget',
        data: [totalPemasukan, totalPengeluaran], // Gunakan data pemasukan dan pengeluaran
        backgroundColor: ['#4caf50', '#f44336'],
        barThickness: 20,
      },
    ],
  };

  const chartOptions = {
    responsive: true,
    maintainAspectRatio: false,
    layout: {
      padding: {
        top: 20,   // Menambahkan jarak padding di atas grafik
        bottom: 20, // Menambahkan jarak padding di bawah grafik jika diperlukan
        left: 10,
        right: 10,
      },
    },
    scales: {
      x: {
        beginAtZero: true,
        grid: {
          display: false,
        },
        ticks: {
          font: {
            size: 17,        // Mengatur ukuran font lebih besar
          },
          color: '#000000', // Mengubah warna label sumbu X menjadi hitam
        },
      },
      y: {
        beginAtZero: true,
        grid: {
          drawBorder: false,
        },
        ticks: {
          display: false,
          font: {
            size: 17,        // Mengatur ukuran font lebih besar
          },
          color: '#000000', // Mengubah warna label sumbu Y menjadi hitam
        },
      },
    },
    plugins: {
      legend: {
        display: false,
        labels: {
          font: {
            size: 17,        // Mengatur ukuran font lebih besar
          },
          color: '#000000', // Mengubah warna label legenda menjadi hitam
        },
      },
    },
  };  

  return (
    <section id="kelolaGrafik" style={{ display: 'block' }}>
      <div className="kelola-summary">
        <div className="kelola-month-nav">
          <button id="kelola-prevMonth" className="kelola-navButton">←</button>
          <h2 id="kelola-bulanTahun">Oktober 2024</h2>
          <button id="kelola-nextMonth" className="kelola-navButton">→</button>
        </div>
        <p>Total Pengeluaran</p>
        <p>Rp. {totalPengeluaran.toLocaleString()}</p>
        <p>Sisa Budget Terpantau Aman!</p>
      </div>

      <div className="kelola-charts">
        <div className="kelola-chart-card">
          <p>Grafik Pemasukan Mingguan</p>
          <Bar data={pemasukanData} options={chartOptions} />
        </div>
        <div className="kelola-chart-card">
          <p>Sisa Budget</p>
          <Bar data={budgetData} options={chartOptions} />
        </div>
        <div className="kelola-chart-card">
          <p>Grafik Pengeluaran Mingguan</p>
          <Bar data={pengeluaranData} options={chartOptions} />
        </div>
      </div>

      <section className="kelola-catat-transaksi">
        <hr className="kelola-line-left" />
        <p>Catat Transaksi</p>
        <hr className="kelola-line-right" />
      </section>

      <div className="container">
      {/* Menampilkan data transaksi Pemasukan */}
      {Array.isArray(transaksiPemasukan) && transaksiPemasukan.map((item, index) => (
        <div className="item" key={index}>
          <span>{item.source}</span>
          <span className="income">+Rp. {item.amount.toLocaleString()}</span>
        </div>
      ))}

      {/* Menampilkan data transaksi Pengeluaran */}
      {Array.isArray(transaksiPengeluaran) && transaksiPengeluaran.map((item, index) => (
        <div className="item" key={index}>
          <span>{item.source}</span>
          <span className="expenses">-Rp. {item.amount.toLocaleString()}</span>
        </div>
        ))}

        <div className="kelola-button-container">
          <button id="kelola-addRecordBtn" onClick={togglePopup}>+ TAMBAH CATATAN BARU</button>
        </div>
      </div>

      <div className="kelola-rekap-container">
        <Link to="/rekap" className="kelola-rekap-button">
          Cek rekap keuanganmu
        </Link>
      </div>

      {isPopupVisible && (
        <div className="grafik-popup-overlay">
          <div className="grafik-popup">
            <button onClick={togglePopup}>&times;</button>
            <p id="kelola-pemasukanBtn" onClick={() => handleFormSelection('Pemasukan')}>Pemasukan</p>
            <hr />
            <p id="kelola-pengeluaranBtn" onClick={() => handleFormSelection('Pengeluaran')}>Pengeluaran</p>
          </div>
        </div>
      )}
    </section>
  );
}

export default Grafik;
