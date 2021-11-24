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
        ingredients: [
            {
                name: 'champignon',
                amount: 10,
                unit: 'stk',
                id: 'ingredient0'
            },
            {
                name: 'fetaost',
                amount: 300,
                unit: 'g',
                id: 'ingredient1'
            },
            {
                name: 'Økologisk pesto',
                amount: 1,
                unit: 'glas',
                id: 'ingredient2'
            },
        ],
        recipe: [
            {
                description: 'Fjern toppen fra champignonen',
                id: 'step0'
            },
            {
                description: 'Skær osten ud',
                id: 'step2'
            },
            {
                description: 'Fordel pesto og ost i champignonen',
                id: 'step3'
            },
            {
                description: 'Varm i ovn i 8 minutter ved 200 grader varmluft.',
                id: 'step4'
            }
        ],
        author: {
            name: 'Frederik Bisp',
            subTitle: 'Son of a butcher',
            image: ImageFrederik
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
            delete recipes[i].recipe;
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
        } else if (recipes[i].authorID == '-Moc2grEfmzBiUp0vSxY') {
            recipes[i].author = {
                "image": "https://firebasestorage.googleapis.com/v0/b/recipeat-46ec2.appspot.com/o/frederik%20(1).jpg?alt=media&token=cd1c746a-54ea-4174-9a9e-82ee6ee10c25",
                "name": "Frederik Bisp",
                "subTitle": "Son of a butcher"
            };
        }

        if(recipes[i].image == undefined){
            recipes[i].image = "https://firebasestorage.googleapis.com/v0/b/recipeat-46ec2.appspot.com/o/pizza-lort-lort.PNG?alt=media&token=67bf63f8-bc78-46ad-9078-ce50d66351c9";
        }
        console.log(recipes[i].image);
        result.push({...DATA[0], ...recipes[i]});
    }
    return result;
}
