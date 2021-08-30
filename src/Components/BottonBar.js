import { Link } from 'react-router-dom';

const BottonBar = ({ verificateSelectedItems, reviewOrder }) => {

    return (
        <div className='botton-bar'>

            <button onClick={reviewOrder} className={verificateSelectedItems() ? 'button-close-order-green' : 'button-close-order'}>
                {
                    verificateSelectedItems() ?
                        <Link to='/review'><p className='button-text'>Fechar o Pedido</p></Link> :
                        <p className='button-text'>Selecione os três itens <br /> para fechar o pedido</p>
                }
            </button>

        </div>
    )
}

export default BottonBar;