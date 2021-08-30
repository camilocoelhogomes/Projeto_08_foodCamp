import React from 'react';
import { Link } from 'react-router-dom';

const ReviewOrder = ({ sendOrder, review }) => {
    console.log(review);
    return (
        <div className='menus'>
            <h2 className='menu-title'>
                Revise seu pedido
            </h2>

            <ul className='review-card'>
                {[
                    review.food.map(item => <li className='review-item'>
                        <span>
                            {item.title} {item.qtd === 1 ? '' : `(x${item.qtd})`}
                        </span>
                        <span>
                            {item.qtd * item.value}
                        </span>
                    </li>),
                    review.drink.map(item => <li className='review-item'>
                        <span>
                            {item.title} {item.qtd === 1 ? '' : `(x${item.qtd})`}
                        </span>
                        <span>
                            {item.qtd * item.value}
                        </span>
                    </li>),
                    review.dessert.map(item => <li className='review-item'>
                        <span>
                            {item.title} {item.qtd === 1 ? '' : `(x${item.qtd})`}
                        </span>
                        <span>
                            {item.qtd * item.value}
                        </span>
                    </li>),
                    <li className='review-item'>
                        <strong>
                            TOTAL:
                        </strong>
                        <span>
                            {review.total}
                        </span>
                    </li>

                ]
                }
            </ul>


            <button onClick={sendOrder} className={'button-send-order'}>
                Tudo Certo, pode pedir!
            </button>

            <button className={'button-cancel-order'}>
                <Link to='/'>Cancelar</Link>
            </button>
        </div>
    )
}

export default ReviewOrder;