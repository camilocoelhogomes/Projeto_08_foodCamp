import React from "react";

const Item = ({ item, type, id, clickItem, addQtd, decQtd, }) => {

    return (
        <>
            <li onClick={() => clickItem(type, id)} className={(item.qtd !== 0) ? 'selected-item' : 'item'}>
                <img className='item-img' src={item.img} alt={item.title} />
                <h2 className='item-title'>
                    {item.title}
                </h2>
                <p className='item-subtitle'>
                    {item.description}
                </p>

                <div className='value-qtd'>
                    <p className='item-value'>
                        {item.value.toLocaleString('pt-br', { style: 'currency', currency: 'BRL' })}
                    </p>

                    {
                        (item.qtd !== 0) ?
                            <div className='item-qtd'>
                                <button onClick={(event) => { event.stopPropagation(); decQtd(type, id) }} className='dec-qtd'>-</button>
                                {item.qtd}
                                <button onClick={(event) => { event.stopPropagation(); addQtd(type, id) }} className='add-qtd'>+</button>
                            </div> :
                            <></>

                    }

                </div>
            </li>
        </>
    )
}

export default Item;