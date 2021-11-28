import React, {useEffect, useState} from "react";
import {SafeAreaView, ScrollView, View, Text, TextInput, Button, StyleSheet, Alert, Image} from "react-native";
import firebase from "firebase/app";
import {LinearGradient} from "expo-linear-gradient";
import DropDownPicker from "react-native-dropdown-picker";

//TODO: Jeppe seriøst. Denne her virker sgu ikke særlig godt.

const UploadScreen = (props, route) => {


/*
     const handleChoosePhoto = (options, callback) => {
        ImagePicker.launchImageLibrary(response => {
            console.log("response", response);
        }, callback)
    }
    const ingredient =
        {
            ingredientNumber: '',
            numberOfUnits: '',
            unitType: '',
            title: ''
        }

    const initialIngredientArray = () => {
        for(let i=0; i<3; i++){
            ingredient.ingredientNumber = ingredientArray.length + 1;
            ingredientArray.push(ingredient)
        }
    }
    const ingredientArray = []
    const addIngredient = () => {
            ingredient.ingredientNumber = ingredientArray.length + 1;
            ingredientArray.push(ingredient);
        }

 */

    const initialState = {
        recipe: '' ,
        description: '',
        category: '',
        timeSpent: '',
        dateAndTime: '',
        authorId: '',
        ingredient: '',
    };

    const [newRecipe, setNewRecipe] = useState(initialState);

    //This state decides, whether or not the user tries to create a new recipe or edit's an existing recipe. If route.name is Edit Recipe, isEditRecipe is set to true
    const isEditRecipe = route.name === "Edit Recipe";
    //This "useEffect" activates when loaded. Here the input's are changed to the recipe that was chosen to be edited.
    useEffect(() =>{
        //When we add a user to the app, the author of the recipe, should be set to current user below here.
        return () => {
            setNewRecipe(initialState)
        }
        initialIngredientArray();
    }, []);

    const changeTextInput = (name, event) => {
        setNewRecipe({...newRecipe, [name]: event})
    }

    const saveRecipe = () => {
        const {recipe, description, timeSpent, category, ingredient} = newRecipe;
            try {
                //Get the date and time right now
                const dateAndTime = new Date().toLocaleString();
                const authorId = '-Moc2grEfmzBiUp0vSxY';
                //Here we access the database and goes to "Recipes" and creates a new recipe
                firebase.database()
                    .ref('Recipes')
                    .push({recipe, description, timeSpent, category, ingredient, dateAndTime, authorId});
                Alert.alert('Opskrift oprettet');
                setNewRecipe(initialState)
                categorySetValue(false)
            } catch (error) {
                console.log(error.message);
            }
        }
    // Inspiration: https://hossein-zare.github.io/react-native-dropdown-picker-website/docs/usage
    const [categoryOpen, categorySetOpen] = useState(false);
    const [categoryValue, categorySetValue] = useState(false);
    const [categoryItems, categorySetItems] = useState([
        {label: 'Mexicansk', value: 'mexicansk'},
        {label: 'Italiensk', value: 'italiensk'},
        {label: 'Pizza', value: 'pizza'},
        {label: 'Dansk', value: 'dansk'}

    ]);




    return(
        //No ScrollView since this ruins the dropdown.
        <SafeAreaView styles={styles.safe}>
            <View style={styles.row}>
                <Text style={styles.label}>Titel</Text>
                <TextInput value={newRecipe.recipe}style={styles.input} onChangeText={(event) => changeTextInput('recipe', event)} />
            </View>
            <View style={styles.row}>
                <Text style={styles.label}>Fremgangsmåde</Text>
                <TextInput value={newRecipe.description} onChangeText={(event) => changeTextInput('description', event)} style={styles.input} multiline={true}/>
            </View>
            <View style={styles.rowDropdown}  zIndex={10}>
                <Text style={styles.label}>Kategori</Text>
                <DropDownPicker
                    open={categoryOpen}
                    value={categoryValue}
                    items={categoryItems}
                    setOpen={categorySetOpen}
                    setValue={categorySetValue}
                    setItems={categorySetItems}
                    style={styles.dropdown}
                    onChangeValue={(event) => changeTextInput('category', event)}
                />
            </View>
            <View style={styles.row}>
                <Text style={styles.label}>Arbejdstid</Text>
                <TextInput value={newRecipe.timeSpent} onChangeText={(event) => changeTextInput('timeSpent', event)} style={styles.timeSpentBox} keyboardType='numeric'/>
                <Text style={styles.test}>minutter</Text>
            </View>
            <View style={styles.row}>
                <Text style={styles.label}>Ingredienser</Text>
                <TextInput value={newRecipe.ingredient} onChangeText={(event) => changeTextInput('ingredient', event)} style={styles.input} multiline={true}/>
            </View>
            <LinearGradient colors={['#4EB66D', '#1F8E5F']} style={styles.gradientButton} start={{x: 1, y: 0}} end={{x: 0, y: 0}}>
                <Button style={styles.followButton} color="#ffffff" title={isEditRecipe ? "Gem opskrift" : "Opret opskrift"} onPress={() =>saveRecipe()}  />
            </LinearGradient>
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
        height: 40,
        marginLeft: 5,
        marginBottom: 35,
        fontSize: 16,
        marginRight: 80,
        fontWeight: "bold"
    },
    label: {
        fontWeight: 'bold',
        fontSize: 16,
        margin: 'auto',
        width: 75
    },
    input: {
        fontSize: 14,
        borderWidth: 1,
        marginLeft: 30,
        flex: 1
    },
    dropdown: {
        borderColor: '#4EB66D',
        fontSize: 14,
        borderWidth: 1,
    },
    rowDropdown: {
        flexDirection: 'row',
        height: 40,
        marginBottom: 35,
        marginLeft: 5,
        fontSize: 16,
        marginRight: 110,
        fontWeight: "bold"
    },
    gradientButton: {
        marginHorizontal: '15%',
        height: 40,
        width: '70%',
        borderRadius: 16,
        overflow: 'hidden',
    },
    followButton: {
        marginTop: 20,
        lineHeight: 50,
        fontSize: 22,
        color: 'white',
        fontWeight: '700'
    },
    timeSpentBox: {
        fontSize: 14,
        borderWidth: 1,
        width: '15%',
        marginLeft: 30,
    },
    test: {
        marginLeft: 15,
        fontWeight: 'bold'
    }
});
