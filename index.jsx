import React, { Component } from 'react'

ReactDOM.render(
    <div> My wishlist from REACT</div>,
    document.getElementById('root')
)

/*const Header = () => <h1> My wishlist </h1>;*/
const isFormal = true
const Farewell = () => (
    <div>
        {isFormal ? 'Kind regards' : 'Cheers'}
    </div>
);

const partOfTheDay = 'morning'
const messageDepends = () => {
    (partOfTheDay === 'morning' && <span>Good morning</span>) ||
    (partOfTheDay === 'afternoon' && <span>Good afternoon</span>) ||
    (partOfTheDay === 'night' && <span>Good night</span>) ||
    'Cheers!'
};