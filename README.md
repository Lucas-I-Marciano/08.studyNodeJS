﻿# Study - NodeJS

NodeJS começa a sonhar em usar o JavaScript fora da internet com a introdução do Motor V8 do Google Chrome

Por quê o NodeJS?

- Legal para fazer MVP de programas
- Muito rápido e escalável: Natureza assíncrona e Eventos
- Você consegue trabalhar com Back e Front além de todo suporte para disponibilizar isso em nuvem

O node, o JavaScript e os outros ambientes

- NodeJS é o ambiente onde eu executo minha linguagem de programação (JavaScript)
- Se o Bam roubar o papel do NodeJS, a linguagem é a mesma (Meu conhecimento não é perdido)

Assíncrono e não bloqueante

- Node não precisa uma ação acabar para executar a outra ação

Modularidade e o desacoplamento de código

- Sempre focar em fazer códigos modulares e desacoplados, que não dependam diretamente uns dos outros
- Exemplo do bug em um arquivo, se arrumar ele e tiver arquivos ligados direto nele, vou precisar ir 1 a 1
- Pensar em sempre fazer arquivos que poderiam ser usados por completos desconhecidos

O Módulo Principal ou Ponto de Entrada

- Preciso de um orquestrador, alguém que comande os módulos do meu projeto
- Pelo node é a chave "main" do package.json

EsModules vs CommonJS (recapitulação)

- Definido na chave "type" do meu package.json (EsModule = "module", CommonJS = )

O módulo Path

- Lida com caminhos mais fácil

O módulo OS

- Legal que introduziu que extensão mjs é module ai não preciso passar no package.json e cjs é explicitando common

O módulo FS

- Lidar com files

Sobre Eventos

- EventEmitter é uma classe onde posso definir um emissor e um escutador, necessário fazer em uma order
- Primeiro eu "combino" a reação, depois eu emito a açao
