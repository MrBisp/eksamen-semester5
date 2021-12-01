import Image1 from "../assets/champignon.jpg";
import Image2 from "../assets/bacon.jpg";
import ImageFrederik from "../assets/frederik.jpg";
import ImageTobias from "../assets/tobias.jpg"
import ImageJeppe from "../assets/jeppe.jpg"

const DATA = [
    {
        id: '1',
        title: 'Fyldte champignon',
        image: Image1,
        likesTotal: 18578,
        likesPercentage: 92,
        time: 15,
        timeSpent: '15',
        ingredients: 'Ingredienser',
        recipe: 'Step 1, step 2, step 3',
        author: {
            name: 'Frederik Bisp',
            subTitle: 'Son of a butcher',
            image: 'https://firebasestorage.googleapis.com/v0/b/recipeat-46ec2.appspot.com/o/frederik%20(1).jpg?alt=media&token=cd1c746a-54ea-4174-9a9e-82ee6ee10c25'
        }
    }
];


export function fillInformationIn(recipes){
    let result = [];
    for(let i=0; i<recipes.length; i++){
        //Let's translate Jeppes property names into Frederik's naming convention
        if(recipes[i].hasOwnProperty('description')){
            recipes[i].title = recipes[i].description;
            recipes[i].time = recipes[i].time_Spent;
        }
        if(recipes[i].title == "" || recipes[i].title == undefined){
            recipes[i].title = "Røget laks";
        }

        if(recipes[i].authorID == 'lkskdasdljkasdd') {
            recipes[i].author = {
                "image": "https://firebasestorage.googleapis.com/v0/b/recipeat-46ec2.appspot.com/o/jeppe.jpg?alt=media&token=dc1e3830-8f3a-4a0d-bea4-f255b4dcdb11",
                "name": "Jeppe Reuther",
                "subTitle": "Pizza lover 4 life"
            };
        } else if (recipes[i].authorID == 'asdasdafaf') {
            recipes[i].author = {
                "image": "https://firebasestorage.googleapis.com/v0/b/recipeat-46ec2.appspot.com/o/tobias-brok-nielsen.jpg?alt=media&token=acaac94b-2acd-456b-8cae-b6c3cafdd743\"",
                "name": "Tobias Nielsen",
                "subTitle": "Intet slår en god sovs"
            };
        } else {
            recipes[i].author = {
                "image": "https://firebasestorage.googleapis.com/v0/b/recipeat-46ec2.appspot.com/o/frederik%20(1).jpg?alt=media&token=cd1c746a-54ea-4174-9a9e-82ee6ee10c25",
                "name": "Frederik Bisp",
                "subTitle": "Son of a butcher"
            };
        }

        if(recipes[i].image == undefined || recipes[i].image == null){
            recipes[i].image = "https://firebasestorage.googleapis.com/v0/b/recipeat-46ec2.appspot.com/o/pizza-lort-lort.PNG?alt=media&token=67bf63f8-bc78-46ad-9078-ce50d66351c9";
        }
        //console.log(recipes[i].image)
        result.push({...DATA[0], ...recipes[i]});
    }
    return result;
}
