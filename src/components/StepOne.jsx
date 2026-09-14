/* eslint-disable no-unused-vars */
function StepOne() {
  return (
    <div className='space-y-4'>
      <div>
        <h2 className='text-base font-semibold text-gray-800'>
          Langkah 1: Akun & Kredensial
        </h2>
        <p className='text-xs text-gray-500'>
          Masukkan username dan email Anda.
        </p>
      </div>

      <div>
        <div className='flex items-center justify-between mb-1'>
          <label
            htmlFor='username'
            className='block text-xs font-medium text-gray-700'>
            Username <span className='text-red-500'>*</span>
          </label>
        </div>
        <input
          id='username'
          type='text'
          placeholder='Masukkan username...'
          className={`w-full px-3 py-2 border rounded-lg text-sm transition focus:outline-none focus:ring-2`}
        />
      </div>

      <div>
        <label
          htmlFor='email'
          className='block text-xs font-medium text-gray-700 mb-1'>
          Alamat Email <span className='text-red-500'>*</span>
        </label>
        <input
          id='email'
          type='email'
          placeholder='contoh: user@mail.com'
          className={`w-full px-3 py-2 border rounded-lg text-sm transition focus:outline-none focus:ring-2`}
        />
      </div>

      <div className='pt-4 flex justify-end'>
        <button
          type='button'
          className='px-5 py-2.5 bg-blue-600 hover:bg-blue-700 text-white text-xs md:text-sm font-medium rounded-lg transition flex items-center gap-2 cursor-pointer shadow-xs'>
          <span>Lanjut ke Step 2</span>
        </button>
      </div>
    </div>
  );
}

export default StepOne;
