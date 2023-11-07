const mongosse = require('mongoose');

//criano o que a api vai pegar do servidor
const CreatedAdmin = mongosse.model('admins', {
    name: String,
    senha: String,
});

module.exports = CreatedAdmin;