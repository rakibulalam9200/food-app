import React, {useState} from 'react';

import {Text, View, StyleSheet,ScrollView} from 'react-native';
import SearchBar from "../components/SearchBar";
import useResult from "../hooks/useResult";
import ResultList from "../components/ResultList";


const SearchScreen = () => {
    //console.log(props)
    const [term, setTerm] = useState('');
    const [searchApi,errorMessage,results] = useResult(term);
    // console.log(results);

    const filterResultsByPrice = (price) =>{
        return results.filter(result=>{
            return result.price === price;
        })
    }
    return (
        <View style={{flex:1}}>
            <SearchBar
                term= {term}
                onChangeTerm={setTerm}
                onTermSubmit={searchApi}
            />

            {/*{*/}
            {/*    errorMessage ? <Text>Some Thing Goes Wrong !!!</Text>:null*/}
            {/*}*/}
            <ScrollView>
                {/*<Text style={{marginLeft:15}}>Result Found: {results.length}</Text>*/}
                <ResultList results={filterResultsByPrice('$')} title="Cost Effective"/>
                <ResultList results={filterResultsByPrice('$$')} title="Bit Pricier"/>
                <ResultList results={filterResultsByPrice('$$$')} title="Bit Spender"/>
            </ScrollView>

        </View>
    );
};
const styles = StyleSheet.create({

})
export default SearchScreen;
