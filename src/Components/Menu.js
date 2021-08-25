const Item = (props) => {
    const { img, title, description, value } = props.item
    return (
        <li className='item'>
            <img className='item-img' src={img} alt={title} />
            <h2 className='item-title'>
                {title}
            </h2>
            <p className='item-subtitle'>
                {description}
            </p>
            <p className='item-value'>
                {value.toLocaleString('pt-br', { style: 'currency', currency: 'BRL' })}
            </p>
        </li>
    )
}

const Menu = (props) => {
    const { title, itens, id } = props
    return (
        <div className='menu' >
            <h2 className='menu-title'>
                {title}
            </h2>
            <nav>
                <ul id={id} className='menu-itens'>
                    {itens.map((item, key) =>
                        <Item key={key} item={item} />
                    )}
                </ul>
            </nav>
        </div>
    )
}

export default Menu;