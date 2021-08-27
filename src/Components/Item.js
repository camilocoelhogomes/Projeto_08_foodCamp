import React from "react";

const Item = ({ item, type, id, menus, setMenus, selectedItems, setSelectedItems }) => {
    console.log(selectedItems);

    const clickItem = (type, id) => {
        const oldMenus = [...menus];
        const oldSelectedItems = { ...selectedItems };
        const newSelectedItems = {};

        if (oldMenus[type].itens[id].qtd === 0) {
            oldMenus[type].itens[id].qtd++;
        }

        Object.keys(oldSelectedItems).forEach((menu) => {
            newSelectedItems[menu] = oldMenus.filter(item => item.name === menu)[0].itens.filter(item => item.qtd !== 0);
        });

        setMenus(oldMenus);
        setSelectedItems(newSelectedItems);
    }

    const addQtd = (type, id) => {
        const oldMenus = [...menus];
        const oldSelectedItems = { ...selectedItems };
        const newSelectedItems = {};
        oldMenus[type].itens[id].qtd++;

        Object.keys(oldSelectedItems).forEach((menu) => {
            newSelectedItems[menu] = oldMenus.filter(item => item.name === menu)[0].itens.filter(item => item.qtd !== 0);
        });

        setMenus(oldMenus);
        setSelectedItems(newSelectedItems);
    }

    const decQtd = (type, id) => {
        const oldMenus = [...menus];
        const oldSelectedItems = { ...selectedItems };
        const newSelectedItems = {};
        if (oldMenus[type].itens[id].qtd === 1) {
            oldMenus[type].itens[id].qtd = 0;
        }
        else {
            oldMenus[type].itens[id].qtd--;
        }
        Object.keys(oldSelectedItems).forEach((menu) => {
            newSelectedItems[menu] = oldMenus.filter(item => item.name === menu)[0].itens.filter(item => item.qtd !== 0);
        });

        setMenus(oldMenus);
        setSelectedItems(newSelectedItems);
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