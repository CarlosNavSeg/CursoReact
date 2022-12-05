import React, { useState } from 'react'
import WishInput from './WishInput'
import WishList from './WishList'
const wishes = [
  { text: 'Travel to the moon', done: false },
  { text: 'Pay the gym', done: true },
  { text: 'Go to the gym', done: false }
]

const App = () => {
    const [wishes, setWishes] = useState(wishes);
    return (
    <div className='app'>
    <h1>My wishlist App</h1>
    <WishInput onNewWish={wish => setWishes([... wishes, wish])}/>
    <WishList wishes={wishes}></WishList>
    <button className='wish-clear' type='button'>Archive done</button>
    </div>
    )
}
export default App
