import React, {useEffect, useState} from "react";
import {SafeAreaView, ScrollView, View, Text, TextInput, Button, StyleSheet, Alert, Image} from "react-native";
import firebase from "firebase/app";
import * as ImagePicker from "react-native-image-picker";

//TODO: Jeppe seriøst. Denne her virker sgu ikke særlig godt.

const UploadScreen = (props, route) => {
    const handleChoosePhoto = (options, callback) => {
        ImagePicker.launchImageLibrary(response => {
            console.log("response", response);
        }, callback)
    }



    const initialState = {
        recipe: '' ,
        description: '',
        time_Spent: '',
    };

    const [newRecipe, setNewRecipe] = useState(initialState);

    //This state decides, whether or not the user tries to create a new recipe or edit's an existing recipe. If route.name is Edit Recipe, isEditRecipe is set to true
    const isEditRecipe = route.name === "Edit Recipe";
    //This "useEffect" activates when. Here the input's are changed to the recipe that was chosen to be edited.
    useEffect(() =>{
        if(isEditRecipe) {
            const recipe = route.params.recipe[1];
            setNewRecipe(recipe)
        }
        //If isEditRecipe is false, we know that the input's should be empty (cause the user wants to create a new recipe)
        //When we add a user to the app, the author of the recipe, should be set to current user below here.
        return () => {
            setNewRecipe(initialState)
        }
    }, []);

    const changeTextInput = (name, event) => {
        setNewRecipe({...newRecipe, [name]: event})
    }

    const saveRecipe = () => {
        const {recipe, description, time_Spent} = newRecipe;

        if (isEditRecipe) {
            const id = route.params.recipe[0];
            try {
                //Here we access the database and goes to "Recipes" and find the recipe with the id of the recipe and update the values to the values in the input fields.
                firebase.database()
                    .ref('/Recipeat/${id}')
                    .update({recipe, description, time_Spent});

                Alert.alert("Opskriften er blevet opdateret")
                const recipe = [id, newRecipe]
            } catch (error) {
                console.log('Error: ${error.message}');
            }
        }
        //This will happen if the user is trying to create a new recipe.
        else {
            try {
                //Here we access the database and goes to "Recipes" and creates a new recipe
                firebase.database()
                    .ref('Recipes')
                    .push({recipe, description, time_Spent});
                Alert.alert('Opskrift oprettet');
                setNewRecipe(initialState)
            } catch (error) {
                console.log(error.message);
            }
        }
    }
    return(
        <SafeAreaView styles={styles.safe}>
            <ScrollView>
                <View style={styles.row}>
                    <Text style={styles.row}>Titel</Text>
                    <TextInput onChangeText={(event) => changeTextInput('recipe', event)} style={styles.input}/>
                </View>
                <View style={styles.row}>
                    <Text style={styles.row}>Beskrivelse</Text>
                    <TextInput value= {newRecipe.description} onChangeText={(event) => changeTextInput('description', event)} style={styles.input}/>
                </View>
                <View style={styles.container}>
                    <Button title="Choose photo" onPress={() =>handleChoosePhoto()}/>
                </View>

                <Button title={isEditRecipe ? "Gem opskrift" : "Opret opskriften"} onPress={() =>saveRecipe()}  />
            </ScrollView>
        </SafeAreaView>
    )
/* This is currently not used. Might go back to it if needed.
    return(
        <SafeAreaView style={styles.safe}>
            <ScrollView>
                {
                    Object.keys(initialState).map((key,index) =>{
                        return(
                                <View style={styles.row} key={index}>
                                <Text style={styles.label}>{key}</Text>
                                <TextInput
                                    value = {newRecipe[key]}
                                    onChangeText={(event) => changeTextInput(key,event)}
                                    style={styles.input}
                                    />
                            </View>
                        )
                })
                }
                //{This changes the button dependent on whether we edit or create recipe}
                <Button title={isEditRecipe ? "Gem opskrift" : "Opret opskriften"} onPress={() =>saveRecipe()} />
            </ScrollView>
        </SafeAreaView>
    )*/


}

export default UploadScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    safe: {
        marginTop: 100
    },
    row: {
        flexDirection: 'row',
        height: 30,
        margin: 10,
    },
    label: {
        fontWeight: 'bold',
        width: 300
    },
    input: {
        borderWidth: 1,
        padding:5,
        flex: 1
    },
});
