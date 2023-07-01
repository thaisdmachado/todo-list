# todo-list

## Layout:
A aplicação deve ter um menu lateral e uma área de conteúdo

## Menu lateral
Aparecer no topo o nome da aplicação "Todo List"
Aparecer um botão para cadastro de uma nova tarefa
Aparecer uma lista das tarefas cadastradas
Aparecer um indicador informando qual tarefa está selecionada.

## Área de conteúdo
Quando não houver tarefa selecionada, aparecer uma mensagem "Adicione ou selecione um item!" com um botão escrito "Adicionar"
Quando tiver uma tarefa selecionada, aparecer o nome da tarefa selecionada
Quando tiver uma tarefa selecionada, ao lado do nome da tarefa, deve aparecer um botão para remover a tarefa
Quando tiver uma tarefa selecionada, aparecer um placeholder escrito "Clique no texto ou na área em branco para editar"
Quando tiver uma tarefa selecionada, ser possível escrever livremente textos, números e fazer quebras de linhas.

## Informações técnicas
Salvar os dados no LocalStorage para persisência dos dados cadastrados.
Não poderá utilizar nenhuma biblioteca de componentes visuais, exp.: Bootstrap, Ant.Design, Mantine, etc. Os componentes e estilos devem ser criados com folhas de estilos CSS, ou Bibliotecas como Styled Components para utilizar CSS in JS.
A aplicação deve ser feita utilizando Typescript
A aplicação pode ser feita em qualquer stack que utilize react, como: CRA (Create React App, exp: npx create-react-app todo-list), ViteJS, NextJS, ou RemixJS

## Atividades Bonus Opcional de Desafio
Ao remover uma tarefa, abrir uma modal de confirmação antes de remover.
Mostrar no footer do conteúdo sempre fixado, informações como: Quantidade de palavras e Quantidade de caracteres.
Quando estiver digitando no conteúdo, fazer desaparecer o placeholder "Clique no texto ou na área em branco para editar"
Mostrar no footer do menu lateral a quantidade de tarefas criadas.
