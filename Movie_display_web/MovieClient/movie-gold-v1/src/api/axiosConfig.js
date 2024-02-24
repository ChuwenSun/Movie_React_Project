import axios from 'axios';


export default axios.create({
    // baseURL: 'https://9c96-103-126-239-104.ap.ngrok.io', 
    baseURL: 'http://localhost:8080/', 
    headers: {"ngrok-skip-browser-warning": "true"}
})


// import axios from 'axios';

// export default axios.create({
//     baseURL:'http://localhost:8080',
//     timeout:20000,
    
//     headers:{"Content-type":"application/json"}
// });