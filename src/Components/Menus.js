import React from 'react'
import Menu from './Menu'

const Menus = ({ menus, setMenus, selectedItems, setSelectedItems }) => {
    return (
        <>
            <ul className='menus'>
                {
                    menus.map((menu, key) =>
                        <Menu
                            key={key}
                            menu={menu}
                            menus={menus}
                            setMenus={setMenus}
                            selectedItems={selectedItems}
                            setSelectedItems={setSelectedItems}
                        />
                    )
                }
            </ul>
        </>
    )
}

export default Menus