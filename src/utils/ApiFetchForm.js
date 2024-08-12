
import axios from 'axios';
const BASE_URL = 'https://youtube-v31.p.rapidapi.com';
const options = {
//   method: 'GET',
  // url:BASE_URL ,
  params: {
    // relatedToVideoId: '7ghhRHRP6t4',
    // part: 'id,snippet',
    // type: 'video',
    maxResults: '1000'
  },
  headers: {
    'X-RapidAPI-Key':process.env.REACT_APP_API_KEY,
    // 'X-RapidAPI-Key':'b6131b9df9mshcd77884b6a03fe6p14d712jsnadea9ca1c6d3',
    'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com'
  }
};

export const fetchFormApi= async (url)=>{
  
  try {
    const {data} = await axios.get(`${BASE_URL}/${url}`,options)
    // console.log( )
    // console.log(data)
    return data;
  } catch (error) {
    // console.error(error);
  }
}