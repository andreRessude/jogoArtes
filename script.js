let musicas = [
    {titulo:'Rather Be', artista:'Clean Bandit, Jess Glynne', src:'musicas/1.mp3', img:'imagens/1.jpeg'},
    {titulo:'Garota de Ipanema', artista:'Tom Jobin', src:'musicas/2.mp3', img:'imagens/2.jpeg'},
    {titulo:'Vagalumes', artista:'Pollo', src:'musicas/3.mp3', img:'imagens/3.jpeg'},
    {titulo:'Time in a Bottle', artista:'Jim Croce', src:'musicas/4.mp3', img:'imagens/4.jpeg'},
    {titulo:'Preciso me encontrar', artista:'Cartola', src:'musicas/5.mp3', img:'imagens/5.jpeg'},
    {titulo:'O mundo é um Moinho', artista:'Cartola', src:'musicas/6.mp3', img:'imagens/5.jpeg'},
    {titulo:'Welcome to the jungle', artista:"Guns N' Roses", src:'musicas/7.mp3', img:'imagens/6.jpeg'},
    {titulo:'Beautiful Girls', artista:'Sean Kingston', src:'musicas/8.mp3', img:'imagens/7.jpeg'},
    {titulo:'Me and the Devil Blues', artista:'Robert Johnson', src:'musicas/9.mp3', img:'imagens/8.jpeg'},
    {titulo:'Somewhere Over The Rainbow', artista:"Israel Kamakawiwo'ole", src:'musicas/10.mp3', img:'imagens/9.jpeg'}
];

let infos = [
    {Qst1:'Rather Be',Qst2:'Clean Bandit',Qst3:'Eletrônica/Pop',Qst4:'2014 (Década de 10)',Qst5:'Caixa eletrônica',Qst6:'Violino',Qst7:'nenhum',Qst8:'Reino Unido',Qst9:'Caixa eletrônica, Violino, Piano'},
    {Qst1:'Garota de Ipanema',Qst2:'Tom Jobim',Qst3:'Bossa Nova',Qst4:'1962 (Década de 60)',Qst5:'Bateria, chocalho',Qst6:'Violão, baixo',Qst7:'flauta',Qst8:'Brasil',Qst9:'bateria, Violão, Baixo eletrônico, Piano, Chocalho, Flauta'},
    {Qst1:'Vagalumes',Qst2:'Pollo',Qst3:'rap/hip-hop',Qst4:'2012 (Década de 10)',Qst5:'Bateria',Qst6:'Violão',Qst7:'nenhum',Qst8:'Brasil',Qst9:'Bateria, Violão, Piano'},
    {Qst1:'Time in a Bottle',Qst2:'Jim Croce',Qst3:'Pop',Qst4:'1972 (Década de 70)',Qst5:'Bateria e tambores leves',Qst6:'Violões e Guitarras',Qst7:'nenhum',Qst8:'Estados Unidos',Qst9:' Violão, Bateria, Piano eletrônico'},
    {Qst1:'Preciso Me Encontrar',Qst2:'Cartola',Qst3:'Samba',Qst4:'1970 (Década de 70)',Qst5:'Pandeiro e Cuíca',Qst6:'Violão',Qst7:'Fagote',Qst8:'Brasil',Qst9:'Pandeiro, Cuíca, Violão, Fagote'},
    {Qst1:'O mundo é um Moinho',Qst2:'Cartola',Qst3:'Samba',Qst4:'1976 (Década de 70)',Qst5:'pandeiro',Qst6:'Violão',Qst7:'flauta e saxofone',Qst8:'Brasil',Qst9:'Pandeiro, Violão, Flauta'},
    {Qst1:'Welcome to the jungle',Qst2:"Guns N' Roses",Qst3:'Rock',Qst4:'1987 (Década de 80)',Qst5:'Bateria',Qst6:'guitarras elétricas e baixo eletrônico',Qst7:'nenhum',Qst8:'Estados Unidos',Qst9:'Bateria, Guitarras elétricas, Baixo eletrônico'},
    {Qst1:'Beautiful Girls',Qst2:'Sean Kingston',Qst3:'Reggae / Pop',Qst4:'2007 (Anos 2000s)',Qst5:'Bateria',Qst6:'Baixo eletrônico',Qst7:'nenhum',Qst8:'Estados Unidos',Qst9:'Bateria, Piano, Baixo eletrônico'},
    {Qst1:'Me and the Devil Blues',Qst2:'Robert Johnson',Qst3:'Blues',Qst4:'1938 (Década de 30)',Qst5:'Não possui',Qst6:'Violão',Qst7:'Não possui',Qst8:'Estados Unidos',Qst9:'Violão'},
    {Qst1:'Somewhere Over The Rainbow',Qst2:"Israel Kamakawiwo'ole",Qst3:'Reggae',Qst4:'1939 (Década de 30)',Qst5:'não possui',Qst6:'Ukulele',Qst7:'não possui',Qst8:'Estados Unidos',Qst9:'Ukulele'}
];

