import React from "react";

const Item = ({ item, type, id, menus, setMenus, selectedItems, setSelectedItems }) => {


    const clickItem = (type, id) => {

        const oldMenus = [...menus];
        if (oldMenus[type].itens[id].qtd === 0) {
            oldMenus[type].itens[id].qtd++;
        }
        setMenus(oldMenus);
    }

    const addQtd = (type, id) => {
        const oldMenus = [...menus];
        oldMenus[type].itens[id].qtd++;
        setMenus(oldMenus);
    }

    const decQtd = (type, id) => {
        const oldMenus = [...menus];
        if (oldMenus[type].itens[id].qtd === 1) {
            oldMenus[type].itens[id].qtd = 0;
        }
        else {
            oldMenus[type].itens[id].qtd--;
        }
        setMenus(oldMenus);
    }



    return (
        <>
            <li onClick={(event) => { event.stopPropagation(); clickItem(type, id) }} id={id} type={item.type} className={(item.qtd !== 0) ? 'selected-item' : 'item'}>
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