const mongosse = require('mongoose');

//criano o que a api vai pegar do servidor
const Produto = mongosse.model('carts', {
    name: String,
    valor: Number
});

module.exports = Produto;