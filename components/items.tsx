import React from 'react'
import axios from 'axios'
import Image from 'next/image'
import DeleteItem from './deleteItem'
import Values from './values'

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
                                    <DeleteItem  idItem={item._id}/>
                                    
                                </div>
                            </div>
                        ))
                    }
                </div>
                
               <Values />

            </div>
        )
    }
}