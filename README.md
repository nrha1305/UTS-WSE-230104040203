# UTS Web Service Engineering  
## RESTful API - Resource: students

**Nama:** Nor Hayati  
**NIM:** 230104040203  
**Kelas:** TI 23 A  
**Dosen Pengampu:** Muhayat, M.IT  
**Mata Kuliah:** Web Service Engineering  

---

## Deskripsi Singkat
Project ini merupakan implementasi RESTful API menggunakan Node.js dan Express.js tanpa database.  
Data mahasiswa disimpan dalam bentuk array pada file `.js`.  
API mendukung operasi CRUD lengkap, mengikuti 7 prinsip RESTful, serta menampilkan data dalam format **JSON**.

Resource yang digunakan sesuai digit akhir NIM (3) yaitu **students**, dengan field:
```
name, npm, major
```

---

## Cara Menjalankan Program

```
npm install
npm run dev
```

Server berjalan pada:
```
http://localhost:3000
```

---

## Struktur Folder

```
UTS-WSE-230104040203
│
├── app.js
├── package.json
├── README.md
│
├── controllers
│   └── studentsController.js
│
├── routes
│   └── studentsRoutes.js
│
├── data
│   └── students.js
│
└── screenshot-postman
    ├── get-all.png
    ├── get-by-id.png
    ├── post-add.png
    ├── put-update.png
    └── delete.png
```

---

## Endpoint API

| Method | Endpoint | Fungsi | Status Code |
|--------|----------|--------|-------------|
| GET | /api/students | Menampilkan semua mahasiswa | 200 |
| GET | /api/students/:id | Menampilkan mahasiswa berdasarkan ID | 200 / 404 |
| POST | /api/students | Menambahkan data mahasiswa | 201 / 400 |
| PUT | /api/students/:id | Mengubah data mahasiswa | 200 / 400 / 404 |
| DELETE | /api/students/:id | Menghapus data mahasiswa | 204 / 404 |
| GET | /api/info | Informasi API | 200 |

---

## Cara Uji API Menggunakan Postman

### 1. GET Semua Data Mahasiswa
**Method:** GET  
**URL:**  
```
http://localhost:3000/api/students
```

---

### 2. GET Data Mahasiswa Berdasarkan ID
**Method:** GET  
**URL:**  
```
http://localhost:3000/api/students/1
```

> Ganti `1` dengan ID lain jika perlu.

---

### 3. POST Tambah Data Mahasiswa
**Method:** POST  
**URL:**  
```
http://localhost:3000/api/students
```

**Headers (WAJIB):**
| Key | Value |
|-----|-------|
| Content-Type | application/json |

**Body (JSON):**
```
{
  "name": "Ruqayah",
  "npm": "230104040208",
  "major": "Teknologi Informasi"
}
```

---

### 4. PUT Update Data Mahasiswa
**Method:** PUT  
**URL:**  
```
http://localhost:3000/api/students/3
```

**Headers:**  
| Key | Value |
|-----|-------|
| Content-Type | application/json |

**Body (JSON):**
```
{
  "name": "Lira Anggraini",
  "npm": "230104040207",
  "major": "Teknologi Informasi"
}
```

---

### 5. DELETE Hapus Data Mahasiswa
**Method:** DELETE  
**URL:**  
```
http://localhost:3000/api/students/3
```

> Ganti `3` sesuai ID yang ingin dihapus.

---

### 6. GET Informasi API
**Method:** GET  
**URL:**  
```
http://localhost:3000/api/info
```

---

## Contoh Body JSON (POST / PUT)

```
{
  "name": "Lira Anggraini",
  "npm": "230104040207",
  "major": "Teknologi Informasi"
}
```

---

## 7 Prinsip RESTful yang Diterapkan

| No | Prinsip | Implementasi dalam Project |
|---|---------|----------------------------|
| 1 | Resource-Oriented URI | URI menggunakan `/api/students` (kata benda jamak) |
| 2 | Proper HTTP Methods | GET, POST, PUT, DELETE sesuai peran |
| 3 | Stateless Communication | Server tidak menyimpan session state |
| 4 | Consistent Status Codes | Menggunakan 200, 201, 204, 400, 404 secara tepat |
| 5 | JSON Representation | Semua response dalam JSON rapi |
| 6 | Validation & Error Handling | `name`, `npm`, `major` wajib diisi saat POST/PUT |
| 7 | Discoverability | Endpoint `/api/info` berisi metadata API |

---

## Screenshot Hasil Uji (Postman)

### 1. GET Semua Data
![GET Semua](./screenshot-postman/get-all.png)

### 2. GET Data Berdasarkan ID
![GET By ID](./screenshot-postman/get-by-id.png)

### 3. POST Tambah Mahasiswa
![POST Tambah](./screenshot-postman/post-add.png)

### 4. PUT Update Mahasiswa
![PUT Update](./screenshot-postman/put-update.png)

### 5. DELETE Hapus Mahasiswa
![DELETE](./screenshot-postman/delete.png)

---

## Kesimpulan
API telah berjalan dengan baik dan menerapkan:
- CRUD lengkap
- Validasi input
- Status code konsisten
- Response JSON rapi
- Struktur folder modular
- 7 Prinsip RESTful sesuai ketentuan tugas UTS.

