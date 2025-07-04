import { useState } from "react";
import { useForm } from "react-hook-form";

function About() {
    const { register, handleSubmit } = useForm();

    const onSubmit = (data) => {
        console.log(`${data.username}${data.email}${data.password}${data.address}${data.country}${data.subscribe}`);
    };

    return (
        <>
            <form onSubmit={handleSubmit(onSubmit)}>
                <input
                    type="text"
                    placeholder="enter name"
                    {...register('username')}
                />
                <br />
                <input
                    type="text"
                    placeholder="enter email"
                    {...register('email')}
                />
                <br />
                <input
                    type="text"
                    placeholder="enter password"
                    {...register('password')}
                />
                <br />
                <textarea
                    rows={4}
                    cols={10}
                    {...register('description')}
                />
                <br />
                <select {...register('country')}>
                    <option value="USA">USA</option>
                    <option value="UK">UK</option>
                    <option value="INDIA">INDIA</option>
                    <option value="JAPAN">JAPAN</option>
                </select>
                <br />
                <input
                    type="checkbox"
                    {...register('subscribe')}
                /> Subscribe
                <br />
                <button type="submit">Submit</button>
            </form>
        </>
    );
}
export default About;
