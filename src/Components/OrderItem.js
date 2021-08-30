const OrderItem = ({ title, qtd, value }) => {
    return (
        <li className='review-item'>
            <span>
                {title} {qtd === 1 ? '' : `(x${qtd})`}
            </span>
            <span>
                {(qtd * value).toLocaleString('pt-br', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
            </span>
        </li>
    )
}

export default OrderItem;