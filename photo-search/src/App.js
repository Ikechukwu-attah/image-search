import React, {useState, useEffect} from 'react';
import ImageCard from './components/imageCard'
import ImageSearch from './components/ImageSearch'


function App() {
  
  const[images, setImages] =  useState([])
  const[isLoading, setIsLoading] = useState(true)  
  const[term, setTerm] = useState('')

  useEffect(()=>{
   fetch(`https://pixabay.com/api/?key=${process.env.REACT_APP_PIXABAY_API_KEY}&q=
          ${term}&image_type=photo&pretty=true`)
         
        .then(res => res.json())
        .then(data =>{
          setImages(data.hits)
          setIsLoading(false)
          
        })  
        .catch(err => console.log(err)) 
  }, [term])


  return (
    <div className='container mx-auto'>
       <h1 className='text-center mt-10 font-bold text-4xl mx-auto'>Download image of your choice </h1>
      <ImageSearch searchText={(text)=>setTerm(text)}/>

       {!isLoading && images.length === 0 && <h1 className='text-4xl mx-auto text-center mt-32'>No Image Found, check your spelling</h1> }
       
       {isLoading? <h1 className='text-6xl mx-auto text-center mt-32'>Loading...</h1> :<div className='grid grid-cols-3 gap-4'>
        {images.map((image)=>(
          <ImageCard key={image.id} image={image} />
        ))}
       </div>}
    </div>
  );
}

export default App;
