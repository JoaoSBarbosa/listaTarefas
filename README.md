# Lista de Tarefas 📜

Este é um projeto simples de uma lista de tarefas, desenvolvido em React com Next.js e TypeScript. Ele utiliza o Tailwind CSS para estilização dos componentes.

## Funcionalidades

- Adicionar uma nova tarefa à lista.
- Remover uma tarefa da lista.
- Alterar uma tarefa da lista.

## Pré-requisitos

Certifique-se de ter o Node.js e o npm instalados em sua máquina.

## Como executar o projeto

1. Clone este repositório em sua máquina local:

   ```
   git clone https://github.com/seu-usuario/nome-do-repositorio.git
   ```

2. Navegue até o diretório do projeto:

   ```
   cd nome-do-repositorio
   ```

3. Instale as dependências do projeto:

   ```
   npm install
   ```

4. Inicie o servidor de desenvolvimento:

   ```
   npm run dev
   ```

5. Acesse o aplicativo no seu navegador em `http://localhost:3000`.

## Estrutura do projeto

- `src/app/pages/page.tsx`: Página inicial do projeto que exibe a lista de tarefas.

## Como funciona

- O state  `list` mantém um array de tarefas.
- Ao clicar no botão "Adicionar", o valor do campo de input é capturado e adicionado ao array de tarefas por meio de um método de clonagem.
- Ao clicar no botão "Remover" em um item da lista, é capturado o índice do item e, em seguida, uma nova lista é criada usando o método `filter` para excluir o item correspondente ao índice.
- Ao clicar no botão "Alterar" em um item da lista, é possível modificar o conteúdo da tarefa.

Sinta-se à vontade para personalizar e expandir este projeto de acordo com suas necessidades. 

Divirta-se!
