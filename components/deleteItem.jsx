import React, { Component } from 'react';
import axios from 'axios';
import Image from 'next/image';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default class DeleteItem extends Component {
  handleDelete = (e) => {
    axios
      .delete(`http://localhost:8080/produto/` + e)
      .then((response) => {
        toast.success('Item excluído com sucesso', {
          position: 'top-left',
          autoClose: 2000, // Exibe a notificação por 3 segundos (ajuste conforme necessário)
          
        });
      })
      .catch((error) => {
        console.error(error);
      });
  };

  render() {
    const { idItem } = this.props;

    return (
      <div>
        <button
          className="text-red-700 font-bold text-[20px] hover:cursor-pointer"
          onClick={() => this.handleDelete(idItem)}
        >
          X
        </button>
      </div>
    );
  }
}
