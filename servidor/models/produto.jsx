const mongosse = require('mongoose');

//criano o que a api vai pegar do servidor
const Produto = mongosse.model('carts', {
    name: String,
    image: String,
    value: Number,
    tipo: String,
    text: String,
});

module.exports = Produto;