function StepTwo({ register, errors }) {
  return (
    <div className="space-y-6">
      <div>
        <label className="mb-2 block font-medium">
          Pilih Paket Belajar
        </label>
        <select
          className="w-full rounded-lg border border-gray-300 bg-white px-4 py-3 outline-none focus:border-black"
          {...register("package", {
            required: "Silakan pilih salah satu paket belajar.",
          })}
        >
          <option value="">-- Pilih Paket --</option>
          <option value="frontend">
            Frontend Developer (Rp 500.000)
          </option>
          <option value="backend">
            Backend Developer (Rp 500.000)
          </option>
          <option value="fullstack">
            Fullstack Developer (Rp 900.000)
          </option>
        </select>
        {errors.package && (
          <p className="mt-1 text-sm text-red-500">
            {errors.package.message}
          </p>
        )}
      </div>

      <div>
        <label className="mb-3 block font-medium">
          Pilih Sesi Belajar
        </label>

        <div className="space-y-3">
          <label className="flex cursor-pointer items-center gap-3 rounded-lg border border-gray-300 p-4">
            <input
              type="radio"
              value="pagi"
              className="h-4 w-4 accent-black"
              {...register("session", {
                required: "Pilih salah satu sesi belajar.",
              })}
            />
            Sesi Pagi (09.00 - 12.00 WIB)
          </label>

          <label className="flex cursor-pointer items-center gap-3 rounded-lg border border-gray-300 p-4">
            <input
              type="radio"
              value="sore"
              className="h-4 w-4 accent-black"
              {...register("session", {
                required: "Pilih salah satu sesi belajar.",
              })}
            />
            Sesi Sore (16.00 - 19.00 WIB)
          </label>
        </div>

        {errors.session && (
          <p className="mt-1 text-sm text-red-500">
            {errors.session.message}
          </p>
        )}
      </div>
    </div>
  );
}

export default StepTwo;