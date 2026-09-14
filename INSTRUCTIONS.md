Instruksi Latihan React Hook Form (Multi-Step Form)

1. RegisterForm.jsx
- Buat state currentStep (mulai dari angka 1).
- Gunakan useForm({ mode: 'onChange' }).
- Tambahkan defaultValues untuk data awal (username, email, fullName, role, dll).
- Ambil formState yang dibutuhkan: errors, isSubmitting, isValidating, isDirty, isValid, isLoading, isSubmitSuccessful.
- Buat fungsi onSubmit dengan simulasi delay (misal setTimeout) agar isSubmitting terlihat.
- Buat tombol reset form menggunakan fungsi reset().
- Oper fungsi dan state yang dibutuhkan ke masing-masing komponen: StepOne, StepTwo, dan StepThree.

2. StepOne.jsx
- Daftarkan input username dengan register (wajib diisi, minimal 3 karakter).
- Tambahkan validasi async pada username untuk mencoba isValidating (misal jika diisi 'admin', munculkan error).
- Daftarkan input email dengan register (wajib diisi, format email).
- Tampilkan pesan error di bawah input menggunakan errors.username dan errors.email.
- Buat fungsi pada tombol 'Lanjut ke Step 2':
  - Periksa validasi menggunakan trigger(['username', 'email']).
  - Jika aman, lanjut ke step 2 (panggil onNext).
  - Jika ada yang salah, fokuskan kursor ke input yang error menggunakan setFocus.

3. StepTwo.jsx
- Daftarkan input fullName dengan register (wajib diisi).
- Gunakan Controller untuk dropdown select role.
- Buat checkbox hasWhatsapp dan input nomor whatsapp.
- Gunakan unregister('whatsapp') saat checkbox WhatsApp dimatikan agar field tersebut tidak ikut divalidasi.
- Buat fungsi pada tombol 'Lanjut ke Step 3' menggunakan trigger untuk memeriksa validasi sebelum pindah, dan setFocus jika ada error.
- Buat tombol 'Kembali' yang memanggil onPrev untuk kembali ke step 1.

4. StepThree.jsx
- Tampilkan ringkasan data yang sudah diisi pada step 1 dan 2 menggunakan getValues().
- Daftarkan input referralCode.
- Buat fungsi pada tombol 'Terapkan':
  - Jika kode salah (misal bukan 'DISKON50'), buat error manual menggunakan setError('referralCode', ...) dan arahkan kursor dengan setFocus.
  - Jika kode benar atau user klik hapus error, bersihkan error menggunakan clearErrors('referralCode').
- Pada tombol submit, pasang kondisi disabled dan teks loading saat isSubmitting bernilai true.
- Buat tombol 'Kembali' yang memanggil onPrev untuk kembali ke step 2.
