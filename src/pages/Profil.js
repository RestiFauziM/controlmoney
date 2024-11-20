import React, { useState } from 'react';

function Profil() {
  const [profileVisible, setProfileVisible] = useState(true);
  const [editProfileVisible, setEditProfileVisible] = useState(false);

  const handleClick = (section) => {
    if (section === 'Edit Profil Pengguna') {
      setProfileVisible(false);
      setEditProfileVisible(true);
    } else {
      alert(`Menu ${section} dipilih`);
    }
  };

  const togglePassword = () => {
    const passwordField = document.getElementById('password');
    passwordField.type = passwordField.type === 'password' ? 'text' : 'password';
  };

  return (
    <>
      {profileVisible && (
        <section id="profil">
          <div className="profil-container">
            <div className="containerprofil">
              <div className="profile">
                <div className="avatar">
                  <div className="profile-pic"></div>
                  <div className="edit-iconprofil">✏️</div>
                </div>
                <h2>Sigma Coders</h2>
                <p>sigmacoders@gmail.com | +62 812345678</p>
              </div>
              <div className="menu">
                <div className="menu-item" onClick={() => handleClick('Edit Profil Pengguna')}>
                  <span>✏️ Edit profil pengguna</span>
                  <span className="arrow">❯</span>
                </div>
                <div className="menu-item" onClick={() => handleClick('Notifikasi')}>
                  <span>🔔 Notifikasi</span>
                  <span className="arrow">❯</span>
                </div>
                <div className="menu-item" onClick={() => handleClick('Bahasa')}>
                  <span>🌐 Bahasa</span>
                  <span className="arrow">❯</span>
                </div>
                <div className="menu-item" onClick={() => handleClick('Hubungi Kami')}>
                  <span>📞 Hubungi kami</span>
                  <span className="arrow">❯</span>
                </div>
                <div className="menu-item" onClick={() => handleClick('Privasi & Keamanan')}>
                  <span>🔒 Privasi & keamanan</span>
                  <span className="arrow">❯</span>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}
      
      {editProfileVisible && (
        <section id="editProfile">
          <div className="containerprofiledit">
            <div className="profile-header">
              <div className="profile-pic"></div>
              <h1 className="group-name">kelompok6b</h1>
            </div>

            <form className="profile-form">
              <div className="form-groupprofil">
                <label htmlFor="account-name">Nama Akun</label>
                <div className="input-wrapper">
                  <input type="text" id="account-name" placeholder="Masukkan Nama Akun" />
                  <span className="edit-icon">✎</span>
                </div>
              </div>
              <div className="form-groupprofil">
                <label htmlFor="email">Email</label>
                <div className="input-wrapper">
                  <input type="email" id="email" placeholder="Masukkan Email" />
                  <span className="edit-icon">✎</span>
                </div>
              </div>
              <div className="form-groupprofil">
                <label htmlFor="phone">No Telepon</label>
                <div className="input-wrapper">
                  <input type="tel" id="phone" placeholder="Masukkan No Telepon" />
                  <span className="edit-icon">✎</span>
                </div>
              </div>
              <div className="form-groupprofil">
                <label htmlFor="password">Kata Sandi</label>
                <div className="input-wrapper">
                  <input type="password" id="password" placeholder="Masukkan Kata Sandi" />
                  <i className="fa-solid fa-eye-slash toggle-password" onClick={togglePassword}></i>
                  <span className="edit-icon">✎</span>
                </div>
              </div>

              <div className="form-buttonsprofil">
                <button type="button" className="cancel-button" onClick={() => setEditProfileVisible(false)}>Batal</button>
                <button type="submit" className="save-button">Simpan</button>
              </div>
            </form>
          </div>
        </section>
      )}
    </>
  );
}

export default Profil;
