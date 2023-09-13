import React from 'react'
import MenuItem from './MenuItem'

function Menu({setOrder}) {


    const menuItems = [
        { name: "Margherita Pizza", price: 12.99, description: "Classic cheese and tomato", hotness: 0 , img: 'https://assets.bonappetit.com/photos/57ad22671b334044149753ed/1:1/w_2240,c_limit/BAS-BEST-HOT-WINGS.jpg'},
        { name: "Spicy Tuna Roll", price: 9.99, description: "Tuna with a kick", hotness: 2 , img: 'https://assets.bonappetit.com/photos/57ad22671b334044149753ed/1:1/w_2240,c_limit/BAS-BEST-HOT-WINGS.jpg'},
        { name: "Buffalo Wings", price: 10.99, description: "Crispy and spicy", hotness: 3 , img: 'https://assets.bonappetit.com/photos/57ad22671b334044149753ed/1:1/w_2240,c_limit/BAS-BEST-HOT-WINGS.jpg'},
        { name: "Caesar Salad", price: 8.99, description: "Romaine lettuce and croutons", hotness: 0 , img: 'https://assets.bonappetit.com/photos/57ad22671b334044149753ed/1:1/w_2240,c_limit/BAS-BEST-HOT-WINGS.jpg'},
        { name: "Pad Thai", price: 13.99, description: "Noodles, peanuts, lime", hotness: 1 , img: 'https://assets.bonappetit.com/photos/57ad22671b334044149753ed/1:1/w_2240,c_limit/BAS-BEST-HOT-WINGS.jpg'},
        { name: "Veggie Burger", price: 11.99, description: "Plant-based patty", hotness: 0 , img: 'https://assets.bonappetit.com/photos/57ad22671b334044149753ed/1:1/w_2240,c_limit/BAS-BEST-HOT-WINGS.jpg'},
        { name: "Fish Tacos", price: 14.99, description: "Grilled fish and slaw", hotness: 1 , img: 'https://assets.bonappetit.com/photos/57ad22671b334044149753ed/1:1/w_2240,c_limit/BAS-BEST-HOT-WINGS.jpg'},
        { name: "Lamb Curry", price: 16.99, description: "Rich and creamy", hotness: 4 , img: 'https://assets.bonappetit.com/photos/57ad22671b334044149753ed/1:1/w_2240,c_limit/BAS-BEST-HOT-WINGS.jpg'},
        { name: "Chocolate Cake", price: 6.99, description: "Decadent dessert", hotness: 0, img: 'https://assets.bonappetit.com/photos/57ad22671b334044149753ed/1:1/w_2240,c_limit/BAS-BEST-HOT-WINGS.jpg' }
      ];

    const showMenuItems = menuItems.map((foodObj,i) => <MenuItem menuItem={foodObj} key={i} setOrder={setOrder}/> )

    return (
        <div className='menu'>
            Menu
            {showMenuItems}
        </div>
    )
}

export default Menu