let musica = document.querySelector('audio');
let indexMusica = Math.floor((Math.random()*(infos.length - 1)));

let duracaoMusica = document.querySelector('.fim');
let imagem = document.querySelector('img');
let nomeMusica = document.querySelector('.descricao h2');
let nomeArtista = document.querySelector('.descricao i');

renderizarMusica(indexMusica);
renderizarChecklist(indexMusica);

// Eventos
document.querySelector('.botao-play').addEventListener('click', tocarMusica);

document.querySelector('.botao-pause').addEventListener('click', pausarMusica);

musica.addEventListener('timeupdate', atualizarBarra);

document.querySelector('.anterior').addEventListener('click', () => {
    indexMusica = randomize(indexMusica);
    pausarMusica();
    renderizarMusica(indexMusica);
    renderizarChecklist(indexMusica);
});

document.querySelector('.proxima').addEventListener('click', () => {
    indexMusica = randomize(indexMusica);
    pausarMusica();
    renderizarMusica(indexMusica);
    renderizarChecklist(indexMusica);
});

// Funções
function renderizarMusica(index){
    musica.setAttribute('src', musicas[index].src);
    musica.addEventListener('loadeddata', () => {
        nomeMusica.textContent = musicas[index].titulo;
        nomeArtista.textContent = musicas[index].artista;
        imagem.src = musicas[index].img;
        duracaoMusica.textContent = segundosParaMinutos(Math.floor(musica.duration));        
    });
}

function renderizarChecklist(index){
    musica.addEventListener('loadeddata', () => {
        document.querySelector('.nomeMusicaQst').textContent = infos[index].Qst1;
        document.querySelector('.nomeCantorQst').textContent = infos[index].Qst2;
        document.querySelector('.generoMusicaQst').textContent = infos[index].Qst3;
        document.querySelector('.decadaLancamentoQst').textContent = infos[index].Qst4;
        document.querySelector('.instrumentoPercurssaoQst').textContent = infos[index].Qst5;
        document.querySelector('.instrumentoCordasQst').textContent = infos[index].Qst6;
        document.querySelector('.instrumentoSoproQst').textContent = infos[index].Qst7;
        document.querySelector('.origemMusicaQst').textContent = infos[index].Qst8;
        document.querySelector('.contemInstrumentoQst').textContent = infos[index].Qst9
    });
}

function tocarMusica(){
    musica.play();
    document.querySelector('.botao-pause').style.display = 'block';
    document.querySelector('.botao-play').style.display = 'none';
}

function pausarMusica(){
    musica.pause();
    document.querySelector('.botao-pause').style.display = 'none';
    document.querySelector('.botao-play').style.display = 'block';
}

function atualizarBarra(){
    let barra = document.querySelector('progress');
    barra.style.width = Math.floor((musica.currentTime / musica.duration) * 100) + '%';
    let tempoDecorrido = document.querySelector('.inicio');
    tempoDecorrido.textContent = segundosParaMinutos(Math.floor(musica.currentTime));
}

function segundosParaMinutos(segundos){
    let campoMinutos = Math.floor(segundos / 60);
    let campoSegundos = segundos % 60;
    if (campoSegundos < 10){
        campoSegundos = '0' + campoSegundos;
    }

    return campoMinutos+':'+campoSegundos;
}

function randomize(indexMusica){
    let indexRandom;
    do{
        indexRandom = Math.floor((Math.random()*(infos.length - 1))); //gera um indice aleatorio
    }while(indexRandom == indexMusica);
    return indexRandom;
}