import AbacateImage from './assets/abacate.jpg';
import AboboraImage from './assets/abobora.jpg';
import AlfaceImage from './assets/alface.jpg';
import AmendoimImage from './assets/amendoim.jpg';
import ArrozImage from './assets/arroz.jpg';
import CebolaImage from './assets/cebola.jpg';
import FeijaoImage from './assets/feijao.jpg';
import MilhoImage from './assets/milho.jpg';

const data = [{
        id: '1',
        title: 'Abacate',
        image: AbacateImage,
        fungi: [{
                id: '1',
                name: 'Pulgão',
                description: 'Danos. Pulgões, tanto jovens (ninfas) quanto adultos, alimentam-se de seiva, causando danos ao abacate desde a emergência das plantas até que os grãos estejam completamente formados.'
            },
            {
                id: '2',
                name: 'Verrugose',
                description: 'O fungo Sphaceloma perseae é o agente causador da verrugose. Ele se dissemina principalmente através de esporos que podem ser transportados pelo vento, água da chuva, insetos e ferramentas contaminadas.'
            },
        ],
    },
    {
        id: '2',
        title: 'Abóbora',
        image: AboboraImage,
        fungi: [{
                id: '1',
                name: 'Mancha Angular',
                description: 'A mancha angular em abóboras pode causar perdas significativas se não for controlada adequadamente. A identificação precoce, junto com medidas preventivas e corretivas, é crucial para minimizar os danos. Consultar um agrônomo para obter um plano de manejo detalhado e adaptado às suas condições específicas pode ser altamente benéfico.s'
            },
            {
                id: '2',
                name: 'Mosca Branca',
                description: 'O manejo integrado de pragas (MIP) é a abordagem mais eficaz para controlar a mosca-branca em abóboras. Isso envolve a combinação de métodos culturais, biológicos, químicos e físicos, além de monitoramento constante. Consultar um agrônomo para adaptar um plano de manejo específico às suas condições locais pode ajudar a reduzir a infestação e minimizar os danos causados pela mosca-branca.'
            },
        ],
    },
    {
        id: '3',
        title: 'Alface',
        image: AlfaceImage,
        fungi: [{
                id: '1',
                name: 'Septoriose',
                description: 'O manejo integrado da septoriose em alface deve combinar métodos culturais, químicos e biológicos. Manter um ambiente menos favorável ao desenvolvimento do fungo (como reduzir a umidade foliar e melhorar a circulação de ar) é fundamental. Além disso, a utilização de fungicidas deve ser realizada de maneira estratégica e baseada em recomendações técnicas para evitar resistência. Para um plano de manejo mais detalhado e específico para sua região, é recomendável consultar um agrônomo.'
            },
            {
                id: '2',
                name: 'Picão',
                description: 'Controlar o picão em alface requer uma abordagem multifacetada, combinando práticas culturais, mecânicas, químicas e biológicas. O manejo eficaz da planta daninha não só melhora a produtividade e a qualidade da alface, mas também contribui para a sustentabilidade da produção agrícola. Para um plano de manejo específico e adaptado às condições locais, é recomendável consultar um agrônomo.'
            },
        ],
    },
    {
        id: '4',
        title: 'Amendoim',
        image: AmendoimImage,
        fungi: [{
                id: '1',
                name: 'Puccinia arachidis',
                description: 'Causa ferrugem do amendoim, que provoca manchas amarelas nas folhas.'
            },
            {
                id: '2',
                name: 'Aspergillus niger',
                description: 'Causa mancha preta no amendoim, que afeta a qualidade das sementes.'
            },
        ],
    },
    {
        id: '5',
        title: 'Arroz',
        image: ArrozImage,
        fungi: [{
                id: '1',
                name: 'Magnaporthe oryzae',
                description: 'Causa brusone, uma doença que forma lesões nas folhas e nas panículas.'
            },
            {
                id: '2',
                name: 'Rhizoctonia solani',
                description: 'Causa a queima das bainhas, resultando em manchas marrons nas folhas.'
            },
        ],
    },
    {
        id: '6',
        title: 'Cebola',
        image: CebolaImage,
        fungi: [{
                id: '1',
                name: 'Alternaria porri',
                description: 'Causa a mancha púrpura na cebola, que resulta em manchas concêntricas nas folhas.'
            },
            {
                id: '2',
                name: 'Botrytis allii',
                description: 'Causa a podridão do pescoço, afetando a qualidade das cebolas armazenadas.'
            },
        ],
    },
    {
        id: '7',
        title: 'Feijão',
        image: FeijaoImage,
        fungi: [{
                id: '1',
                name: 'Colletotrichum lindemuthianum',
                description: 'Causa a antracnose do feijoeiro, resultando em lesões escuras nos feijões.'
            },
            {
                id: '2',
                name: 'Rhizoctonia solani',
                description: 'Causa a podridão das raízes e o tombamento das plântulas.'
            },
        ],
    },
    {
        id: '8',
        title: 'Milho',
        image: MilhoImage,
        fungi: [{
                id: '1',
                name: 'Puccinia sorghi',
                description: 'Causa a ferrugem comum do milho, que produz pústulas de cor laranja nas folhas.'
            },
            {
                id: '2',
                name: 'Fusarium verticillioides',
                description: 'Causa a podridão da espiga, afetando a qualidade dos grãos.'
            },
        ],
    },
];

export default data;