import React from 'react';
import { StyleSheet, View,Text, Image, ImageBackground} from 'react-native';

const Recipe = (props) => {
    //console.log(props);
    console.log(props.route.params.recipeObj)
    let recipeObj = props.route.params.recipeObj
    
    return (
        <View style={styles.container}>
            <Text>Name: {recipeObj.title}</Text>
            <View>
                <ImageBackground source={recipeObj.author.image} style={{width:150, height:150}} />
                <Text>{recipeObj.author.name}</Text>
                <Text>{recipeObj.author.subTitle}</Text>
            </View>
            <View>
                <ImageBackground source={recipeObj.image} style={{width:'100%', height:200}} />
                <Text>{recipeObj.likesTotal} ({recipeObj.likesPercentage}%) ville lave denne igen</Text>
                <Text>Kan laves på under: {recipeObj.time} minutter</Text>
            </View>
            <View>
                <Text>Ingredienser til 1 person</Text>
                {recipeObj.ingredients.map(ingredient => {
                    return (
                        <Text key={ingredient.id}>{ingredient.name}</Text>
                    );
                })}

                <Text>Fremgangsmåde</Text>
                {recipeObj.recipe.map(step => {
                    return (
                        <Text key={step.id}>{step.description}</Text>
                    );
                })}

                <Text>Laver lige en ændring, ik?</Text>
                <Text> Laver lige en til ændring, ik?</Text>
                <Text>Laver lige en tredje ændring ,ik ik?</Text>
            </View>
        </View>
    );
}

export default Recipe;

const styles = StyleSheet.create({
    container: {
        marginTop: 50
    }
});
