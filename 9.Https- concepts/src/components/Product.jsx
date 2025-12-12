import React, { useEffect, useState } from 'react'

const Product = () => {

    const [product,setProduct] = useState([])

    useEffect( ()=>{

        const productData = async () =>{

            try {

                const res = await fetch("http://localhost:5000/products")

                const data = await res.json()

                setProduct(data)
                
            } catch (error) {

                console.log(error)
                
            }


        }

        productData()


    },[])

  return (
    <>
    {product.map((prod)=>{
        return (

            <>
            <li>{prod.name}</li>
            <img src={prod.image} alt={prod.name} width={200} />
            <li>{prod.price}</li>
            </>
        )
    })}
    </>
  )
}

export default Product