import TopBar from "./Components/TopBar";
import Menu from './Components/Menu';
import BottonBar from "./Components/BottonBar";


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
                },
                {
                    img: './img/food/bolinho-de-mandioca.jpg',
                    title: 'Bolinho de Mandioca',
                    description: 'Muita mandioca e pouco recheio',
                    value: 20
                },
                {
                    img: './img/food/porcao_de_tilapia.jpeg',
                    title: 'Iscas de Tilápia',
                    description: 'Peixe do rio dos fundos',
                    value: 50
                }
            ]
        },
        {
            title: 'Agora, sua bebida',
            itens: [
                {
                    img: './img/drinks/refri_latas.jpg',
                    title: 'Refri Lata',
                    description: 'Sugerido por 1 vendo por 5',
                    value: 5
                },
                {
                    img: './img/drinks/litrao.jpeg',
                    title: 'Litrão',
                    description: 'Se no mercado é 7, imagina pra mim',
                    value: 12
                },
                {
                    img: './img/drinks/dose-de-pinga.jpeg',
                    title: 'Dose de pinga',
                    description: '51 de 5 real o litro, vendo 7 a dose pq deixei no barril',
                    value: 7
                }
            ]
        },
        {
            title: 'Por fim, sua sobremesa',
            itens: [
                {
                    img: './img/desertes/doce-de-leite.jpeg',
                    title: 'Doce de Leite',
                    description: 'Só revendo com 100% de lucro',
                    value: 5.5
                },
                {
                    img: './img/desertes/pudin.jpg',
                    title: 'Pudin',
                    description: 'O feito no microondas que sai a 2 real no mercado',
                    value: 7
                },
                {
                    img: './img/desertes/queijo-com-goiabada.jpg',
                    title: 'Queijo com Goiabada',
                    description: 'Aproveito as goiabas do quintal',
                    value: 12
                }
            ]
        },
    ]

    return (
        <>
            <TopBar />
            <ul className='menus'>
                {menus.map((menu, key) => <li> <Menu key={key} id={key} itens={menu.itens} title={menu.title} /> </li>)}
            </ul>
            <BottonBar />
        </>
    )
}

export default App;