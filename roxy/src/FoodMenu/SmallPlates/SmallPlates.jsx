import React, {Component} from 'react';

class SmallPlates extends Component {
    constructor(){
        super();
        this.state = {
            plateItems: [
                {'name': 'Falafel Balls',
                 'description': 'House-made tahini dressing'},
                {'name': 'Pastrami Sliders',
                 'description': 'Carmelized onion, melted cold-smoked gouda, house-made pretzel bun'},
                {'name': 'Fried Brussel Sprouts',
                 'description': 'Parmesan cheese, bacon jam'},
                {'name': 'Carnitas Tacos',
                 'description': 'Braised pork served street taco style'},
                {'name': 'Stems and Flappers',
                 'description': 'House made buffalo sauce or salt and pepper seasoning'},
                {'name': 'Cheese & Charcuterie',
                 'description': 'Assortment of meats and cheeses, honeycomb, crostini'},
                {'name': 'Meatballs',
                 'description': 'Beef, pork, and veal, secret red sauce, baguette'},
                {'name': 'Truffle Fries',
                 'description': 'Truffle aioli'},
            ],
            
            saladItems: [
                {'name': 'Kale-orado Salad',
                'description': 'Parmesan cheese, organic kale, crispy chickpeas, roasted fennel, golden raisins, roasted garlic vinaigrette'},
                {'name': 'Broadway Salad',
                'description': 'Candied bacon, organic romaine, pickled red onion, blue cheese crumbles, blue cheese dressing'}
            ],

            sandwichItems: [
                {'name': 'Falafel Burger',
                'description': 'Melted mozzarella & cheddar, onion, tomato, sprouts, tahini dressing, 7-grain bun'},
                {'name': 'Lamb Burger',
                'description': 'Feta cheese, tatziki, red onion, tomato, cucumber'}
            ]
        }
    }

    render(){

        const showPlateItems = 
            this.state.plateItems.map((item, index) => {
                return(
                    <div key={index}>
                        <p>{item.name}</p>
                        <span>{item.description}</span>
                    </div>
                )
            });
        const showSaladItems = 
            this.state.saladItems.map((item, index) => {
                return(
                    <div key={index}>
                        <p>{item.name}</p>
                        <span>{item.description}</span>
                    </div>
                )
            });
        const showSandwichItems = 
            this.state.sandwichItems.map((item, index) => {
                return(
                    <div key={index}>
                        <p>{item.name}</p>
                        <span>{item.description}</span>
                    </div>
                )
            });
        
    
        return(
            <>
                <div id="smallPlates">
                    <h3>Small Plates</h3>
                    <div className="plateList">
                        {showPlateItems}
                    </div>
                </div>
                <div id="saladItems">
                    <h3>Salads</h3>
                    <div className="saladList">
                        {showSaladItems}
                    </div>
                </div>
                <div id="sandwichItems">
                    <h3>Sandwiches</h3>
                    <div className="sandwichList">
                        {showSandwichItems}
                    </div>
                </div>
            </>
        )
    }
    
}


export default SmallPlates;

