import React from 'react';
import { useForm } from "react-hook-form";


const AddProduct = () => {
    const { register, handleSubmit } = useForm();

    const onSubmit = data =>{
        const url = `http://localhost:5000/products`;
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
            <form className='d-flex flex-column' onSubmit={handleSubmit(onSubmit)}>
                <input placeholder='product-name' className='mb-2'  {...register("name", { required: true, maxLength: 20 })} />
                <textarea placeholder='description' className='mb-2' {...register("description")} />
                <input placeholder='price' className='mb-2' type="number" {...register("price")} />
                <input placeholder='Quantity' className='mb-2' type="number" {...register("quantity")} />
                <input placeholder='suplier-name' className='mb-2'  {...register("name", { required: true, maxLength: 20 })} />
                <input placeholder='photo URL' className='mb-2' type="text" {...register("img")} />
                <input type="submit" value='Add service' />
            </form>
        </div>
    );
};

export default AddProduct;