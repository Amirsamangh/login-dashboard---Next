'use server'

import axios from "axios";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";

export const loginAction = async (formData: FormData) => {
    console.log(formData);
    const phone = formData.get('phone')

    // if (typeof phone !== 'number') {
    //     throw new Error('phone must be a number')
    // }

    // const isValidIranianPhone = /^09\d{9}$/.test(phone);

    // if (!isValidIranianPhone) {
    //     throw new Error('شماره تلفن معتبر نیست. باید با 09 شروع بشه و ۱۱ رقم باشه.');
    // }

    const res = await axios.get('https://randomuser.me/api/?results=1&nat=us')
    console.log("User:", res.data);

    const token = res.data.info.seed
    console.log('token', token);

    const cookieStore = await cookies()
    cookieStore.set('loginToken', token)
    redirect('/dashboard')
}