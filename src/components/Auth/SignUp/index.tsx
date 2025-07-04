// 'use client'
// import Link from 'next/link'
// import { useRouter } from 'next/navigation'
// import toast from 'react-hot-toast'
// import SocialSignUp from '../SocialSignUp'
// import Logo from '@/components/Layout/Header/Logo'
// import { useState } from 'react'
// import Loader from '@/components/Common/Loader'
// const SignUp = () => {
//   const router = useRouter()
//   const [loading, setLoading] = useState(false)

//   const handleSubmit = (e: any) => {
//     e.preventDefault()

//     setLoading(true)
//     const data = new FormData(e.currentTarget)
//     const value = Object.fromEntries(data.entries())
//     const finalData = { ...value }

//     fetch('/api/register', {
//       method: 'POST',
//       headers: {
//         'Content-Type': 'application/json',
//       },
//       body: JSON.stringify(finalData),
//     })
//       .then((res) => res.json())
//       .then((data) => {
//         toast.success('Successfully registered')
//         setLoading(false)
//         router.push('/signin')
//       })
//       .catch((err) => {
//         toast.error(err.message)
//         setLoading(false)
//       })
//   }

//   return (
//     <>
//       <div className='mb-10 text-center mx-auto inline-block max-w-[160px]'>
//         <Logo />
//       </div>

//       <SocialSignUp />

//       <span className="z-1 relative my-8 block text-center before:content-[''] before:absolute before:h-px before:w-40% before:bg-dark_border/60 before:left-0 before:top-3 after:content-[''] after:absolute after:h-px after:w-40% after:bg-dark_border/60 after:top-3 after:right-0">
//         <span className='text-body-secondary relative z-10 inline-block px-3 text-base text-white'>
//           OR
//         </span>
//       </span>

//       <form onSubmit={handleSubmit}>
//         <div className='mb-[22px]'>
//           <input
//             type='text'
//             placeholder='Name'
//             name='name'
//             required
//             className='w-full rounded-md border border-dark_border/60 border-solid bg-transparent px-5 py-3 text-base text-dark outline-hidden transition placeholder:text-grey focus:border-primary focus-visible:shadow-none text-white dark:focus:border-primary'
//           />
//         </div>
//         <div className='mb-[22px]'>
//           <input
//             type='email'
//             placeholder='Email'
//             name='email'
//             required
//             className='w-full rounded-md border border-dark_border/60 border-solid bg-transparent px-5 py-3 text-base text-dark outline-hidden transition placeholder:text-grey focus:border-primary focus-visible:shadow-none text-white dark:focus:border-primary'
//           />
//         </div>
//         <div className='mb-[22px]'>
//           <input
//             type='password'
//             placeholder='Password'
//             name='password'
//             required
//             className='w-full rounded-md border border-dark_border/60 border-solid bg-transparent px-5 py-3 text-base text-dark outline-hidden transition placeholder:text-grey focus:border-primary focus-visible:shadow-none text-white dark:focus:border-primary'
//           />
//         </div>
//         <div className='mb-9'>
//           <button
//             type='submit'
//             className='flex w-full items-center text-18 font-medium justify-center rounded-md bg-primary px-5 py-3 text-darkmode transition duration-300 ease-in-out hover:bg-transparent hover:text-primary border-primary border '>
//             Sign Up {loading && <Loader />}
//           </button>
//         </div>
//       </form>

//       <p className='text-body-secondary mb-4 text-white text-base'>
//         By creating an account you are agree with our{' '}
//         <a href='/#' className='text-primary hover:underline'>
//           Privacy
//         </a>{' '}
//         and{' '}
//         <a href='/#' className='text-primary hover:underline'>
//           Policy
//         </a>
//       </p>

//       <p className='text-body-secondary text-white text-base'>
//         Already have an account?
//         <Link href='/' className='pl-2 text-primary hover:underline'>
//           Sign In
//         </Link>
//       </p>
//     </>
//   )
// }

// export default SignUp
'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import toast from 'react-hot-toast';
import Link from 'next/link';
import Logo from '@/components/Layout/Header/Logo';
import SocialSignUp from '../SocialSignUp';
import Loader from '@/components/Common/Loader';

const SignUp = () => {
  const router = useRouter();
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);

    const data = new FormData(e.currentTarget);
    const finalData = Object.fromEntries(data.entries());

    try {
      const res = await fetch('/api/register', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(finalData),
      });

      const result = await res.json();

      if (!res.ok) {
        throw new Error(result?.message || 'Registration failed');
      }

      toast.success('Successfully registered');
      router.push('/signin');
    } catch (err: any) {
      toast.error(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <div className='mb-10 text-center mx-auto inline-block max-w-[160px]'>
        <Logo />
      </div>

      <SocialSignUp />

      <span className="z-1 relative my-8 block text-center before:content-[''] before:absolute before:h-px before:w-40% before:bg-dark_border/60 before:left-0 before:top-3 after:content-[''] after:absolute after:h-px after:w-40% after:bg-dark_border/60 after:top-3 after:right-0">
        <span className='text-body-secondary relative z-10 inline-block px-3 text-base text-white'>
          OR
        </span>
      </span>

      <form onSubmit={handleSubmit}>
        <div className='mb-[22px]'>
          <input
            type='text'
            name='name'
            placeholder='Name'
            required
            className='w-full rounded-md border border-dark_border/60 bg-transparent px-5 py-3 text-base text-white placeholder:text-grey focus:border-primary dark:focus:border-primary'
          />
        </div>
        <div className='mb-[22px]'>
          <input
            type='email'
            name='email'
            placeholder='Email'
            required
            className='w-full rounded-md border border-dark_border/60 bg-transparent px-5 py-3 text-base text-white placeholder:text-grey focus:border-primary dark:focus:border-primary'
          />
        </div>
        <div className='mb-[22px]'>
          <input
            type='password'
            name='password'
            placeholder='Password'
            required
            className='w-full rounded-md border border-dark_border/60 bg-transparent px-5 py-3 text-base text-white placeholder:text-grey focus:border-primary dark:focus:border-primary'
          />
        </div>
        <div className='mb-9'>
          <button
            type='submit'
            className='flex w-full items-center justify-center rounded-md bg-primary px-5 py-3 text-18 font-medium text-darkmode transition duration-300 hover:bg-transparent hover:text-primary border border-primary'>
            Sign Up {loading && <Loader />}
          </button>
        </div>
      </form>

      <p className='text-body-secondary mb-4 text-white text-base'>
        By creating an account you agree to our{' '}
        <a href='/#' className='text-primary hover:underline'>
          Privacy
        </a>{' '}
        and{' '}
        <a href='/#' className='text-primary hover:underline'>
          Policy
        </a>
        .
      </p>

      <p className='text-body-secondary text-white text-base'>
        Already have an account?{' '}
        <Link href='/' className='text-primary hover:underline'>
          Sign In
        </Link>
      </p>
    </>
  );
};

export default SignUp;
