# DESAFIO BACKEND PLENO do AnotaAi

---

No desafio original é preciso desevolver com Express.js como framework web, irei utilizar Nestjs.js, a ideia é desenvolver uma api com as regras de negócio solicitadas. também será utilizado o banco de dados DocumentDB da AWS, no desafio original apenas é necessário um mongoDB, AWS SQS para notificações de alterações no catálogo e AWS S3 para armazenar o catálogo JSON. projeto ficará em uma EC2.   

---

## O Desafio

Desenvolver uma API usando o Node.js para um sistema de gerenciamento de catálogo de produtos em um aplicativo de mercado. Você deve analisar e converter as seguintes histórias de usuários em rotas para o aplicativo:

**Histórias de usuário**:

- Como usuário, quero registrar um produto com seu proprietário, para que eu possa acessar seus dados no futuro (título, descrição, preço, categoria, ID do proprietário).

- Como usuário, quero registrar uma categoria com seu proprietário, para que eu possa acessar seus dados no futuro (título, descrição, ID do proprietário).

- Como usuário, quero associar um produto a uma categoria;

- Como usuário, quero atualizar os dados de um produto ou categoria;

- Como usuário, quero excluir um produto ou categoria do meu catálogo.

- Um produto só pode ser associado a uma categoria por vez.

- Suponha que os produtos e categorias pertençam apenas a um proprietário.

- Tenha em mente que este é um catálogo de produtos on-line, o que significa que haverá várias solicitações para editar itens / categorias por segundo, além de acessar o ponto de extremidade de pesquisa do catálogo.

- Considere o catálogo de produtos como uma compilação JSON de todas as categorias e itens disponíveis de propriedade de um usuário. Dessa forma, o endpoint de pesquisa de catálogo não precisa buscar informações do banco de dados.

- Sempre que houver uma alteração no catálogo de produtos, publique essa alteração no tópico "catalog-emit" no serviço AWS SQS.

- Implementar um consumidor que ouça as alterações de catálogo para um proprietário específico.

- Quando o consumidor receber uma mensagem, pesquise no banco de dados pelo catálogo desse proprietário, gere o catálogo JSON e publique-o em um bucket de serviço do AWS S3.

Você precisa desenvolver este teste usando as seguintes tecnologias:

- MongoDB para o banco de dados.
- O AWS SQS para o catálogo altera notificações.
- AWS S3 para armazenar o catálogo JSON.
- Node.js para o backend.
- Express.js como o framework web.(aqui será usado Nestjs)

---
### Diagrama representando a estrutura final do projeto:

![Diagram representing the final structure of the project:](diagram.png)

---
Repositório do desafio original : https://github.com/githubanotaai/new-test-backend-nodejs?tab=readme-ov-file
