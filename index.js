function capture() {
  html2canvas(document.body).then(function(canvas) {
    var link = document.createElement('a');
    link.download = 'screenshot.png';
    link.href = canvas.toDataURL('image/png');
    link.click();
  });
}
/*
<script src="https://html2canvas.hertzen.com/dist/html2canvas.min.js"></script>: Esta linha inclui a biblioteca html2canvas no documento HTML. Essa biblioteca é responsável por criar uma imagem da página HTML atual.

<button onclick="capture()">Capturar e baixar screenshot</button>: Este é o botão que o usuário vai clicar para capturar um screenshot da página e fazer o download do arquivo resultante. Quando o usuário clica no botão, a função capture() é chamada.

function capture() {...}: Esta é a função que é chamada quando o usuário clica no botão. Ela utiliza a biblioteca html2canvas para criar uma imagem da página atual e, em seguida, cria um link de download para o arquivo resultante.

html2canvas(document.body).then(function(canvas) {...});: Esta linha utiliza a biblioteca html2canvas para criar uma imagem da página atual. A função html2canvas recebe como parâmetro o elemento que deve ser capturado (no caso, o elemento body da página). O resultado é uma promessa que retorna um objeto canvas.

var link = document.createElement('a');: Esta linha cria um elemento a (link) no documento HTML. Esse elemento será usado para fazer o download da imagem.

link.download = 'screenshot.png';: Esta linha define o nome do arquivo que será baixado. Neste caso, o nome é screenshot.png.

link.href = canvas.toDataURL('image/png');: Esta linha define o conteúdo do link de download. O conteúdo é uma representação em base64 da imagem criada pela biblioteca html2canvas. A imagem está em formato PNG.

link.click();: Esta linha simula um clique no link de download, fazendo com que o navegador inicie o download do arquivo.
 */