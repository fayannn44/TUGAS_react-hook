function StepThree({ register, errors, getValues }) {
  const data = getValues();

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
      <div className="rounded-xl bg-gray-50 p-5">
        <h3 className="mb-4 text-lg font-bold">
          Ringkasan Data
        </h3>

        <div className="space-y-3 text-sm">
          <p>
            <span className="text-gray-500">Nama Lengkap:</span>{" "}
            {data.fullName}
          </p>
          <p>
            <span className="text-gray-500">Email:</span>{" "}
            {data.email}
          </p>
          <p>
            <span className="text-gray-500">Nomor WhatsApp:</span>{" "}
            {data.phone}
          </p>
          <p>
            <span className="text-gray-500">Paket Belajar:</span>{" "}
            {packages[data.package]}
          </p>
          <p>
            <span className="text-gray-500">Harga:</span>{" "}
            {prices[data.package]}
          </p>
          <p>
            <span className="text-gray-500">Sesi Belajar:</span>{" "}
            {sessions[data.session]}
          </p>
        </div>
      </div>

      <label className="flex cursor-pointer items-start gap-3">
        <input
          type="checkbox"
          className="mt-1 h-4 w-4 accent-black"
          {...register("isAgreed", {
            required:
              "Anda harus menyetujui syarat dan ketentuan yang berlaku.",
          })}
        />
        <span className="text-sm text-gray-600">
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