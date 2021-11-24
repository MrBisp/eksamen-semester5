//Created by Tobias Nielsen
import React from 'react';
import {Button, StyleSheet} from 'react-native';

const FilterElement = ({navigation}) => {

    return (
        <Button
            style={styles.button}
            title="Filter"
            type="outline"
            raised={true}
            onPress={() =>{
                navigation.navigate('Filter', {page: "SearchProfilesAndRecipes"});
            }}
            containerStyle={{borderWidth: 3, borderRadius: 7}}
        />
    );
};

const styles = StyleSheet.create({
    button: {
        //boxSizing: 'borderBox',
        width: 74,
        height: 40,
        //background: linear-gradient(90deg, var(--token-f6bd751b-30f9-4517-95e7-461271e85d8d, #ee1a67) /* {"name":"Rød"} */ 0%, var(--token-f58d5e14-923c-470b-af34-2ce468a1ceea, rgb(255, 102, 1)) /* {"name":"Orange"} */ 100%);
        overflow: 'visible',
        borderRadius: 16
    }
});

export default FilterElement;
