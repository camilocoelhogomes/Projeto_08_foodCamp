import React from 'react'
import Menu from './Menu'

const Menus = ({ menus, clickItem, addQtd, decQtd }) => {
    return (
        <>
            <ul className='menus'>
                {
                    menus.map((menu, key) =>
                        <Menu
                            key={key}
                            menu={menu}
                            clickItem={clickItem}
                            addQtd={addQtd}
                            decQtd={decQtd}
                        />
                    )
                }
            </ul>
        </>
    )
}

export default Menus