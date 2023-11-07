
import React, { Component } from 'react';
import axios from 'axios';

interface Produto {
    value: number;
    // Defina outras propriedades do produto, se necessário
}

interface ValuesState {
    produtos: Produto[];
    soma: number;
}

export default class Values extends Component<{}, ValuesState> {
    state: ValuesState = {
        produtos: [],
        soma: 0,
    };

    componentDidMount() {
        axios.get<Produto[]>('http://localhost:8080/produto/buscar/')
            .then(res => {
                const dadosProdutos = res.data;
                this.setState({ produtos: dadosProdutos });
                this.somarValores();
            });
    }

    somarValores = () => {
        const { produtos } = this.state;
        const soma = Math.round(produtos.reduce((somaParcial, item) => somaParcial + item.value, 0));
        this.setState({ soma });
    }

    render() {
        const { soma } = this.state;
        return (
            <div className='bg-red-100 min-h-[50vh] flex items-center justify-center xl:p-4 xl:h-screen'>
                <div className='w-[80vw] m-auto text-red-700 xl:text-[20px]'>
                    <div className='grid grid-cols-2 justify-between mb-3 xl:mb-6'>
                        <h2>Subtotal </h2>
                        <h2 className='text-end'>${soma}</h2>
                    </div>
                    <div className=' grid grid-cols-2 justify-between mb-3 xl:mb-6'>
                            <h2>Service Cost</h2>
                            <h2 className='text-end'>$0.00</h2>
                        </div>

                        <div className=' grid grid-cols-2 justify-between mb-6 xl:mb-10'>
                            <h2>Delivery Cost</h2>
                            <h2 className='text-end text-green-500'>FREE!</h2>
                        </div>

                        <div className=' grid grid-cols-2 justify-between mb-6 xl:mb-10'>
                            <h2>Total</h2>
                            <h2 className='text-end'>${soma}</h2>
                        </div>
                        <div className='flex justify-end'>
                            <button className=' uppercase bg-red-600 p-3 rounded-md text-white '>checkout</button>
                        </div>
                </div>
            </div>
        );
    }
}
