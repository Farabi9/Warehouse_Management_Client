import { useEffect, useState } from "react"

const  useProductDetail = id =>{
   
    const [product, setProduct] = useState({})
    useEffect(() =>{
        fetch(`https://stark-escarpment-05215.herokuapp.com/products/${id}`)
        .then(res => res.json())
        .then(data => setProduct(data))
    },[id])
    return [product]
}

export default useProductDetail;