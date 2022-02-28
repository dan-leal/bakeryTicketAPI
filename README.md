# testePratico

Teste prático de uma API de controle de comanda eletrônica de uma padaria.

## Objetivos

1. Identifique as classes, objetos e métodos desse cenário
2. Desenhe um diagrama de classes, somente com o nome das classes, especificando os relacionamentos e as multiplicidades.
3. Desenvolva a aplicação. Utilize um SGBD (Atlas - MongoDB) que possa armazenar os dados e executar as operações do cenário;
4. Identifique as tecnologias escolhidas na documentação a ser enviada.
5. Forneça as consultas SQL para obter os seguintes relatórios:
6. Os valores totais das vendas diárias;
7. O ticket médio diário
8. Os três produtos mais vendidos e os seus respectivos totais das vendas;
9. Os três produtos mais vendidos e os seus respectivos totais das vendas;

## Diagrama de classe

## Identificação

### Classes:

- Clientes
- Comandas
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
