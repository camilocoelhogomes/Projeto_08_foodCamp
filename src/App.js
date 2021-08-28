import React, { useState } from 'react'
import TopBar from "./Components/TopBar";
import Menus from './Components/Menus';
import BottonBar from "./Components/BottonBar";


const App = () => {
    const [menus, setMenus] = useState(
        [
            {
                type: 0,
                name: 'food',
                title: 'Primeiro, seu prato',
                itens: [
                    {
                        img: './img/food/comida-di-buteco-4.jpg',
                        title: 'Porção de Alcatra',
                        description: 'Que na verdade é carne de segunda',
                        value: 60.00,
                        selected: false,
                        qtd: 0,
                    },
                    {
                        img: './img/food/bolinho-de-mandioca.jpg',
                        title: 'Bolinho de Mandioca',
                        description: 'Muita mandioca e pouco recheio',
                        value: 20,
                        selected: false,
                        qtd: 0,
                    },
                    {
                        img: './img/food/porcao_de_tilapia.jpeg',
                        title: 'Iscas de Tilápia',
                        description: 'Peixe do rio dos fundos',
                        value: 50,
                        selected: false,
                        qtd: 0,
                    }
                ]
            },
            {
                type: 1,
                title: 'Agora, sua bebida',
                name: 'drink',
                itens: [
                    {
                        img: './img/drinks/refri_latas.jpg',
                        title: 'Refri Lata',
                        description: 'Sugerido por 1 vendo por 5',
                        value: 5,
                        selected: false,
                        qtd: 0,
                    },
                    {
                        img: './img/drinks/litrao.jpeg',
                        title: 'Litrão',
                        description: 'Se no mercado é 7, imagina pra mim',
                        value: 12,
                        selected: false,
                        qtd: 0,
                    },
                    {
                        img: './img/drinks/dose-de-pinga.jpeg',
                        title: 'Dose de pinga',
                        description: '51 de 5 real o litro, vendo 7 a dose pq deixei no barril',
                        value: 7,
                        selected: false,
                        qtd: 0,
                    }
                ]
            },
            {
                type: 2,
                name: 'dessert',
                title: 'Por fim, sua sobremesa',
                itens: [
                    {
                        img: './img/desertes/doce-de-leite.jpeg',
                        title: 'Doce de Leite',
                        description: 'Só revendo com 100% de lucro',
                        value: 5.5,
                        selected: false,
                        qtd: 0,
                    },
                    {
                        img: './img/desertes/pudin.jpg',
                        title: 'Pudin',
                        description: 'O feito no microondas que sai a 2 real no mercado',
                        value: 7,
                        selected: false,
                        qtd: 0,
                    },
                    {
                        img: './img/desertes/queijo-com-goiabada.jpg',
                        title: 'Queijo com Goiabada',
                        description: 'Aproveito as goiabas do quintal',
                        value: 12,
                        selected: false,
                        qtd: 0,
                    }
                ]
            },
        ]

    )

    const [selectedItems, setSelectedItems] = useState(
        {
            drink: [],
            food: [],
            dessert: [],
        }
    )


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

    const verificateSelectedItems = () => {
        let test = 0;
        Object.keys(selectedItems).forEach(menu => selectedItems[menu].length > 0 ? test++ : '');
        return test === 3;
    }

    const sendOrder = () => {

        if (verificateSelectedItems()) {
            const food = selectedItems.food.map((item, key) => `${key === 0 ? `` : `\t\t\t`} ${item.title}${item.qtd === 1 ? '' : ` (x${item.qtd})`}`);
            const drink = selectedItems.drink.map((item, key) => `${key === 0 ? `` : `\t\t\t`} ${item.title}${item.qtd === 1 ? '' : ` (x${item.qtd})`}`);
            const dessert = selectedItems.dessert.map((item, key) => `${key === 0 ? `` : `\t\t\t\t`} ${item.title}${item.qtd === 1 ? '' : ` (x${item.qtd})`}`);

            const total = Object.keys(selectedItems)
                .map(menu => selectedItems[menu].map(item => item.qtd * item.value)
                    .reduce((totalMenu, totalItem) => totalMenu + totalItem))
                .reduce((total, totalMenu) => total + totalMenu);

            const orderMessage =
                `
            Olá gostaria de fazer o pedido:
        Pratos: \t${food.join('\n')}
        Bebidas: \t${drink.join('\n')}
        Sobremesas: ${dessert.join('\n')}
        Total: \t\t ${total.toLocaleString('pt-br', { style: 'currency', currency: 'BRL' })}
            `
            const messageURL = `https://wa.me/553173158478?text=${encodeURIComponent(orderMessage)}`
            window.open(messageURL);
        }
    }

    return (
        <>
            <TopBar />
            <Menus
                menus={menus}
                clickItem={clickItem}
                addQtd={addQtd}
                decQtd={decQtd}
            />
            <BottonBar
                verificateSelectedItems={verificateSelectedItems}
                sendOrder={sendOrder}
            />
        </>
    )
}

export default App;