import React from 'react'
import axios from 'axios'
import FoodItens from '@/app/FoodItens'

export default class ListCarros extends React.Component{
    

    //usando o state do react para criar um list de carros
    state={
        produtos:[],  
    }
    
    //criando um function acinada para pegar os dados do backend
    componentDidMount(){
        axios.get('http://localhost:8080/produto/buscar/')
        .then(res => {
            
            //colocando todos os dados que pegamos do backend no dadosCarros
            const dadosProdutos=res.data;

            //usando a funçao setState para colocar todos os dados de dadosCarros em carros
            this.setState({produtos: dadosProdutos})
        })
    }

   
    
    

    render() {
        
        return(
            <div>

                {
                    this.state.produtos.map((item : any, index : any) => (
                        <div key={index}>
                            <h2>{item.name}</h2>
                        </div>
                    ))
                }
                
            </div>
        )
    }
}