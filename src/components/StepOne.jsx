function StepOne({ register, errors }) {
  return (
    <div className="space-y-5">
      <div>
        <label className="mb-2 block font-medium">
          Nama Lengkap
        </label>
        <input
          type="text"
          placeholder="Masukkan nama lengkap"
          className="w-full rounded-lg border border-gray-300 px-4 py-3 outline-none focus:border-black"
          {...register("fullName", {
            required: "Nama lengkap wajib diisi.",
            minLength: {
              value: 3,
              message: "Nama lengkap minimal 3 karakter.",
            },
          })}
        />
        {errors.fullName && (
          <p className="mt-1 text-sm text-red-500">
            {errors.fullName.message}
          </p>
        )}
      </div>

      <div>
        <label className="mb-2 block font-medium">
          Email Aktif
        </label>
        <input
          type="email"
          placeholder="contoh@email.com"
          className="w-full rounded-lg border border-gray-300 px-4 py-3 outline-none focus:border-black"
          {...register("email", {
            required: "Email wajib diisi.",
            pattern: {
              value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
              message: "Format email tidak valid.",
            },
          })}
        />
        {errors.email && (
          <p className="mt-1 text-sm text-red-500">
            {errors.email.message}
          </p>
        )}
      </div>

      <div>
        <label className="mb-2 block font-medium">
          Nomor WhatsApp
        </label>
        <input
          type="tel"
          inputMode="numeric"
          placeholder="081234567890"
          className="w-full rounded-lg border border-gray-300 px-4 py-3 outline-none focus:border-black"
          {...register("phone", {
            required: "Nomor WhatsApp wajib diisi.",
            pattern: {
              value: /^[0-9]{10,13}$/,
              message:
                "Nomor WhatsApp harus berupa angka dan bernilai 10-13 digit.",
            },
          })}
        />
        {errors.phone && (
          <p className="mt-1 text-sm text-red-500">
            {errors.phone.message}
          </p>
        )}
      </div>
    </div>
  );
}

export default StepOne;