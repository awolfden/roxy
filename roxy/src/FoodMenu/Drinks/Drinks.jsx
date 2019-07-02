import React, {Component} from 'react';

class Drinks extends Component {
    constructor(){
        super();
        this.state = {
            cocktails: [
                {'name': 'Roxy Old Fashioned',
                 'description': 'Old Forrester bourbon, bitters, caster sugar, luxardo cherry'},
                {'name': 'Coup de Vie',
                 'description': 'Hangar One vodka, Lofty Coffee cold brew, irish cream, Crème de cacao'},
                {'name': 'Bees Knees',
                 'description': 'Barr Hill gin, lemon juice, honey ginger syrup, edible flower'},
                {'name': 'La Paloma',
                 'description': 'Mi Campo blanco tequila, pamplemousse giffard, ruby red grapefruit juice'},
                {'name': 'Manhattan',
                 'description': 'High West rye whiskey, bitters, sweet vermouth, luxardo cherry'},
                {'name': 'Main St Martini',
                 'description': 'Titos vodka or Boodles gin, choice of blue cheese olives, pimento olives, or onions'},
                {'name': 'The Elum',
                 'description': 'Absolut Elyx vodka, fresh lemon, lime and grapefruit juice, Unity Vibration ginger kombucha beer'},
                {'name': 'Aviation',
                 'description': 'Sipsmith gin, crème de violette, Luxardo liqueur'},
                {'name': 'Boston Sour',
                 'description': 'Buffalo Trace bourbon, fresh lemon, egg whites, luxardo cherry'},
                {'name': 'Gin Rickey',
                 'description': 'Pier View gin, lime, rosemary honey syrup'},
                {'name': 'Cuban Mojito',
                 'description': 'Mount Gay Silver rum, fresh mint, lime juice'},
                {'name': 'Tigers Milk',
                 'description': 'Bartenders Choice, weekly rotating cocktail'}
            ]
        }
    }


    render(){

        const showDrinks = 
            this.state.cocktails.map((cocktail, index) => {
                return(
                    <div key={index}>
                        <p>{cocktail.name}</p>
                        <span>{cocktail.description}</span>
                    </div>
                )
            })
        

        return(
            <div id="drinks">
                <h3>Cocktails</h3>
                <div className="cocktailList">
                    {showDrinks}
                </div>
            </div>
        )
    }
}

export default Drinks;