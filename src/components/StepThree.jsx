function StepThree({ register, errors, watch }) {
  const data = watch();

  const packages = {
    frontend: "Frontend Developer",
    backend: "Backend Developer",
    fullstack: "Fullstack Developer",
  };

  const prices = {
    frontend: "Rp 500.000",
    backend: "Rp 500.000",
    fullstack: "Rp 900.000",
  };

  const sessions = {
    pagi: "Sesi Pagi (09.00 - 12.00 WIB)",
    sore: "Sesi Sore (16.00 - 19.00 WIB)",
  };

  return (
    <div className="space-y-5">
      <h2 className="text-xl font-bold">
        Ringkasan Data
      </h2>

      <div className="space-y-2 rounded-lg bg-gray-50 p-4">
        <p>Nama Lengkap: {data.fullName}</p>
        <p>Email: {data.email}</p>
        <p>Nomor WhatsApp: {data.phone}</p>
        <p>Paket Belajar: {packages[data.package]}</p>
        <p>Harga: {prices[data.package]}</p>
        <p>Sesi Belajar: {sessions[data.session]}</p>
      </div>

      <label className="flex items-start gap-2">
        <input
          type="checkbox"
          className="mt-1 h-4 w-4 accent-black"
          {...register("isAgreed", {
            required:
              "Anda harus menyetujui syarat dan ketentuan yang berlaku.",
          })}
        />

        <span>
          Saya menyetujui syarat dan ketentuan yang berlaku.
        </span>
      </label>

      {errors.isAgreed && (
        <p className="text-sm text-red-500">
          {errors.isAgreed.message}
        </p>
      )}
    </div>
  );
}

export default StepThree;