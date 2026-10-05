# instituto-mao-amiga
Aplicativo desenvolvido para a matéria de Construção de Software II.

O objetivo do aplicativo é auxiliar o Instituto Mão Amiga a controlar e visualizar seus pontos de coleta e gerenciar o histórico de doações recebidas.

📱 Tecnologias Utilizadas
React Native com Expo
TypeScript
React Navigation (Tabs e Stack Navigator)
AsyncStorage (armazenamento local e persistência offline)
📋 Roteiro de Demonstração
Siga o passo a passo abaixo para demonstrar e testar todas as funcionalidades principais do aplicativo:

1. Registrar uma Doação
Na barra de navegação inferior, toque no botão de ação central (+ / Registrar Doação). (Alternativa: Se estiver na aba Doações vazia, toque no botão "Registrar doação").
O modal Registrar Nova Doação será exibido:
No campo Tipo de Item Doado, informe o item (ex.: Cesta Básica ou Casaco de Frio).
No campo Quantidade, digite a quantidade desejada (ex.: 5).
No campo Ponto de Destino, toque no seletor e escolha um dos pontos de coleta cadastrados (ex.: Sede Central).
Toque no botão Salvar.
A doação é gravada no armazenamento local e o modal é fechado.
2. Ver o Histórico de Doações
Na barra inferior, selecione a aba Doações (ícone de coração nas mãos).
Observe as informações exibidas na tela:
Card de Resumo Geral: exibe o total de doações registradas, o total acumulado de itens e o agrupamento com contagem por tipo de item.
Lista de Histórico: cards listando cada doação com tipo de item, quantidade, data e horário de registro, além do ponto de coleta vinculado.
3. Filtrar Doações e Pontos
Na aba Doações, localize a barra de pesquisa "Buscar doações" no topo da lista.
Digite parte do nome de um item cadastrado (ex.: Cesta ou Casaco).
Note que a lista é filtrada dinamicamente em tempo real, exibindo apenas as doações correspondentes ao termo digitado.
(Opcional) Teste também na aba Pontos usando a barra "Buscar pontos" para filtrar os pontos de coleta pelo nome.
Apague o texto do campo de busca para restaurar a listagem completa.
4. Editar uma Doação
Na aba Doações, toque sobre o card de uma doação para abrir a tela de Detalhes da Doação.
Na tela de detalhes, toque no botão "Editar Doação" (ou no ícone de lápis no canto superior direito do cabeçalho).
O modal de edição abrirá com os dados atuais da doação preenchidos.
Altere uma ou mais informações (por exemplo, aumente a quantidade de 5 para 10 ou mude o ponto de destino).
Toque no botão Salvar.
Observe que os detalhes na tela e o card de informações são atualizados imediatamente.
5. Excluir uma Doação
Ainda na tela de Detalhes da Doação, toque no botão "Excluir Doação" (ou no ícone de lixeira no cabeçalho).
Uma caixa de diálogo de confirmação será exibida: "Deseja realmente excluir esta doação? Esta ação não pode ser desfeita."
Toque em Excluir para confirmar.
O item é removido do armazenamento e o app retorna automaticamente para a tela de Doações, onde a lista e os totais do resumo já refletem a exclusão.
6. Fechar e Reabrir o App (Teste de Persistência)
Certifique-se de ter ao menos uma doação registrada no histórico.
Feche completamente o aplicativo:
No dispositivo/emulador: abra o menu de multitarefa e encerre o app (swipe up / fechar app), ou pressione r no terminal do Metro Bundler para recarregar.
Abra o aplicativo novamente.
Navegue até a aba Doações.
Resultado esperado: Todos os registros previamente criados e editados continuam salvos e disponíveis, validando a persistência de dados local via AsyncStorage.
🚀 Como Executar o Projeto
Clone o repositório e instale as dependências:

npm install
Inicie o servidor Expo:

npx expo start
Execute no emulador ou dispositivo físico:

Android: Pressione a no terminal ou execute npx expo start --android.
iOS: Pressione i no terminal ou execute npx expo start --ios.

