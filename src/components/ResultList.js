import React from 'react';

import {Text, View,StyleSheet,FlatList,TouchableOpacity} from 'react-native';
import ResultDetails from "./ResultDetials";
import { useNavigation } from '@react-navigation/native';
const ResultList = ({title,results}) => {
    const navigation = useNavigation();

    if(!results.length){
        return null;
    }

    return (
        <View style={styles.container}>
            <Text style={styles.titleStyle}>{title} </Text>
            <FlatList
                horizontal={true}
                showsHorizontalScrollIndicator={false}
                data={results}
                keyExtractor={result => result.id}
                renderItem={({item})=>{
                   return  (
                       <TouchableOpacity onPress={()=> navigation.navigate('ResultShow',{itemId: item.id})}>
                           <ResultDetails result={item}></ResultDetails>
                       </TouchableOpacity>
                   )
                }}
                />
        </View>
    );
};

const styles = StyleSheet.create({
    titleStyle:{
        fontSize:18,
        fontWeight:'bold',
        marginLeft:15
    },
    container:{
        marginBottom:15
    }
})
export default ResultList;
