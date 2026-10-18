  
import React from 'react';
import axios from 'axios';
import Menu from '../components/Menu'; 
import Appbar from '../components/Appbar';
const url = process.env.REACT_APP_API_URL || "http://localhost:5000"


function Dishes() {
  
  const [categories,setCategories] = React.useState([])

  function getCategories(){
    axios.get(`${url}/categories`).then((response)=>{
      setCategories(response.data)
    })
  }
  React.useEffect(()=>{
    getCategories()
},[])

  return (
    <div >
      <div>
        <Appbar/>
      </div>
      <div>
          
            {            
              categories.map(category=>
                <Menu 
                name = {category.name}
                image ={category.image} 
                category_id = {category.id}               
                />                
              )
            }
      </div>
    </div>
  )
}

export default Dishes  