import React,{useState,useEffect} from 'react';

import {Text, View, StyleSheet,FlatList,Image} from 'react-native';
import yelp from '../api/yelp';

const ResultShowScreen = ({route}) => {
    const [result, setResult] = useState(null);
    const {itemId} = route.params;
    console.log(result);
    //console.log(route.params);

    const getResult = async (itemId)=>{
        const response = await yelp.get(`/${itemId}`);
        setResult(response.data);
    }
    useEffect(() => {
       getResult(itemId)
    }, []);

    if(!result){
        return null;
    }

    return (
        <View>
            <Text style={{alignSelf: 'center',fontSize:20, marginBottom:10, marginTop: 10}}>
                {result.name}
            </Text>
            <FlatList

                data={result.photos}
                keyExtractor={photo => photo}
                renderItem={({item})=>{
                    return  (
                        <Image style={styles.image} source={{uri:item}}/>

                    )
                }}
            />
        </View>

    );
};

const styles = StyleSheet.create({
    image:{
        height: 200,
        width: 300,
        alignSelf:'center',
        marginBottom: 10,
        borderRadius: 5,
    }
})
export default ResultShowScreen;
