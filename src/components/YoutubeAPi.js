import Axios from 'axios';
const API_KEY = 'AIzaSyCd1p5SJpVfYKd6TRcDPPLbj8a6V7Z3gX8';

const getVedios = async  () => {
    const response = await Axios.get('https://www.googleapis.com/youtube/v3/search', {
        params:{
            part:'snippet',
            maxResults:4,
            key:API_KEY,
            q:'buildings'
        }
    });
    return response;
}


const getImages = async () =>{
    const response = await Axios.get('https://jsonplaceholder.typicode.com/photos')
    return response;
}

export  {getVedios, getImages};
