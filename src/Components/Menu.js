import Item from "./Item";

const Menu = ({ menu, clickItem, addQtd, decQtd, }) => {
    return (
        <div className='menu' >
            <h2 className='menu-title'>
                {menu.title}
            </h2>
            <nav>
                <ul name={menu.name} className='menu-itens'>
                    {
                        //
                        menu.itens.map((item, key) =>
                            <Item
                                key={key}
                                item={item}
                                type={menu.type}
                                id={key}
                                clickItem={clickItem}
                                addQtd={addQtd}
                                decQtd={decQtd}
                            />
                        )
                        //*/
                    }
                </ul>
            </nav>
        </div>
    )
}

export default Menu;