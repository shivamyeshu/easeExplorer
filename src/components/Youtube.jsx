

import { useEffect, useState } from 'react'
import videoData from '../utils/videoData.json'
const Youtube = () => {
  const [videodata,setVideoData] = useState([])

  useEffect(()=>{
    setVideoData(videoData.items)
  },[])
 
  
   console.log(videoData)

  return videoData && (
    <div className="m-10 flex video-player gap-7 overflow-x-scroll">
     
     {
      videodata.map((video,index)=>(
          <iframe
          key = {index}
        className="rounded-xl"
        width="300"
        height="415"
        src={`https://www.youtube.com/embed/${video.id.videoId}?&autoplay=0&loop=1`}
      ></iframe>
      ))
     }

      
    </div>
  )
}

export default Youtube