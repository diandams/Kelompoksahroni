import React from 'react'

export default function About() {
  return (
    <div className="about-container">
      <h2>Tentang Aplikasi</h2>
      <p>
        Aplikasi <strong>Student List</strong> ini merupakan proyek mini berbasis ReactJS yang 
        dibuat untuk memenuhi tugas pengenalan React. Tujuan dari aplikasi ini adalah 
        memberikan pemahaman mengenai konsep dasar React seperti penggunaan 
        <em>state</em>, <em>props</em>, <em>hooks</em> (<code>useState</code> dan <code>useEffect</code>), 
        serta penerapan <em>routing</em> menggunakan React Router.
      </p>

      <p>
        Fitur yang disediakan antara lain menampilkan daftar mahasiswa, menambah data baru, 
        dan menghapus data secara dinamis. Semua data dikelola secara lokal menggunakan 
        <em>state management</em> untuk melatih pemahaman konsep <em>data flow</em> di React.
      </p>

      <p>
        Aplikasi ini juga dirancang dengan antarmuka sederhana dan interaktif agar 
        memudahkan pengguna memahami alur kerja antar komponen React secara praktis.
      </p>

      <div className="about-footer">
        <p><strong>Dibuat oleh:</strong>Dian Damanik, Samuel Sitorus, Can Pasaribu, Gilbert Pasaribu</p>
        <p><strong>Program Studi:</strong> Teknologi Informasi - Universitas Mikroskil</p>
        <p><strong>Tahun:</strong> 2025</p>
      </div>
    </div>
  )
}
