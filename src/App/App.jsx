import React from 'react'
import classNames from 'classnames'
const wishes = [
  { text: 'Travel to the moon', done: false },
  { text: 'Pay the gym', done: true },
  { text: 'Go to the gym', done: false }
]

const App = () => (
    <div className='app'>
    <h1>My wishlist App</h1>
    <fieldset className='wish-input'>
        <legend className='wish-input__label'>New wish</legend>
        <input className="wish-input_field" placeholder="Enter your wish here"/>
    </fieldset>
    <ul className='wish-list'>
        {wishes.map(({ text, done }) => (
            <li key={text} className={classNames(
              'wish-list__item', { 'wish-list__item--done': done }
            )}>
                <input type='checkbox' checked={done}></input>
                <label>{text}</label>
            </li>
        ))}
    </ul>
    <button className='wish-clear' type='button'>Archive done</button>
    </div>
)
export default App
