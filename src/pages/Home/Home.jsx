import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router';

const Home = () => {
const [productApi, setProductApi] = useState([]);
const navigate = useNavigate()  
useEffect(() => {
    dataProduct();
})

    async function dataProduct() {
        try {
        let res = await fetch(`https://dummyjson.com/products/`)
        let data = await res.json()

        setProductApi(data.products)
    } catch  {
        console.log("error");
        
    }
    }


  return (
    <div>
        {

         productApi.map((item) => {
      return (
        <div >
          <h3>{item.title}</h3>
          <img src={item.thumbnail} alt="" />
          <button onClick={() => navigate(`/products/${item.id}`)} className='w-[70px] h-[40px] border-none rounded-[8px] cursor-pointer bg-[red]'>Etrafli</button>
        </div>
      )
    })
        }
    </div>
  )
}

export default Home