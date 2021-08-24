import TopBar from "./Components/TopBar";
import Menu from './Components/Menu';


const App = () => {
    const menus = [
        {
            title: 'Primeiro, seu prato',
            itens: [
                {
                    img: './img/food/comida-di-buteco-4.jpg',
                    title: 'Porção de Alcatra',
                    description: 'Que na verdade é carne de segunda',
                    value: 60.00
                }
            ]
        },
        {
            title: 'Agora, sua bebida',
            itens: [
                {
                    img: './img/food/comida-di-buteco-4.jpg',
                    title: 'Alcatra com Mandioquinha',
                    description: 'Alcatra maciinha com mandioquinha do capricho',
                    value: 60.00
                }
            ]
        },
        {
            title: 'Por fim, sua sobremesa',
            itens: [
                {
                    img: './img/food/comida-di-buteco-4.jpg',
                    title: 'Alcatra com Mandioquinha',
                    description: 'Alcatra maciinha com mandioquinha do capricho',
                    value: 60.00
                }
            ]
        },
    ]

    return (
        <>
            <TopBar />
            <ul className='menus'>
                {menus.map((menu, key) => <li> <Menu key={key} itens={menu.itens} title={menu.title} /> </li>)}
            </ul>
        </>
    )
}

export default App;