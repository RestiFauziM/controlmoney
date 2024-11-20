import React, { useState } from 'react';

function Hubungi() {
  const [formData, setFormData] = useState({
    email: '',
    username: '',
    phone: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Formulir berhasil dikirim!');
  };

  return (
    <section id="hubungiKami">
      <div className="contact-form">
        <div>
          <h2>HUBUNGI KAMI</h2>
          <form id="contactForm" onSubmit={handleSubmit}>
            <div>
            <label htmlFor="email">Email</label>
            <input 
              type="text" 
              id="email" 
              name="email" 
              placeholder="Masukkan Email Pengguna" 
              required
              value={formData.email}
              onChange={handleChange}
            />
              <div>
                <label htmlFor="username">Nama Pengguna</label>
                <input 
                  type="text" 
                  id="username" 
                  name="username" 
                  className="form-control custom-input" 
                  placeholder="Masukkan nama pengguna"
                  required
                  value={formData.username}
                  onChange={handleChange}
                />
              </div>
              <div>
                <label htmlFor="phone">Nomor Telepon</label>
                <input 
                  type="text" 
                  id="phone" 
                  name="phone" 
                  className="form-control custom-input" 
                  placeholder="Masukkan No.telp" 
                  required
                  value={formData.phone}
                  onChange={handleChange}
                />
              </div>
              <div>
                <label htmlFor="message">Masukkan pesan</label>
                <textarea 
                  id="message" 
                  name="message" 
                  placeholder="Masukkan pesan" 
                  required
                  value={formData.message}
                  onChange={handleChange}
                ></textarea>
                <button type="submit" id="submitButton">Kirim</button>
              </div>
            </div>
          </form>
        </div>
        <div className="contact-info">
          <img src="/assets/images/Logo fix.png" alt="Control Money logo" />
          <p className="p-large">
            Terima kasih telah mengunjungi Control Money! Kami siap membantu Anda dalam mengelola
            keuangan dan memberikan solusi terbaik untuk kebutuhan finansial Anda. Jika Anda memiliki pertanyaan atau
            membutuhkan dukungan lebih lanjut, jangan ragu untuk menghubungi kami melalui formulir berikut. Kami akan
            menghubungi Anda sesegera mungkin.
          </p>
          <p className="p-small">
            Kami sangat menjaga privasi dan keamanan data pribadi Anda. Setiap informasi yang Anda
            bagikan dengan kami akan dilindungi sesuai dengan kebijakan privasi kami dan standar keamanan terbaik. Kami
            berkomitmen untuk menjaga kerahasiaan informasi Anda.
          </p>
        </div>
      </div>
    </section>
  );
}

export default Hubungi;
