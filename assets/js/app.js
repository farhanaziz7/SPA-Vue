
// 1. Definisikan komponen Vue
// Komponen "Home" akan menampilkan halaman depan aplikasi
const Home = Vue.extend({ 
    template: '#home',
    data: function() {
      return {
        judul: 'Vue x Bootstrap',
        konten: 'Frontend Framework',
      }
    }
  });
  
  var data_job = {
    keywordss: '',
    job: [
      {perusahaan: 'PT. FREEDOM SUKSES MAKMUR', position: 'Staff Legal Admin', salary: 'Rp. 3.000.000 - Rp. 5.000.000 / Bulan', offer: 'Gaji Dapat Dinegoisasi', info: 'Lowongan Pekerjaan ', location: 'Tangerang Selatan', qualification: 'Bidang Hukum', time: 'Full Time'},
      {perusahaan: 'PT. MOLTEN HARAPAH INDAH', position: 'Admin Operational', salary: 'Rp. 1.000.000 - Rp. 3.800.000 / Bulan', offer: 'Gaji Dapat Dinegoisasi', info: 'Lowongan Pekerjaan ', location: 'Jakarta Barat', qualification: 'Bidang Administrasi', time: 'Full Time'},
      {perusahaan: 'PT. NATURAL JAYA ABADI', position: 'Android Developer', salary: 'Rp. 7.000.000 / Bulan', offer: 'Gaji Dapat Dinegoisasi', info: 'Lowongan Pekerjaan ', location: 'Bandung', qualification: 'Bidang Komputer', time: 'Full Time'},
      {perusahaan: 'PT. MEGA GROUP INDUSTRI', position: 'Sales Executive', salary: 'Rp. 4.500.000 / Bulan', offer: 'Gaji Tidak Dapat Dinegoisasi', info: 'Lowongan Pekerjaan ', location: 'Jakarta Pusat', qualification: 'di Bidang Pemasaran', time: 'Full Time'},
      {perusahaan: 'PT. DELICIO MANUFACTURING', position: 'Senior Social Media Specialist', salary: 'Rp. 9.000.000 - Rp. 11.000.000 / Bulan', offer: 'Gaji Dapat Dinegoisasi', info: 'Lowongan Pekerjaan ', location: 'Jakarta Pusat', qualification: 'Bidang Lainnya', time: 'Full Time'},
      {perusahaan: 'PT. SPORT NUSANTARA RAYA', position: 'Admin Operational Magang', salary: 'Rp. 750.000 / Bulan', offer: 'Gaji Dapat Dinegoisasi', info: 'Lowongan Pekerjaan ', location: 'Jakarta Selatan', qualification: 'Bidang Administrasi', time: 'Internship'},
      {perusahaan: 'PT. MITRA DESAIN BERJAYA', position: 'Desain Grafis', salary: 'Rp. 6.000.000 / Bulan', offer: 'Gaji Tidak Dapat Dinegoisasi', info: 'Lowongan Pekerjaan ', location: 'Jakarta Selatan', qualification: 'Bidang Desain', time: 'Fulltime'},
      {perusahaan: 'PT. NK CLOTHING INDONESIA', position: 'Call Center', salary: 'Rp. 2.000.000 - Rp. 5.500.000 / Bulan', offer: 'Gaji Dapat Dinegoisasi', info: 'Lowongan Pekerjaan ', location: 'Jakarta Barat', qualification: 'Bidang Administrasi', time: 'Fulltime'},
      {perusahaan: 'PT. TEGUH ABADI INDAH', position: 'Apoteker', salary: 'Rp. 4.500.000 / Bulan', offer: 'Gaji Dapat Dinegoisasi', info: 'Lowongan Pekerjaan ', location: 'di Jakarta Utara', qualification: 'Bidang Kesehatan', time: 'Fulltime'},
      {perusahaan: 'PT. BANGSA NUSANTARA RAYA', position: 'Field Collection', salary: 'Rp. 3.500.000 / Bulan', offer: 'Gaji Dapat Dinegoisasi', info: 'Lowongan Pekerjaan ', location: 'di Surabaya', qualification: 'di Bidang Lainnya', time: 'Fulltime'},
    ],
    job_filtered: []
  };

  const Job = Vue.extend({
    template: '#job',
    data: function() {
      return data_job;
    },
    methods: {
      search: function() {
        var katakuncii = new RegExp(this.keywordss, 'ig');
        if (this.keywordss.length > 2) {
          this.job_filtered = this.job.filter(el => el.position.search(katakuncii)>-1);
        } else {
          this.job_filtered = [];
        }
      }
    }
  });

  var data_filter = {
    keywordss: '',
    filter: [
      {fasilitas: 'Parkir Khusus Karyawan', benefit:'Kontrak Kerja Yang Sah', Pengalaman:'Semua'},
      {fasilitas: 'Antar Jemput Karyawan', benefit:'Waktu Kerja 5 Hari / Minggu', Pengalaman:'SMP/SMA/SMK'},
      {fasilitas: 'Ruangan Kerja Ber-AC', benefit:'8 Jam Kerja / Hari', Pengalaman:'Fresh Graduate'},
      {fasilitas: 'Internet 24 jam', benefit:'Komisi Penjualan', Pengalaman:'Junior'},
      {fasilitas: 'Telpon Kantor', benefit:'Kenaikan Gaji', Pengalaman:'Experience'},
      {fasilitas: 'Ruangan Meeting', benefit:'Tunjangan Kesehatan', Pengalaman:'Senior'},
      {fasilitas: 'Ruangan Kerja Outdoor', benefit:'Tunjangan Hari Tua', Pengalaman:'Manager'},
      {fasilitas: 'Ruangan Makan', benefit:'Cuti Menikah', Pengalaman:'Director'},
      {fasilitas: 'Seragam Bebas', benefit:'Izin Tidur Siang Sejenak'},
      {fasilitas: 'Cemilan Gratis', benefit:'Hak Cuti Karyawan'},
      {fasilitas: 'Kartu Nama Karyawan', benefit:'Izin Shalat 5 Waktu'},
    ],
  };
  const Filt = Vue.extend({
    template: '#m1',
    data: function() {
      return data_filter;
    },
  });
  
  // 2. Definisikan routing menuju komponen
  const routes = [
    { path: '/', component: Home},
    { path: '/job', component: Job}
  ]
  
  // 3. Buat instance Router Vue
  const router = new VueRouter({ routes })
  
  // 4. Tempelkan instance "router" ke App Vue
  const spa = new Vue({ router }).$mount('#top-page');
  const zpa = new Vue({ router }).$mount('#app');

