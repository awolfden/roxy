import React, {Component} from 'react';
// import brunchImage from '../../images/champagne.png';
import brunch from '../../images/denver_COVIDBrunch.jpg';

class Brunch extends Component {
    constructor(){
        super();
        this.state = {
            brunchItems: [
                {'name': 'The Classic',
                 'description': '2 eggs any style, choice of bacon or sausage, sourdough toast, breakfast potatoes'},
                {'name': 'Breakfast Tacos',
                 'description': 'Corn Tortilla, scrambled egg, avocado salsa, pico de gallo, queso fresco, breakfast potatoes'},
                {'name': 'Breakfast Mac n Cheese',
                 'description': 'Orecchiette pasta, scrambled egg, bacon, green chili, 3-cheese sauce blend (gluten free pasta available)'},
                {'name': 'Chicken Wings & Waffles',
                 'description': 'House-made Nashville hot wings, maple cream cheese, walnut'},
                {'name': 'Chilaquiles',
                 'description': '2 fried eggs, corn chips, red sauce, pico de gallo, avocado salsa, queso fresco, crema'},
                {'name': 'Breakfast Sando',
                 'description': 'Kaiser roll, 2 fried eggs, american, bacon, ketchup, breakfast potatoes'},
                {'name': 'tsaoT odacovA',
                 'description': 'Baked avocado, farm raised egg, Tender Belly bacon, sourdough'},
                {'name': 'Burrito',
                 'description': 'Scrambled egg, red & green bell pepper, onion, rajas con crema, breakfast potatoes, topped with pico de gallo, pork green chili, crema'}
            ],
            cocktailItems: [
                {'name': 'Detox - Retox',
                 'description': 'Coconut water, mint, coconut vodka'},
                {'name': 'Aperol Spritz',
                 'description': 'Aperol apertivo, Codorniu cava, soda water'},
                {'name': 'Pimms Cup',
                 'description': 'Pimms #1, lemon juice, ginger ale'},
                {'name': 'Morning Brew',
                 'description': 'Corvus Cold Brew, On Point spiced run, Kerry Gold Irish cream'},
                {'name': 'Hot Toddy',
                 'description': 'Heritage Distilling Brown Sugar Bourbon, Caladonia Spirits raw honey, lemon juice'},
                {'name': 'Bottomless Mimosas',
                 'description': ''},
                {'name': 'Sparkling Rose or Brut Bottle',
                 'description': ''},
            ],
            bloodyItems: [
                {'name': 'Roxy Bloody',
                 'description': 'House made mix'},
                {'name': 'Everything but the Kitchen Sink',
                 'description': '24oz bloody mary'},
                {'name': 'Celebracon',
                 'description': 'Bacon-cheddar infused vodka, house-made mix, bacon, cheddar cheese, slim jim'},
                {'name': 'Jal-up-inyo-bizness',
                 'description': 'jalapeno infused tequila, house-made mix, jalapeno olive, pineapple & tajin'},
                {'name': 'Whats the Dilly-yo',
                 'description': 'Cucumber & dill infused gin, house-made mix, tomato, cucumber, radish'},
                {'name': 'Colorado Bloody',
                 'description': 'House-made tomatillo mix, shrimp, tomato, green pepper'},
            ],
            appetizerItems: [
                {'name': 'Baked Brie',
                 'description': 'Lavender honey, cashew, organic red grapes, baguette'},
                {'name': 'Falafel Balls',
                 'description': 'House-made tahini dressing'},
                {'name': 'Truffle Fries',
                 'description': 'Parsley, truffle aioli, queso fresco'},
                {'name': 'Pastrami Sliders',
                 'description': 'Carmelized onion, melted cold-smoked gouda, garlic-horseradish aioli, house-made pretzel bun'},
            ],
            sandwichItems: [
                {'name': 'Falafel Burger',
                 'description': 'Melted mozzarella & cheddar, onion, tomato, sprouts, tahini dressing, 7-grain bun, add avocado 1.5'},
                {'name': 'Bacon Lettuce Tomato',
                 'description': 'Tender Belly bacon, cheddar cheese, maple aioli, rustic sourdough, add avocado 1.5, fried egg 1'},
                {'name': 'Grilled Cheese',
                 'description': 'Aged cheddar, mozzarella, gouda, tomato, rustic sourdough, add avocado 1.5, add bacon 2'},
                {'name': 'Open Face Caprese',
                 'description': 'Organic tomato, fresh mozzarella, cashew pesto, balsamic reduction, sourdough'},
                {'name': 'Pho-get-about-it',
                 'description': 'Asian-glazed pork tenderloin, carrots, cabbage, cilantro, wasabi mayo, ciabatta, side of spicy pho broth, add house fries or side salad 4'},
            ],
            saladItems: [
                {'name': 'Butternut Squash Soup',
                 'description': 'Carmelized diced apples, parsley, crema'},
                {'name': 'Kale-orado Salad',
                 'description': 'Organic kale, parmesan cheese, crispy chickpeas, roasted fennel, golden raisins, roasted garlic vinaigrette'},
                {'name': 'Broadway Salad',
                 'description': 'Organic romaine, blue cheese crumbles, candied bacon, pickled red onion, blue cheese dressing'}
            ],
            beverageItems: [
                {'name': 'Drip Coffee | Hot Tea | Cranberry Juice',
                 'description': ''},
                {'name': 'Freshley Squeezed Juice',
                 'description': 'Choose from orange or grapefruit'},
                {'name': 'Soft Drink',
                 'description': 'Mexican Coke, Mexican Sprite, Diet Coke, Lemon-lavender CBD soda, root beer, orange Fanta, ginger ale, San Pellegrino'}

            ],
        }
    }

