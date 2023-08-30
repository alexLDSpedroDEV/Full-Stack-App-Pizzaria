import React from 'react'
import axios from 'axios'
import Image from 'next/image'

export default class ListCarros extends React.Component {


    //usando o state do react para criar um list de carros
    state = {
        produtos: [],
    }

    //criando um function acinada para pegar os dados do backend
    componentDidMount() {
        axios.get('http://localhost:8080/produto/buscar/')
            .then(res => {

                //colocando todos os dados que pegamos do backend no dadosCarros
                const dadosProdutos = res.data;

                //usando a funçao setState para colocar todos os dados de dadosCarros em carros
                this.setState({ produtos: dadosProdutos })
            })
    }



    render() {

        return (
            <div className='grid grid-cols-1 xl:grid-cols-2'>
                <div className='xl:h-screen flex flex-col align-middle'>
                    {
                        this.state.produtos.map((item: any, index: any) => (
                            <div key={index} className='grid grid-cols-1 w-screen mt-8 mb-8 xl:w-[30vw]'>
                                <div className='grid grid-cols-4 items-center justify-center align-middle gap-2 w-[90vw] m-auto xl:w-[50vw] xl:p-4'>
                                    <Image src={item.image} alt={item.name} width={250} height={250} className='w-[80px] xl:w-[120px]' />
                                    <h2 className='text-red-500 text-[15px] xl:text-[20px] xl:font-semibold font-bold'>{item.name}</h2>
                                    <h2 className='flex ml-7 text-red-700 font-bold'>${item.value}</h2>
                                    <button className='text-red-700 font-bold text-[20px] hover:cursor-pointer'>X</button>
                                </div>
                            </div>
                        ))
                    }
                </div>
                <div className='bg-red-100 min-h-[50vh] flex items-center justify-center xl:p-4 xl:h-screen'>
                    <div className='w-[80vw] m-auto text-red-700 xl:text-[20px]'>
                        <div className=' grid grid-cols-2 justify-between mb-3 xl:mb-6'>
                            <h2>Subtotel </h2>
                            <h2 className='text-end'>$90</h2>
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
                            <h2 className='text-end'>$90</h2>
                        </div>
                        <div className='flex justify-end'>
                            <button className=' uppercase bg-red-600 p-3 rounded-md text-white '>checkout</button>
                        </div>
                        
                    </div>
                </div>


            </div>
        )
    }
}