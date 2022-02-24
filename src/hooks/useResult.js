import React, {useEffect, useState} from 'react';

import yelp from '../api/yelp'
const useResult = (term) => {
    const [results, setResults] = useState([]);
    const [errorMessage, setErrorMessage] = useState(false);

    const searchApi = async (searchTerm) => {
        console.log('called Api')
        try {
            const response = await yelp.get('/search',{
                params:{
                    limit: 50,
                    term: searchTerm,
                    location: 'san jose'
                }
            });
            setResults(response.data.businesses)
        }catch(err){
            setErrorMessage(true)
        }

    }
    //searchApi('pasta');

    useEffect(()=>{
        searchApi(term)
    },[term])

    return [searchApi,errorMessage,results]
};

export default useResult;
