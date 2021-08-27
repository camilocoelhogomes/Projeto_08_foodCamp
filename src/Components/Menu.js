import Item from "./Item";

const Menu = ({ menu, menus, setMenus, selectedItems, setSelectedItems }) => {
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
                                item={item}
                                type={menu.type}
                                key={key}
                                id={key}
                                menus={menus}
                                setMenus={setMenus}
                                selectedItems={selectedItems}
                                setSelectedItems={setSelectedItems}
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