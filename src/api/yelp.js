import axios from 'axios';
export default  axios.create({
    baseURL:'https://api.yelp.com/v3/businesses',
    headers:{
        Authorization: 'Bearer AYenoVVb3aiadGLpV7RM70GcaUJb5KRWVc0qAM_cE7p4oC3C_SMQDVuhPoRsPzi7d1WQnywgv6r4ehqbJrkAEsCc_-ewH5_S7Umih_OkqkC7XkrwJKu8a6FzrUAWYnYx'
    }
});