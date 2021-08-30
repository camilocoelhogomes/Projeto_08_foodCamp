import React from 'react';
import { Link } from 'react-router-dom';
import OrderItem from './OrderItem'

const ReviewOrder = ({ sendOrder, review }) => {
    console.log(review);
    return (
        <div className='menus'>
            <h2 className='menu-title'>
                Revise seu pedido
            </h2>

            <ul className='review-card'>
                {[
                    review.food.map(item => <OrderItem title={item.title} qtd={item.qtd} value={item.value} />),
                    review.drink.map(item => <OrderItem title={item.title} qtd={item.qtd} value={item.value} />),
                    review.dessert.map(item => <OrderItem title={item.title} qtd={item.qtd} value={item.value} />),
                    <li className='review-item bolder'>
                        <strong>
                            TOTAL:
                        </strong>
                        <span>
                            {(review.total).toLocaleString('pt-br', { style: 'currency', currency: 'BRL' })}
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