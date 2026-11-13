import { useState, useEffect } from 'react';
import './App.css';

function App() {
  // 1. State untuk menyimpan data dummy mahasiswa (minimal 5)
  const [students] = useState([
    {
      nim: '2022001',
      nama: 'Martin',
      noHp: '081239067390',
      email: 'Martin@email.com',
      alamat: 'Jl. Merdeka No. 21, Surabaya',
      prodi: 'Teknik Informatika',
      tahunMasuk: 2022,
    },
    {
      nim: '2024002',
      nama: 'James',
      noHp: '087645679901',
      email: 'james@email.com',
      alamat: 'Jl. Ketintang No. 45, Bandung',
      prodi: 'Sistem Informasi',
      tahunMasuk: 2024,
    },
    {
      nim: '2023003',
      nama: 'Juhoon',
      noHp: '083412389019',
      email: 'Juhoon@email.com',
      alamat: 'Jl. Diponegoro No. 12, Jakarta',
      prodi: 'Teknik Komputer',
      tahunMasuk: 2023,
    },
    {
      nim: '2024004',
      nama: 'Seonghyeon',
      noHp: '085678901234',
      email: 'seonghyeon@email.com',
      alamat: 'Jl. Malioboro No. 88, Yogyakarta',
      prodi: 'Ilmu Komputer',
      tahunMasuk: 2024,
    },
    {
      nim: '2025005',
      nama: 'Keonho',
      noHp: '087890123456',
      email: 'Keonho@email.com',
      alamat: 'Jl. Pahlawan No. 5, Malang',
      prodi: 'Teknik Informatika',
      tahunMasuk: 2025,
    },
  ]);

  // 2. State untuk menyimpan waktu saat ini
  const [currentTime, setCurrentTime] = useState(new Date());

  // 3. useEffect untuk menjalankan jam digital & cleanup
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    return () => {
      clearInterval(timer);
    };
  }, []);

  return (
    <div className="container">
      <header className="header">
        <h1>Student Management</h1>
        <h2>Daftar Data Mahasiswa</h2>
      </header>

      <div className="info-bar">
        <div className="badge">
          Total Mahasiswa: <strong>{students.length}</strong>
        </div>
        <div className="clock">
          Waktu Saat Ini:{' '}
          <strong>{currentTime.toLocaleTimeString('id-ID')} WIB</strong>
        </div>
      </div>

      <div className="table-wrapper">
        <table>
          <thead>
            <tr>
              <th>NIM</th>
              <th>Nama Mahasiswa</th>
              <th>No. Hp</th>
              <th>Email</th>
              <th>Alamat</th>
              <th>Program Studi</th>
              <th>Tahun Masuk</th>
            </tr>
          </thead>
          <tbody>
            {students.map((mhs) => (
              <tr key={mhs.nim}>
                <td>{mhs.nim}</td>
                <td>{mhs.nama}</td>
                <td>{mhs.noHp}</td>
                <td>{mhs.email}</td>
                <td>{mhs.alamat}</td>
                <td>{mhs.prodi}</td>
                <td>{mhs.tahunMasuk}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default App;