const Item = (props) => {
    console.log(props)
    return (
        <li className='item'>
            <img className='item-img' src={props.item.img} />
            <h2 className='item-title'>
                {props.item.title}
            </h2>
            <p className='item-subtitle'>
                {props.item.description}
            </p>
            <p className='item-value'>
                {props.item.value.toLocaleString('pt-br', { style: 'currency', currency: 'BRL' })}
            </p>
        </li>
    )
}

const Menu = (props) => {

    return (
        <div className='menu'>
            <h2 className='menu-title'>
                {props.title}
            </h2>
            <nav>
                <ul className='menu-itens'>
                    {props.itens.map((item, key) =>
                        <Item key={key} item={item} />
                    )}
                </ul>
            </nav>
        </div>
    )
}

export default Menu;