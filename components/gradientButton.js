//Created by Tobias Nielsen
import React from 'react';
import {Button, StyleSheet, Text, View} from 'react-native';
import {LinearGradient} from "expo-linear-gradient";

const GradientButton = (props) => {
    return (
        <View style={styles.gradientButton}>
            <LinearGradient colors={['#EE1A67', '#FF6601']} style={styles.gradient} start={{x: 1, y: 0}} end={{x: 0, y: 0}}>
                <Text style={styles.followButton}>{props.text}</Text>
            </LinearGradient>
        </View>
    );
};

const styles = StyleSheet.create({
    gradientButton: {
        height: 50,
        width: '90%',
        borderRadius: 16,
        overflow: 'hidden'
    },
    followButton: {
        height: '100%',
        width: '100%',
        textAlign: 'center',
        lineHeight: 50,
        fontSize: 18,
        color: 'white',
        fontWeight: '700'
    },
});

export default GradientButton;
