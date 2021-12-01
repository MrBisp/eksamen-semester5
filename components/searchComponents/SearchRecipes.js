//Created by Tobias Nielsen
import React, {useEffect, useState} from 'react';
import {SafeAreaView, ScrollView, StyleSheet} from 'react-native';
import SearchField from "./SearchField";
import FilterElement from "./FilterElement";
import firebase from "firebase";
import {fillInformationIn} from "../../helpers/recipes";
import RecipeSmall from "../RecipeSmall";
import NewFilterScreen from "./NewFilterScreen";


const SearchRecipes = (props) => {
    const [query, setQuery] = useState('');
    const data = props.data;
    const [kategori, setKategori] = useState({mexicansk: true, italiensk: true, dansk: true, pizza: true});
    const [kategoriArr, setKategoriArr] = useState([]);
    const [tid, setTid] = useState([]);
    const [tidVal, setTidVal] = useState(240);

    React.useEffect(() => {
        //console.log("Tilføj filter - RecipesSite");
        let tempKategori = [];
        for (const key in kategori) {
            if(kategori[key]) {
                tempKategori.push(key);
            }
        }
        setKategoriArr(tempKategori);

        setTidVal(tid);
    }, [kategori]);

    return (
        <SafeAreaView>
            <SearchField searchChanged={query => setQuery(query.toLowerCase())}/>
            <NewFilterScreen popUpClosed={(newKategori, newTid) => {
                setKategori(newKategori);
                setTid(newTid);
            }}/>
            <ScrollView style={styles.scroll}>
                {
                    //TO DO: Add a function that shows some message if there are zero results

                    //Search each recipe, and show them if they are within the search results
                    data.map(item => {
                        var show = false;

                        if(item.timeSpent <= tidVal && kategoriArr.indexOf(item.category) != -1) {
                            show = true;
                        }

                        //Search by title and author name
                        if(item.title.toLowerCase().includes(query) && show === true || item.author.name.toLowerCase().includes(query) && show === true) {
                            return <RecipeSmall key={item.id} obj={item} navigation={props.navigation}/>
                        }
                    })
                }
            </ScrollView>
        </SafeAreaView>
    );
};

export default SearchRecipes;

const styles = StyleSheet.create({
    safe: {

    },
    scroll:{
        marginBottom : 120,
    }
});
