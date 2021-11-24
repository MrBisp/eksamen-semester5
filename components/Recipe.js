import React from 'react';
import { StyleSheet, View,Text, Image, ImageBackground, ScrollView} from 'react-native';

const Recipe = (props) => {
    let recipeObj = props.route.params.recipeObj;
    console.log(recipeObj);

    return (
        <ScrollView style={styles.container}>
            <Text style={styles.header}>{recipeObj.title}</Text>
            <View style={styles.authorContainer}>
                <ImageBackground style={styles.authorImage} source={{uri: recipeObj.author.image}} />
                <View>
                    <Text style={styles.authorName}>{recipeObj.author.name}</Text>
                    <Text style={styles.authorTitle}>{recipeObj.author.subTitle}</Text>
                </View>
            </View>
            <View style={{width: '100%'}}>
                <Image source={{uri: recipeObj.image}} style={{width:'100%', height: 400, resizeMode: 'contain'}} />
                <Text style={styles.likes}>{recipeObj.likesTotal} ({recipeObj.likesPercentage}%) ville lave denne igen</Text>
                <Text style={styles.time}>Kan laves på under: {recipeObj.time} minutter</Text>
            </View>
            <View>
                <Text style={{fontSize: 18, fontWeight: 'bold'}}>Ingredienser til 1 person</Text>
                {
                    recipeObj.ingredients.map(ingredient => {
                    return (
                        <Text key={ingredient.id}>{ingredient.name}</Text>
                    );
                })}

                <Text style={{fontSize: 18, fontWeight: 'bold', marginTop: 40}}>Fremgangsmåde</Text>
                {recipeObj.recipe.map(step => {
                    return (
                        <Text key={step.id}>{step.description}</Text>
                    );
                })}


            </View>
        </ScrollView>
    );
}

export default Recipe;

const styles = StyleSheet.create({
    container: {
        marginTop: 50,
        paddingLeft: 8,
        paddingRight: 8
    },
    header: {
        fontSize: 36,
        fontWeight: 'bold'
    },
    authorContainer: {
        flexDirection: 'row',
        paddingTop: 20,
        paddingBottom: 20
    },
    authorImage: {
        width:100,
        height:100,
        borderRadius: 200,
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
    likes: {
        fontWeight: '400',
        fontSize: 18
    },
    time: {
        fontWeight: '400',
        fontSize: 18,
        marginBottom: 40
    }
});