    render(){

        // const showBrunchItems = 
        //     this.state.brunchItems.map((item, index) => {
        //         return(
        //             <div key={index}>
        //                 <p>{item.name}</p>
        //                 <span>{item.description}</span>
        //             </div>
        //         )
        //     })
        // const showCocktailItems = 
        //     this.state.cocktailItems.map((item, index) => {
        //         return(
        //             <div key={index}>
        //                 <p>{item.name}</p>
        //                 <span>{item.description}</span>
        //             </div>
        //         )
        //     })
        // const showBloodyItems = 
        //     this.state.bloodyItems.map((item, index) => {
        //         return(
        //             <div key={index}>
        //                 <p>{item.name}</p>
        //                 <span>{item.description}</span>
        //             </div>
        //         )
        //     })
        // const showAppetizerItems = 
        //     this.state.appetizerItems.map((item, index) => {
        //         return(
        //             <div key={index}>
        //                 <p>{item.name}</p>
        //                 <span>{item.description}</span>
        //             </div>
        //         )
        //     })
        // const showSandwichItems = 
        //     this.state.sandwichItems.map((item, index) => {
        //         return(
        //             <div key={index}>
        //                 <p>{item.name}</p>
        //                 <span>{item.description}</span>
        //             </div>
        //         )
        //     })
        // const showSaladItems = 
        //     this.state.saladItems.map((item, index) => {
        //         return(
        //             <div key={index}>
        //                 <p>{item.name}</p>
        //                 <span>{item.description}</span>
        //             </div>
        //         )
        //     })
        // const showBeverageItems = 
        //     this.state.beverageItems.map((item, index) => {
        //         return(
        //             <div key={index}>
        //                 <p>{item.name}</p>
        //                 <span>{item.description}</span>
        //             </div>
        //         )
        //     })
        
    
        return(
            <div id="brunch">
                {/* <div>
                    <h3>Brunch Served Saturday and Sunday 10am - 3pm</h3>
                    <div className="brunchList">
                        {showBrunchItems}
                        
                    </div>
                </div>
                <div>
                    <h3>Brunch Cocktails</h3>
                    <div className="brunchList">
                        {showCocktailItems}
                    </div>
                </div>    
                <div>
                    <h3>Bloody Marys</h3>
                    <span>*all bloodys served with a mini Miller High Life, lemon, lime, olive, pickle, pepperoncini, onion, celery</span>
                    <div className="brunchList">
                        {showBloodyItems}
                    </div>
                </div>
                <div>
                    <h3>Appetizers</h3>
                    <div className="brunchList">
                        {showAppetizerItems}
                    </div>
                </div>
                <div>
                    <h3>Sandwiches</h3>
                    <span>*served with your choice of fries or house salad, substitute truffle fries or soup of the day for 2.5</span>
                    <div className="brunchList">
                        {showSandwichItems}
                    </div>
                </div>
                <div>
                    <h3>Soup and Salad</h3>
                    <span>add falafel balls to any salad 6</span>
                    <div className="brunchList">
                        {showSaladItems}
                    </div>
                </div>
                <div>
                    <h3>Beverages</h3>
                    <div className="brunchList">
                        {showBeverageItems}
                    </div>
                </div> */}

                <div style={{display: 'flex', justifyContent: 'center'}}>
                    <img src={brunch} alt='dinner menu' style={{width: '70%'}}></img>
                </div>
            </div>

            
        )
    }
}


export default Brunch;

