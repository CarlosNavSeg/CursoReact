import React from 'react'
import classNames from 'classnames'
import PropTypes from 'prop-types'

const WishList = ({ wishes }) => (
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
)

WishList.propTypes = {
  wishes: PropTypes.arrayOf(PropTypes.shape({
    done: PropTypes.bool,
    text: PropTypes.string
  }))
}

WishList.defaultProps = {
  wishes: []
}

export default WishList
