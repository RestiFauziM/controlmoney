import React, { useContext, useState } from 'react';
import { UserContext } from '../context/UserContext';
import axios from 'axios';

function Profil() {
  const { user, setUser } = useContext(UserContext); // Ambil data user dan setUser dari konteks
  const [profileVisible, setProfileVisible] = useState(true);
  const [editProfileVisible, setEditProfileVisible] = useState(false);
  const [formData, setFormData] = useState({
    username: user?.username || '', // Ganti fullName dengan username
    email: user?.email || '',
    password: '',
  });
  const [isPasswordVisible, setIsPasswordVisible] = useState(false); // State untuk toggle password visibility

  const handleClick = (section) => {
    if (section === 'Edit Profil Pengguna') {
      setProfileVisible(false);
      setEditProfileVisible(true);
    } else {
      alert(`Menu ${section} dipilih`);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleProfileUpdate = async (e) => {
    e.preventDefault();
    try {
      const updatedUser = {
        userId: user.id,
        ...formData
      };

      const res = await axios.put('http://localhost:8081/update-profile', updatedUser);
      if (res.data.Message === "Profile updated successfully") {
        alert("Profil berhasil diperbarui");
        setUser({
          ...user,
          username: formData.username, // Update username, bukan name
          email: formData.email,
        });
        setEditProfileVisible(false);
        setProfileVisible(true);
      }
    } catch (err) {
      console.error(err);
      alert("Terjadi kesalahan saat memperbarui profil.");
    }
  };

  const togglePasswordVisibility = () => {
    setIsPasswordVisible(!isPasswordVisible); // Toggle visibility
  };

  if (!user) {
    return (
      <div style={{ textAlign: 'center', padding: '20px' }}>
        <h2>Silakan login terlebih dahulu.</h2>
      </div>
    );
  }

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
                <h1>{user.username}</h1> {/* Tampilkan username */}
                <p>{user.email}</p>
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
          <div className="kontainerProfil">
            <div className="headerProfil">
              <div className="fotoProfil"></div>
            </div>
            <form className="formProfil" onSubmit={handleProfileUpdate}>
              <div className="formGrupProfil">
                <label htmlFor="username">Nama Akun</label>
                <div className="inputWrapper">
                  <input
                    type="text"
                    id="username"
                    name="username"
                    placeholder="Masukkan Nama Akun"
                    value={formData.username}
                    onChange={handleChange}
                  />
                  <span className="ikonEdit">✎</span>
                </div>
              </div>
              <div className="formGrupProfil">
                <label htmlFor="email">Email</label>
                <div className="inputWrapper">
                  <input
                    type="email"
                    id="email"
                    name="email"
                    placeholder="Masukkan Email"
                    value={formData.email}
                    onChange={handleChange}
                  />
                  <span className="ikonEdit">✎</span>
                </div>
              </div>
              <div className="formGrupProfil">
                <label htmlFor="password">Kata Sandi</label>
                <div className="inputWrapper">
                  <input
                    type={isPasswordVisible ? 'text' : 'password'}
                    id="password"
                    name="password"
                    placeholder="Masukkan Kata Sandi"
                    value={formData.password}
                    onChange={handleChange}
                  />
                  <i
                    className={`fa-solid ${isPasswordVisible ? 'fa-eye' : 'fa-eye-slash'} toggle-password-profil`}
                    onClick={togglePasswordVisibility}
                    style={{ cursor: 'pointer' }}
                  ></i>
                </div>
              </div>
              <div className="tombolFormProfil">
                <button
                  type="button"
                  className="tombolBatal"
                  onClick={() => {
                    setEditProfileVisible(false);
                    setProfileVisible(true);
                  }}
                >
                  Batal
                </button>
                <button type="submit" className="tombolSimpan">
                  Simpan
                </button>
              </div>
            </form>
          </div>
        </section>
      )}
    </>
  );
}

export default Profil;
