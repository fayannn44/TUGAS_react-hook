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
    getValues,
    trigger,
    formState: { errors },
  } = useForm();

  const nextStep = async () => {
    const fields =
      step === 1
        ? ["fullName", "email", "phone"]
        : ["package", "session"];

    if (await trigger(fields)) setStep(step + 1);
  };

  const onSubmit = (data) => {
    console.log(data);
    alert("Pendaftaran berhasil!");
  };

  return (
    <main className="min-h-screen bg-gray-100 p-4">
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="mx-auto max-w-lg space-y-6 rounded-xl bg-white p-6 shadow"
      >
        <h1 className="text-2xl font-bold">Pendaftaran Event</h1>

        <p>Langkah {step} dari 3</p>

        {step === 1 && (
          <>
            <h2 className="text-xl font-semibold">Informasi Pribadi</h2>
            <StepOne register={register} errors={errors} />
          </>
        )}

        {step === 2 && (
          <>
            <h2 className="text-xl font-semibold">Kursus & Jadwal</h2>
            <StepTwo register={register} errors={errors} />
          </>
        )}

        {step === 3 && (
          <>
            <h2 className="text-xl font-semibold">Konfirmasi</h2>
            <StepThree
              register={register}
              errors={errors}
              getValues={getValues}
            />
          </>
        )}

        <div className="flex gap-2">
          {step > 1 && (
            <button
              type="button"
              onClick={() => setStep(step - 1)}
              className="rounded bg-gray-200 px-4 py-2"
            >
              Back
            </button>
          )}

          {step < 3 ? (
            <button
              type="button"
              onClick={nextStep}
              className="rounded bg-black px-4 py-2 text-white"
            >
              Next
            </button>
          ) : (
            <button
              type="submit"
              className="rounded bg-black px-4 py-2 text-white"
            >
              Submit
            </button>
          )}
        </div>
      </form>
    </main>
  );
}

export default RegisterForm;