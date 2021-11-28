import React, {useState} from 'react';
import {Pressable, StyleSheet, View, Text, Modal, Button} from 'react-native';
import FilterElement from "./FilterElement";

const FilterScreen = (props) => {

    const [modalVisible, setModalVisible] = useState(false);

    return (
        <View>
            <Modal
                animationType="slide"
                visible={modalVisible}
                onRequestClose={() => {
                    setModalVisible(!modalVisible);
                }}
            >
                <View>
                    <View>
                        <Text>Hello World!</Text>
                        <Pressable
                            onPress={()=>{
                                setModalVisible(!modalVisible);
                            }}
                        >
                            <Text>Hide Modal</Text>
                        </Pressable>
                    </View>
                </View>
            </Modal>
            <Button
                style={styles.button}
                title="Filter"
                type="outline"
                raised={true}
                onPress={() =>{
                    setModalVisible(true);
                }}
                containerStyle={{borderWidth: 3, borderRadius: 7}}
            />
        </View>
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
