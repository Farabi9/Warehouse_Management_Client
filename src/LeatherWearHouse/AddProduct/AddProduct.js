import React from 'react';
import { useForm } from "react-hook-form";


const AddProduct = () => {
    const { register, handleSubmit } = useForm();

    const onSubmit = data =>{
        const url = `https://stark-escarpment-05215.herokuapp.com/products`;
        fetch(url, {
            method: "POST",
            headers: {
                'content-type' : 'application/json'
            },
            body: JSON.stringify(data)
        })
        .then(res => res.json())
        .then(result =>{
            console.log(result)
        })
    }
    return (
        <div>
            <form className='d-flex flex-column w-50 mx-auto mt-5' onSubmit={handleSubmit(onSubmit)}>
                <input placeholder='product-name' className='mb-2'  {...register("name", { required: true, maxLength: 20 })} />
                <textarea placeholder='description' className='mb-2' {...register("description")} />
                <input placeholder='prize' className='mb-2' type="number" {...register("prize")} />
                <input placeholder='quantity' className='mb-2' type="number" {...register("quantity")} />
                <input placeholder='suplierName' className='mb-2'  {...register("suplierName", { required: true, maxLength: 20 })} />
                <input placeholder='photo URL' className='mb-2' type="text" {...register("img")} />
                <input className='bg-warning' type="submit" value='Add service' />
            </form>
        </div>
    );
};

export default AddProduct;