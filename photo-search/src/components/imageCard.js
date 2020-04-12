import React from 'react'

const imageCard = ({image}) => {
    const tag = image.tags.split(',')
    return (
        <div className='max-w-sm rounded overflow-hidden shadow-lg'>
      <img src = {image.webformatURL} alt='pics' className='w-full'/>
      <div className  = 'px-6 py-4'>
         <div className='font-bold text-purple-500 text-xl mb-2'>
           Photo by {image.user}
         </div>
         <div>
           <ul>
            <li>
              <strong>Views: </strong>
                {image.views}
            </li>

            <li>
              <strong>Likes: </strong>
                {image.likes}
            </li>

            <li>
              <strong>comment: </strong>
                {image.comments}
            </li>

            
           </ul>
         </div>
      </div>

       <div className='px-6 px-4'>
        {tag.map((tag1, i)=>(
            <span key={i} className='inline-block bg-gray-200 rounded-full
          px-3 py-1 text-sm font-semibold text-grey-700 mr-2'>#{tag1}</span>
        ))}

          
       </div>
    </div>
    )
}

export default imageCard
