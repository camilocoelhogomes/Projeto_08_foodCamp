const BottonBar = ({ verificateSelectedItems }) => {

    return (
        <div className='botton-bar'>
            <button className={verificateSelectedItems() ? 'button-close-order-green' : 'button-close-order'}>
                {
                    verificateSelectedItems() ?
                        <p className='button-text'>Fechar o Pedido</p> :
                        <p className='button-text'>Selecione os três itens <br /> para fechar o pedido</p>
                }
            </button>
        </div>
    )
}

export default BottonBar;