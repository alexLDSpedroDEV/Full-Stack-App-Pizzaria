"use client"

import React from 'react'
import axios from 'axios'
import Link from 'next/link';


export default class SingInAdmin extends React.Component<{}, {name: any, senha: any}>{
    
    

   
    

    constructor (props : any) {
        super(props)

        this.state = {
            name: '',
            senha: '',
        }


        this.handleSubmit = this.handleSubmit.bind(this)
    }
    

    //função para criar novos carros no banco de dados
    handleSubmit(e : any) {
        //pevinindo recarregamento da pagina
        e.preventDefault();

        

        //enviando os dados do state (json que criamos) para a url do backend
        axios.get(`http://localhost:8080/produto/login/` + this.state.name )
        .then(res => {
            const [ data ]  = res.data

            console.log(data.name)
            console.log(data.senha)
            
            if ( data.name == this.state.name && data.senha == this.state.senha){
                alert("Bem vindo so sistema de pedidos gericht")   
                window.open("http://localhost:3000/dashbord", "_self")
            }
            
            else {
                //se o email ou a senha estiverem erradas ele da um aviso e reload na pagina 
                alert("Usuario ou senha estão incoretos")
                window.location.reload()
            }
        })
   
    }
    
    
    render() {
        return(
            <div>
                
                <div>
                    <form  onSubmit={this.handleSubmit}>
                        <div>
                            <h2>Entrar com a sua conta</h2>
                        </div>
                        <div>
                            <div>
                                <label>nome</label>
                                <input
                                placeholder='Digite o seu nome'
                                type='text'
                                className='form_input'
                                onChange={ e => this.setState({name: e.target.value})}
                                />
                            </div>

                            <div>
                                <label>Senha</label>
                                <input
                                placeholder='Digite a sua senha'
                                type='password'
                                className='form_input'
                                onChange={ e => this.setState({senha: e.target.value})}
                                />
                            </div>
                        </div>    
                        
                        <button type='submit' >Entrar</button>
                        
                    </form>
                    <div>
                        {/* <Image src={} alt="" /> */}
                    </div>
                </div>
                
            </div>
        )
    }
}