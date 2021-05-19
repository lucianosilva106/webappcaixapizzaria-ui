const path = require('path');
const express = require('express');
const port = process.env.PORT || 3000;
const app = express();

/**
 * @description Define a pasta build como publica
 */
app.use(express.static(path.join(__dirname, 'build')));

/**
 * @description Define a rota / da aplicação para rendereizar o index.html q esta dentro da pasta build
 */
app.get('/*', async (req, res) => {
  return res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

/**
 * @description define a porta do projeto
 */
app.set('port', port);

/**
 * @description Inicializa o servidor
 * @type {http.Server}
 */
const server = app.listen(app.get('port'), async () => {
  return console.log('Projeto iniciado na porta: ', server.address().port)
})  