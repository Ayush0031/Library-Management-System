import React from 'react';
import { useForm } from 'react-hook-form';

export default function BookIssue() {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();

    const onSubmit = (data) => {
        console.log(data);
        // Add logic to handle form submission (e.g., issue the book)
    };

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <input defaultValue="" {...register("studentId")} placeholder="Student ID" />
            <br />
            <input defaultValue="" {...register("name")} placeholder="Name" />
            {errors.name && <span>This field is required</span>}
            <br />
            <input defaultValue="" {...register("email")} placeholder="Email" />
            {errors.email && <span>This field is required</span>}
            <br />
            <input defaultValue="" {...register("isbn")} placeholder="ISBN" />
            {errors.isbn && <span>This field is required</span>}
            <br />
            <input defaultValue="" {...register("bookName")} placeholder="Book Name" />
            {errors.bookName && <span>This field is required</span>}
            <br />
            <input type="submit" />
        </form>
    );
}
