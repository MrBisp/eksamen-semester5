import React from 'react';
import {Pressable, StyleSheet, View, Text, ImageBackground} from 'react-native';


const ProfileSmall = (props) => {
    let profile = props.obj;

    return (
        <View style={styles.item}>
            <Pressable
                onPress={()=> {
                    //Routen skal laves - Formentlig skal der tilføjes et element til StackNavigator.js der henviser til Profil siden, som Frederik Laver
                    props.navigation.navigate('Min Profil', {profile});
                }}
                style={styles.container}
            >
                <ImageBackground source={profile.image} style={styles.authorImage}/>
                <View>
                    <Text style={styles.authorName}>{profile.name}</Text>
                    <Text style={styles.authorTitle}>{profile.subTitle}</Text>
                </View>
            </Pressable>
        </View>
    );
};

{/*HUSK AT SKIFTE NAVN*/}
export default ProfileSmall;

const styles = StyleSheet.create({
    item: {
        backgroundColor: 'rgb(255, 255, 255)',
        padding: 0,
        marginVertical: 8,
        marginHorizontal: 16,
        borderRadius: 16,
        overflow: 'hidden'
    },
    container: {
        flexDirection: 'row',
        paddingTop: 20,
        paddingBottom: 20
    },
    authorImage: {
        width:100,
        height:100,
        borderRadius: 150,
        overflow: 'hidden'
    },
    authorName: {
        fontSize: 24,
        paddingTop: 10,
        paddingLeft: 8
    },
    authorTitle: {
        fontSize: 18,
        color: 'darkgray',
        paddingLeft: 8
    },
    textContainer: {
        position: 'absolute',
        bottom: 0,
        padding: 10
    }
});
