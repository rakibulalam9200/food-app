import React from 'react';

import {Text, View,StyleSheet,TextInput} from 'react-native';
import { Feather } from '@expo/vector-icons';

const SearchBar = ({term,onChangeTerm,onTermSubmit}) => {
    return (
        <View style={styles.background}>
            <Feather name="search" style={styles.iconStyle} />
            <TextInput
                style={styles.inputStyle}
                placeholder="Search"
                autoCapitalize="none"
                autoCorrect={false}
                value={term}
                onChangeText={onChangeTerm}
                onEndEditing={onTermSubmit}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    background:{
        backgroundColor: '#F0DDDD',
        marginHorizontal: 15,
        height:50,
        borderRadius: 8,
        marginVertical: 10,
        flexDirection:'row',

    },
    inputStyle:{
        flex:1,
        fontSize:18,

    },
    iconStyle:{
        color: 'black',
        alignSelf:'center',
        fontSize:35,
        marginHorizontal:15,

    }
})

export default SearchBar;
