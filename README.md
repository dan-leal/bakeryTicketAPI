# testePratico

Teste prático de uma API de controle de comanda eletrônica de uma padaria.

Para iniciar o projeto siga os seguintes comandos:
``` shell
npm install
```

Para conectar com o banco, utilize a seguinte url localizada no arquivo `app\config\db.config.js`.
``` js
mongodb+srv://padeiroDan:padaria123@padariadb.r9zja.mongodb.net/padariaDB?retryWrites=true&w=majority  
```

## Identificando Tecnologias
- Linguagem de programação: NodeJS
- SGBD: MongoDB Compass / Atlas 
- Banco de dados: Mongo DB
- ORM: Mongoose

## Objetivos

1. Identifique as classes, objetos e métodos desse cenário
2. Desenhe um diagrama de classes, somente com o nome das classes, especificando os relacionamentos e as multiplicidades.
3. Desenvolva a aplicação. Utilize um SGBD (Atlas - MongoDB) que possa armazenar os dados e executar as operações do cenário;
4. Identifique as tecnologias escolhidas na documentação a ser enviada.
5. Forneça as consultas SQL para obter os seguintes relatórios:
  - Os valores totais das vendas diárias;
  - O ticket médio diário
  - Os três produtos mais vendidos e os seus respectivos totais das vendas;
  - Os três produtos mais vendidos e os seus respectivos totais das vendas;

## Diagrama de classe
![image](https://user-images.githubusercontent.com/65087142/156045591-73a74878-e0b9-415e-904e-ed36e27e89fc.png)

## Identificação

### Classes:

- Comanda
- Produtos

### Atributos:

- Comanda

  - \_id - chave ID mongoDB
  - nomeCliente - nome do Cliente
  - numComanda - String
  - dataCompra - Date
  - consumidos - Array-
    - quantidadeConsumidos - number - qtdPorProdutoConsumido
    - produtosConsumidos - String - nomeProduto

- Produtos
  - \_id - chave ID mongoDB pros produtos
  - valorDoProduto - Decimal
  - nomeDoProduto - String

## Métodos:

#### Produtos:

- Cadastra produto novo
- Lista produtos

#### Comanda

- Primeiro produto consumido, gera-se uma comanda.
  - Enquanto for consumido outros produtos, adiciona a mesma comanda os demais produtos.
- Lista Comandas

As informações a seguir se referem a uma aplicação de controle de comanda eletrônica de uma padaria.
O cliente usa uma comanda eletrônica durante suas compras na Padaria.
A cada produto consumido, o atendente registra em sua comanda (que possui uma numeração e a data da compra) o produto e a quantidade.
Ao passar no caixa na saída da Padaria, a Caixa lê os gastos da comanda, finalizando a compra.
Na leitura da comanda, verifica-se o valor unitário de cada produto a fim de calcular o valor total da compra.

## Operações da API
### Produtos
Rota: `localhost:8080/produtos`  
Método HTTP: **GET**  
Funcionalidade: Retorna os produtos cadastrados  
![image](https://user-images.githubusercontent.com/65087142/156045801-bceb7f95-2334-4154-b0cf-4043aa393ec7.png)

Rota: `localhost:8080/produtos`  
Método HTTP: **POST**  
Funcionalidade: Cadastra no banco os produtos.  
![image](https://user-images.githubusercontent.com/65087142/156045865-644627cc-15ff-4023-a08d-4a4cf8423160.png)

### Comandas
Rota: `localhost:8080/comandas`  
Método HTTP: **GET**  
Funcionalidade: Retorna as comandas cadastradas  
![image](https://user-images.githubusercontent.com/65087142/156045903-31dd1072-9d21-4015-9162-323370c4ef61.png)

Rota: `localhost:8080/comandas`  
Método HTTP: **POST**  
Funcionalidade: Inclui o determinado produto na comanda.  

Caso cliente não possua sua comanda, ele gera comanda e inclui o produto.  
![image](https://user-images.githubusercontent.com/65087142/156045966-a5b07802-e368-4028-9dc7-a933a0de0187.png)

Caso cliente possua, ele inclui no array de consumidos.  
![image](https://user-images.githubusercontent.com/65087142/156045981-dbdcfc3b-6d6c-42d7-9da3-1f81ec0e8712.png)

Resultado:  
![image](https://user-images.githubusercontent.com/65087142/156049285-977041bd-f00d-44e9-99b2-83b43c2b88ef.png)


## Consultar SQL
1. Valores totais das vendas diárias.
2. O ticket médio diário (valor das vendas totais / número de vendas).
3. Três produtos mais vendidos e os seus respectivos totais das vendas.
4. Três produtos menos vendidos e os seus respectivos totais das vendas.
