import * as React from 'react';
import '../style.css'
import axios from 'axios';
import { Typography } from '@mui/material';

const url = "https://reactappapi.blueground-7ac69658.germanywestcentral.azurecontainerapps.io/"


function Menu({name,image,category_id}) {
    const [dishes,setDishes] = React.useState([])
    
    function getDishes(){
        axios.get(`${url}/category/${category_id}`).then((response)=>{
          setDishes(response.data)
        })
      }
      React.useEffect(()=>{
        getDishes() 
      },[])

  return (
    <div style={{ 
      backgroundImage: `url("https://st.depositphotos.com/1704244/1202/i/950/depositphotos_12027212-stock-photo-menu-background.jpg")` ,
      backgroundPosition: 'center',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        width: '100vw',
        height: '100vh' 
    }}>
        <div style={{textAlign: 'center'}}>
            <h1>{name}</h1>
            <img src={image} style={{width:'450px',height:'200px',borderRadius: 15}} />        
       </div> 
       
       <div class='container'>
        {
            dishes.map(dish=>(
              <div class='item'>
                <h2>{dish.name}</h2>
                <img src={dish.image} style={{width:'200px',height:'200px',borderRadius: 15}} />
                <Typography><p style={{fontSize:'20px'}}>{dish.description}</p>
                <p style={{fontSize:'35px'}}>price : {dish.price}$</p>  
                </Typography>
              </div>
            )
             
                )
        }
       
       </div>

  </div>
  )
}

export default Menu 