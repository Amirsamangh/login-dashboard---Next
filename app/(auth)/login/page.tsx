'use client';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation'
import style from '@/styles/login.module.scss'
import AppInput from '@/components/login/AppInput';
import AppButton from '@/components/login/AppButton';
import { loginAction } from '@/actions/authActions';

export default function LoginPage() {
  const router = useRouter();

  // const [user, setUser] = useState<RandomUser | null>(null);
  // const [formData, setFormData] = useState<LoginFormData>({
  //   phone: '',
  //   password: '',
  // });

  // useEffect(() => {
  //   fetch('https://randomuser.me/api/?results=1&nat=us')
  //     .then(res => res.json())
  //     .then(data => setUser(data.results[0]))
  //     .catch(() => alert('Error fetching user'));
  // }, []);

  // const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
  //   const { name, value } = e.target;
  //   setFormData(prev => ({ ...prev, [name]: value }));
  // };

  // const handleLogin = () => {
  //   if (!user) return;

  //   if (
  //     formData.phone === user.login.phone &&
  //     formData.password === user.login.password
  //   ) {
  //     localStorage.setItem('token', 'sample_token');
  //     router.push('/dashboard');
  //   } else {
  //     alert('phone number or password is incorrect!');
  //   }
  // };

  return (
    <div className={style.container}>
    <form action={loginAction}>

        {/* <h1 className='text-center my-5'>Login Form</h1> */}
        <div className='flex flex-col gap-4'>
            <label>phone number :</label>
            <input name="phone" type='number' className={style.input} />
        </div>

        <div className='flex justify-center mt-5'>
            <button className={style.button}>Login</button>
        </div>
    </form>
</div>
  );
}