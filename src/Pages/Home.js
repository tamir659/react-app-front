import React from 'react'
import { Link,Outlet } from 'react-router-dom'


function Home() {
  return (
    <div>
      <div style={{ 
        backgroundImage: `url("https://visitbath.co.uk/imageresizer/?image=%2Fdbimgs%2FGallery%20-%20Abbey%20Hotel%20Food%20Spread%20Landscape.jpg&action=FeaturedItemsGalleryProElite3x2")` ,
        backgroundPosition: 'center',
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat',
          width: '100vw',
          height: '100vh'
      }}>
          <div>
            <h1 style={{color:'white',textAlign:'center',fontSize:'50px'
          }}>Welcome To Tamir's restaurant</h1> 
          <div>
            <div>
              <br/>
              <br/>
              <br/>
              <br/>
              <br/>
              <br/>
              <br/>
              <br/>
              <br/>
              <br/>
              <br/>
              <br/>
            </div>                 
                  <div>
                        <Link style={{color:'black',display: 'flex',backgroundColor:'white', 
                        justifyContent:'center', alignItems:'center',fontSize:'50px'
                        }} to="/menu">Click and watch Tamir's restaurant Menu  </Link> 
                  </div> 
          <Outlet/>
          </div>
          </div>
        
      </div>
    </div>
  )
}

export default Home 