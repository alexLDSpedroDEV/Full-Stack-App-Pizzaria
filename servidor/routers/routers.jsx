const router = require('express').Router()
const Produto = require('../models/produto.jsx');

const uploadUser = require('../../middlewares/uploadImage.jsx')




//create - criação de dados
router.post('/', uploadUser.single('image'), async (req, res) => {
    
    // pegando os dado da req.body
    const {name} = req.body
    /* const {value} = req.body
    const {tipo} = req.body
    const {text} = req.body */
    

    //pegando o nome da imagem que salvamos no sistema para armazenar no banco de dados
    const fileName = req.file;

    console.log(name)
    console.log(fileName)
        

    

    if(req.file) {
        return res.json({
            erro: false,
            message: "upload image com sucesso"
        })
    }

    

    //verificação dos dados da requisição
    !name ? res.status(422).json({error: "O nome é obrigatorio"}) : ""
     
    //criando um objeto que vai receber todos os parametros para poder ser enviado ao banco de dados
    const newProduto = {
        name, 
        fileName,
        /* value, 
        tipo,
        text, */
    }

    //usando o metodo created
    try{
        //salvando o dado no banco de dado
        await Produto.create(newProduto);
        
        res.status(201).json({message: "pessoa inserido no servidor com sucesso"})


    } catch (error) {
        res.status(500).json({error: error})
    }
})


// Read - ler todos os dados do banco de dado
router.get('/buscar/', async (req, res) => {


    try{
        //find - buscando os dados
        const produtos = await Produto.find();

        
        res.status(200).json(produtos)

    } catch (error) {
        res.status(500).json({ error: error.message });
        console.log(error);
      }
})

/* 
router.get('/:id', async (req,res) => {
    //extrair os dados da requisição
    const id = req.params.id

    try{
        const newCar = await carro.find  
        res.status(200).json(newCar)
        console.log(id)

    } catch (error) {
        res.status(500).json({error: error})
    }
}) */

/* 
router.delete('/:id', async (req, res) => {
    //pegando dados que vei do front-end
    const id = req.params.id; 

    


    try {

        // Atualiza o documento no MongoDB
        const result = await carro.deleteOne({ _id: id });

        if (result.deletedCount === 1) {
            res.send('Carro deletado com sucesso');
        } else {
            res.status(404).send('Carro não encontrado');
        }
    } 
    catch (error) {
        console.log(error);
        res.status(500).send('Erro interno do servidor.');
  }
})


//requisiçao put -  editar os dados da api
router.put('/:id', async (req, res) => {

    //pegando dados que vei do front-end
    const id = req.params.id; 

    //pegando os dados que vinheram da requisição
    const dados = req.body; 
    console.log(req.body)


    try {

        // Atualiza o documento no MongoDB
        const result = await carro.updateOne({ _id: id }, { $set: dados });

        if (result.modifiedCount === 1) {
            res.send('Carro atualizado com sucesso.');
        } else {
            res.status(404).send('Carro não encontrado.');
        }
    } 
    catch (error) {
        console.log(error);
        res.status(500).send('Erro interno do servidor.');
  }
}) */

module.exports = router