import React from 'react';
import {Link} from 'react-router-dom';
//import './Card.css';

function CardItem(props) {
    return (
        <>
          <li className='card__item'>
            <Link className='card__item__link' to={props.path}>
              <figure className='card__item__pic-wrap' data-category={props.label}>
                <img
                  className='card__item__img'
                  alt='Travel Image'
                  src={props.src}
                />
              </figure>
              <div className='card__item__info'>
                <h5 className='card__item__text'>{props.text}</h5>
              </div>
            </Link>
          </li>
        </>
      );
}

export default CardItem;
