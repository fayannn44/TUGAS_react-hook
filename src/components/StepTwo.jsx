import { useState } from "react";
import { useForm } from "react-hook-form";

import StepOne from "../components/StepOne";
import StepTwo from "../components/StepTwo";
import StepThree from "../components/StepThree";

function RegisterForm() {
  const [step, setStep] = useState(1);

  const {
    register,
    handleSubmit,
    trigger,
    watch,
    reset,
    formState: { errors },
  } = useForm({
    mode: "onTouched",
    defaultValues: {
      fullName: "",
      email: "",
      phone: "",
      package: "",
      session: "",
      isAgreed: false,
    },
  });

  const onSubmit = (data) => {
    console.log("Data pendaftaran:", data);
    alert("Pendaftaran berhasil!");
    reset();
    setStep(1);
  };

  const nextStep = async () => {
    const fields =
      step === 1
        ? ["fullName", "email", "phone"]
        : ["package", "session"];

    const isValid = await trigger(fields);

    if (isValid) {
      setStep((prev) => prev + 1);
    }
  };

  const prevStep = () => {
    setStep((prev) => prev - 1);
  };

  return (
    <section className="min-h-screen bg-gray-100 px-4 py-10">
      <div className="mx-auto w-full max-w-xl rounded-2xl bg-white p-6 shadow-md md:p-8">
        <div className="mb-8">
          <h1 className="text-2xl font-bold text-gray-900">
            Form Pendaftaran
          </h1>

          <p className="mt-2 text-sm text-gray-500">
            Lengkapi data pendaftaran kamu.
          </p>
        </div>

        <div className="mb-8 flex items-center justify-between">
          {[1, 2, 3].map((number) => (
            <div
              key={number}
              className="flex items-center gap-2"
            >
              <div
                className={`flex h-9 w-9 items-center justify-center rounded-full font-semibold ${
                  step >= number
                    ? "bg-black text-white"
                    : "bg-gray-200 text-gray-500"
                }`}
              >
                {number}
              </div>

              <span className="hidden text-sm text-gray-600 sm:block">
                {number === 1
                  ? "Data Diri"
                  : number === 2
                  ? "Paket"
                  : "Konfirmasi"}
              </span>
            </div>
          ))}
        </div>

        <form onSubmit={handleSubmit(onSubmit)}>
          {step === 1 && (
            <StepOne
              register={register}
              errors={errors}
            />
          )}

          {step === 2 && (
            <StepTwo
              register={register}
              errors={errors}
            />
          )}

          {step === 3 && (
            <StepThree
              register={register}
              errors={errors}
              watch={watch}
            />
          )}

          <div className="mt-8 flex justify-between gap-3">
            {step > 1 ? (
              <button
                type="button"
                onClick={prevStep}
                className="rounded-lg border border-gray-300 px-5 py-3 font-medium text-gray-700 transition hover:bg-gray-100"
              >
                Kembali
              </button>
            ) : (
              <div />
            )}

            {step < 3 ? (
              <button
                type="button"
                onClick={nextStep}
                className="rounded-lg bg-black px-6 py-3 font-medium text-white transition hover:bg-gray-800"
              >
                Lanjut
              </button>
            ) : (
              <button
                type="submit"
                className="rounded-lg bg-black px-6 py-3 font-medium text-white transition hover:bg-gray-800"
              >
                Daftar Sekarang
              </button>
            )}
          </div>
        </form>
      </div>
    </section>
  );
}

export default RegisterForm;