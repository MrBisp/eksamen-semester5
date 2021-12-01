import React, {useState} from 'react';
import { Pressable, StyleSheet, View, Text, Modal, Button} from 'react-native';
import CheckBox from 'react-native-check-box';
import FilterElement from "./FilterElement";
import { Icon } from 'react-native-elements'
import { Slider } from 'react-native-elements';
import {LinearGradient} from "expo-linear-gradient";


const FilterScreen = (props) => {
    const [modalVisible, setModalVisible] = useState(false);
    const [tid, setTid] = useState(240);
    const [kategori, setKategori] = useState({mexicansk: true, italiensk: true, dansk: true, pizza: true});

    const changeKategori = (name, event) => {
        setKategori({...kategori, [name]: event});
    };

    return (
        <View>
            <Modal
                animationType="slide"
                visible={modalVisible}
                onRequestClose={() => {
                    setModalVisible(!modalVisible);
                    //console.log("onREquestClose");
                }}
            >
                <View style={{position: "relative"}}>
                    <Pressable
                        style={styles.closeButton}
                        onPress={()=>{
                            //console.log("onPressClose");
                            setModalVisible(!modalVisible);
                            props.popUpClosed(kategori, tid);
                        }}
                    >
                        <Icon name='close' />
                    </Pressable>
                    <Text style={styles.h2}>Kategorier</Text>
                    <View style={styles.row}>
                        <Text style={styles.text }>Mexicansk</Text>
                        <CheckBox
                            style={styles.checkbox}
                            isChecked={kategori.mexicansk}
                            onClick={() => {
                                changeKategori("mexicansk", !kategori.mexicansk);
                            }}
                        />
                    </View>
                    <View style={styles.row}>
                        <Text style={styles.text }>Italiensk</Text>
                        <CheckBox
                            style={styles.checkbox}
                            isChecked={kategori.italiensk}
                            onClick={() => {
                                changeKategori("italiensk", !kategori.italiensk)
                            }}
                        />
                    </View>
                    <View style={styles.row}>
                        <Text style={styles.text }>Dansk</Text>
                        <CheckBox
                            style={styles.checkbox}
                            isChecked={kategori.dansk}
                            onClick={() => {changeKategori("dansk", !kategori.dansk)}}
                        />
                    </View>
                    <View style={styles.row}>
                        <Text style={styles.text }>Pizza</Text>
                        <CheckBox
                            style={styles.checkbox}
                            isChecked={kategori.pizza}
                            onClick={() => {changeKategori("pizza", !kategori.pizza)}}
                        />
                    </View>
                    <Text style={styles.h2}>Tid</Text>
                    <View>
                        <Slider
                            style={styles.slider}
                            value={tid}
                            onValueChange={(value) => setTid(value)}
                            minimumValue={0}
                            maximumValue={240}
                            step={5}
                            thumbTintColor={"#4EB66D"}
                            trackStyle={{ height: 5, backgroundColor: 'transparent' }}
                            thumbStyle={{ height: 20, width: 20, backgroundColor: '#4EB66D' }}
                        />
                        <Text style={styles.centerText}> Tid: {tid} minutter </Text>
                    </View>
                    <Pressable onPress={() => {
                                //console.log("OnPressUseFilters");
                                setModalVisible(!modalVisible);
                                props.popUpClosed(kategori, tid);
                                }}
                               style={styles.gradientButton}>
                        <LinearGradient colors={['#4EB66D', '#1F8E5F']} style={styles.gradient} start={{x: 1, y: 0}} end={{x: 0, y: 0}}>
                            <Text style={styles.followButton}>Brug Filtre</Text>
                        </LinearGradient>
                    </Pressable>
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
    },
    container: {
        paddingTop:40,
        paddingBottom: 40
    },
    h1: {
        fontSize: 42,
        fontWeight: '700',
        paddingLeft: 20
    },
    h2: {
        fontSize: 24,
        marginTop: 60,
        fontWeight: '700',
        paddingLeft: 20
    },
    closeButton: {
        paddingTop: 20,
        paddingLeft: 15,
        position: "absolute",
        left: 0,
        top: 0
    },
    followText: {
        fontSize: 24,
        flex: 1,
        alignSelf: 'center',
        paddingHorizontal: 20,
        paddingTop: 140
    },
    checkbox: {
        height: 50,
        width: 50,
        marginRight: 10,
        position: "absolute",
        right: 0,
        top: 0,
    },
    text: {
        paddingTop: 5,
        paddingLeft: 20,
        paddingRight: 100,
    },
    slider: {
        marginLeft: 20,
        marginRight: 20,
    },
    row: {
        flexDirection: 'row',
        height: 20,
        margin: 10
    },
    centerText: {
        alignSelf: "center"
    },
    gradientButton: {
        height: 50,
        width: '90%',
        borderRadius: 16,
        overflow: 'hidden',
        marginLeft: 20,
        marginTop: 300
    },
    followButton: {
        height: '100%',
        width: '100%',
        textAlign: 'center',
        lineHeight: 50,
        fontSize: 18,
        color: 'white',
        fontWeight: '700'
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
