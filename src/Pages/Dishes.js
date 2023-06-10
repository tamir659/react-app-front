  
import React from 'react';
import axios from 'axios';
import Menu from '../components/Menu'; 
import Appbar from '../components/Appbar';
const url = "https://reactappapi.blueground-7ac69658.germanywestcentral.azurecontainerapps.io/"


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