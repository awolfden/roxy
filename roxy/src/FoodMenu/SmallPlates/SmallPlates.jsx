import React, {Component} from 'react';
import dinner from "../../images/denver_COVIDDinner.jpg";

class SmallPlates extends Component {
    constructor(){
        super();
        this.state = {
            plateItems: [
                {'name': 'Cheese & Charcuterie Board',
                 'description': 'Assortment of meats and cheeses, local honeycomb, organic red grapes, whole grain mustard, crostini'},
                {'name': 'Cauliflower Mash',
                 'description': 'Organic cauliflower, onion, garlic, butter, parmesan'},
                {'name': 'Falafel Balls',
                'description': 'House-made tahini dressing'},
                {'name': 'Butternut Squash Soup',
                 'description': 'Carmelized diced apples, parsley, crema'},
                {'name': 'Truffle Fries',
                 'description': 'Parsley, truffle aioli, queso fresco'},
                {'name': 'Baked Brie',
                 'description': 'Puff pastry, lavender honey, macadamia nuts, organic red grapes, baguette'},
                {'name': 'Poutine',
                 'description': 'Shoestring fries, Wisconsin cheese curds, brown gravy demi-glase'},
                {'name': 'Carnitas Tacos',
                 'description': 'Corn tortilla avocado salsa, pico de gallo, queso fresco'},
                {'name': 'tsaoT odacovA',
                 'description': 'Baked avocado, farm-raised egg, nueskes bacon, sourdough'},
                {'name': 'Denver Frito-Pie',
                 'description': 'House-made pork green chili, 3-cheese sauce'},
                {'name': 'Stems & Flappers',
                 'description': 'House-made buffalo sauce or salt and pepper seasoning served with blue cheese and celery'},
                {'name': 'Grandmas Meatballs',
                 'description': 'Beef, pork & veal, parmesan cheese, secret red sauce, amoroso roll'},
                {'name': 'Pastrami Sliders',
                'description': 'Carmelized onion, melted cold-smoked gouda, garlic-horseraddish aioli, house-made pretzel bun'}
            ],
            
            saladItems: [
                {'name': 'Kale-orado Salad',
                'description': 'Organic kale, parmesan cheese, crispy chickpeas, roasted fennel, golden raisins, roasted garlic vinaigrette'},
                {'name': 'Broadway Salad',
                'description': 'Organic romaine, blue cheese crumbles, candied bacon, pickled red onion, blue cheese dressing'}
            ],

            sandwichItems: [
                {'name': 'Open Face Caprese',
                'description': 'Organic tomato, fresh mozzarella, cashew pesto, balsamic reduction, sourdough'},                
                {'name': 'Falafel Burger',
                'description': 'Melted mozzarella & cheddar, onion, tomato, sprouts, tahini dressing, 7-grain bun'},
                {'name': 'Pho-get-about-it',
                'description': 'Asian glazed pork tenderloin, carrots, cabbage, cilantro, wasabi mayo, ciabatta, side of spicy pho broth'}
            ],
            entreeItems: [
                {'name': 'House Made Ravioli',
                'description': 'Fresh ricotta, Italian spice blend, house-made marinara'},                
                {'name': 'Half-Baked Chicken',
                'description': 'Cheesy polenta, seasonal vegetables, saffron, lemon'},
                {'name': 'Roxy Mac N Cheese',
                'description': 'Orecchiette pasta, 3-cheese sauce blend, your choice of carnitas or falafel balls'}
            ],
            dessertItems: [
                {'name': 'Chocolate Avocado',
                'description': 'Avocado, chocolate dip, house-made bourbon ice cream, orange zest'},                
                {'name': 'Brulee Cheesecake',
                'description': 'Seasonal berry coulis'}
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
        const showEntreeItems = 
            this.state.entreeItems.map((item, index) => {
                return(
                    <div key={index}>
                        <p>{item.name}</p>
                        <span>{item.description}</span>
                    </div>
                )
            });
        const showDessertItems = 
            this.state.dessertItems.map((item, index) => {
                return(
                    <div key={index}>
                        <p>{item.name}</p>
                        <span>{item.description}</span>
                    </div>
                )
            });
        
    
        return(
            <>
                {/* <div id="smallPlates">
                    <h3>Small Plates</h3>
                    <div className="plateList">
                        {showPlateItems}
                    </div>
                </div>
                <div id="saladItems">
                    <h3>Salads</h3>
                    <div className="plateList">
                        {showSaladItems}
                    </div>
                </div>
                <div id="sandwichItems">
                    <h3>Sandwiches</h3>
                    <div className="plateList">
                        {showSandwichItems}
                    </div>
                </div>
                <div id="entreeItems">
                    <h3>Entreé</h3>
                    <div className="plateList">
                        {showEntreeItems}
                    </div>
                </div>
                <div id="dessertItems">
                    <h3>Dessert</h3>
                    <div className="plateList">
                        {showDessertItems}
                    </div>
                </div> */}
                <div style={{display: 'flex', justifyContent: 'center'}}>
                    <img src={dinner} alt='dinner menu' style={{width: '70%'}}></img>
                </div>
                
            </>
        )
    }
    
}


export default SmallPlates;

