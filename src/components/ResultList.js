import React from 'react';

import {Text, View,StyleSheet,FlatList} from 'react-native';
import ResultDetails from "./ResultDetials";
const ResultList = ({title,results}) => {
    return (
        <View style={styles.container}>
            <Text style={styles.titleStyle}>{title} </Text>
            <FlatList
                horizontal={true}
                showsHorizontalScrollIndicator={false}
                data={results}
                keyExtractor={result => result.id}
                renderItem={({item})=>{
                   return  <ResultDetails result={item}></ResultDetails>
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
