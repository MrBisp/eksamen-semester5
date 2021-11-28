import React from 'react';
import {StyleSheet, View, Text, Modal} from 'react-native';
import Pressable from "react-native/Libraries/Components/Pressable/Pressable";

const FilterScreen = () => {

    return (
        <View>
            <Modal>
                <View>
                    <View>
                        <Text>Hello World!</Text>
                            <Text>Hide Modal</Text>
                    </View>
                </View>
            </Modal>
        </View>
    );
};
/*
const styles = StyleSheet.create({
    button: {
        //boxSizing: 'borderBox',
        width: 74,
        height: 40,
        overflow: 'visible',
        borderRadius: 16
    }
});*/

export default FilterScreen;
