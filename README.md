# pucmg-nodejs-api

Montagem de uma API RESTful

O ambiente que vamos criar envolve as ferramentas listadas logo a seguir. Comece fazendo o download dos softwares necessários e instale na sua máquina (Há versões destes software para todos os sistemas operacionais: windows | linux | mac). A instalação é simplificada e não exige conhecimento prévio. Segue a lista com os respectivos links para download. 

git | Controle de VersãoLinks to an external site.
Visual Studio Code | Integrated Development EnvironmentLinks to an external site.
Webdock | VPS ServersLinks to an external site.
Node.js | Plataforma de Desenvolvimento JavaScriptLinks to an external site.
Nessa tarefa, vamos montar uma API simplificada no padrão RESTful com o Node.js e o Express, tendo um array simples como estrutura de dados. 

O ambiente que vamos precisar é criado a partir do Visual Studio Code (VSCode). Abra o VSCode e crie uma aplicação Node.js utilizando o NPM e crie um repositório de código com o git. Em seguida, crie uma conta gratuita em um servidor da sua preferência (recomendamos o WebdockLinks to an external site.), monte o servidor Node.JSLinks to an external site. e faça o deploy da aplicação para o ambiente criado.

Você deverá submeter, além da URL um arquivo ZIP com o código do servidor criado por você.

**Passo 1 – Criar a aplicação em Node.js para uma API Restful**
Monte uma API RESTful de CRUD tendo como estrutura de dados um objeto JSON, conforme apresentado no quadro 1.

Quadro 1 – Estrutura de Dados de Produto

const lista_produtos = {
    produtos: [
        { id: 1, descricao: "Arroz parboilizado 5Kg", valor: 25.00, marca: "Tio João"  },
        { id: 2, descricao: "Maionese 250gr", valor: 7.20, marca: "Helmans"  },
        { id: 3, descricao: "Iogurte Natural 200ml", valor: 2.50, marca: "Itambé"  },
        { id: 4, descricao: "Batata Maior Palha 300gr", valor: 15.20, marca: "Chipps"  },
        { id: 5, descricao: "Nescau 400gr", valor: 8.00, marca: "Nestlé"  },
    ]
}

A API deve apresentar a seguinte estrutura

|           **Ação**          | **Operação (CRUD)** | **Mapeamento da URL** |
|:---------------------------:|:-------------------:|:---------------------:|
| Incluir um produto          | CREATE              |                       |
| Obter a lista de produtos   | RETRIEVE            |                       |
| Obter um produto específico | RETRIEVE            |                       |
| Alterar um produto          | UPDATE              |                       |
| Excluir um produto          | DELETE              |                       |

**Passo 2 - Entrega da atividade**
Publique o site em um ambiente na Internet. Entregue um arquivo ZIP com o código fonte e o link para sua aplicação no site publicado.
