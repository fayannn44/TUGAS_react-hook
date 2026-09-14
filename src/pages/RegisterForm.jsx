/* eslint-disable no-unused-vars */
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import StepOne from '../components/StepOne';

function RegisterForm() {
  const [currentStep, setCurrentStep] = useState(1);

  const {
    register,
    handleSubmit,
    trigger,
    setFocus,
    formState: { errors, isValidating },
  } = useForm({
    mode: 'onChange',
  });

  const onSubmit = async () => {
    await new Promise((resolve) => setTimeout(resolve, 1500));
  };

  return (
    <div className='max-w-2xl mx-auto space-y-5'>
      <div className='bg-white p-6 rounded-2xl shadow-xs border border-gray-200'>
        <form onSubmit={handleSubmit(onSubmit)}>
          {currentStep === 1 && (
            <StepOne
              register={register}
              errors={errors}
              trigger={trigger}
              setFocus={setFocus}
              isValidating={isValidating}
              onNext={() => setCurrentStep(2)}
            />
          )}
        </form>
      </div>
    </div>
  );
}

export default RegisterForm;
