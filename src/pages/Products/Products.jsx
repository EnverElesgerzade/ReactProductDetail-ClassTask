// import React, { useEffect, useState } from 'react'
// import {  useParams } from 'react-router'

// const Products = () => {
//     const {id} = useParams()
//     const [productss, setProductss] = useState(null)
//    useEffect(() => {
//        dataProductt();
//    }, [id])
   
//        async function dataProductt() {
//            try {
//            let res = await fetch(`https://dummyjson.com/products/${id}`)
//            let data = await res.json()
   
//            setProductss(data)
//        } catch  {
//            console.log("error");
           
//        }
//        }
//   return (  
//     <div>
//         <h2>{productss.title}</h2>
//         <p>{productss.price}</p>
//     </div>
//   )
// }

// export default Products

import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router'

const Products = () => {
    const { id } = useParams()
    const [productss, setProductss] = useState(null)

    useEffect(() => {
        dataProductt()
    }, [id])

    async function dataProductt() {
        try {
            let res = await fetch(`https://dummyjson.com/products/${id}`)
            let data = await res.json()

            setProductss(data)
        } catch {
            console.log("error")
        }
    }

    if (!productss) {
        return <h2>Loading...</h2>
    }

    return (
        <div>
            <img src={productss.thumbnail} alt="" />
            <h2>{productss.title}</h2>
            <p>{productss.price}</p>
        </div>
    )
}

export default Products