# instituto-mao-amiga.
Aplicativo desenvolvido para a matéria de Construção de Software II.

## 🎯 Objetivo do Aplicativo

O aplicativo foi desenvolvido para ajudar o Instituto Mão Amiga no gerenciamento e acompanhamento dos pontos de coleta, além de permitir o registro e a consulta do histórico das doações recebidas.

## 📱 Tecnologias Utilizadas

* React Native com Expo
* TypeScript
* React Navigation, utilizando Tabs e Stack Navigator
* AsyncStorage, responsável pelo armazenamento local e pela persistência dos dados mesmo quando o aplicativo estiver offline

## 📋 Roteiro para Demonstração

### 1. Cadastrar uma Doação

Na parte inferior da tela, pressione o botão central de ação **(+) / Registrar Doação**.

Também é possível realizar o cadastro pela aba **Doações**, caso ela esteja sem registros, utilizando o botão **Registrar doação**.

Será aberta a janela **Registrar Nova Doação**. Preencha os campos solicitados:

* **Tipo de Item Doado:** informe o item que está sendo recebido, como "Cesta Básica" ou "Casaco de Frio".
* **Quantidade:** informe a quantidade de itens, por exemplo, 5.
* **Ponto de Destino:** selecione um dos pontos de coleta disponíveis, como "Sede Central".

Depois de preencher as informações, pressione **Salvar**. O registro será armazenado localmente e a janela será fechada.

### 2. Consultar o Histórico de Doações

Na barra de navegação inferior, entre na aba **Doações**, identificada pelo ícone de coração nas mãos.

Nessa tela serão apresentadas as informações relacionadas às doações cadastradas.

No **Card de Resumo Geral**, é possível visualizar:

* Quantidade total de doações registradas;
* Número total de itens recebidos;
* Quantidade de itens agrupados por tipo.

Abaixo do resumo fica o **Histórico de Doações**, contendo cards com as informações de cada registro, como tipo do item, quantidade, data e horário do cadastro e o respectivo ponto de coleta.

### 3. Pesquisar e Filtrar Registros

Dentro da aba **Doações**, utilize o campo **Buscar doações**, localizado na parte superior da lista.

Digite parte do nome de algum item cadastrado, como **"Cesta"** ou **"Casaco"**. Os resultados serão atualizados automaticamente, mostrando somente as doações que correspondem ao texto informado.

Também é possível realizar um teste semelhante na aba **Pontos**, utilizando o campo **Buscar pontos** para encontrar um ponto de coleta específico pelo nome.

Para visualizar novamente todos os registros, basta apagar o conteúdo digitado no campo de pesquisa.

### 4. Alterar uma Doação

Na aba **Doações**, selecione o card referente à doação que deseja modificar.

A tela de **Detalhes da Doação** será aberta. Nela, pressione **Editar Doação** ou utilize o ícone de lápis localizado no canto superior direito.

Será exibida a janela de edição com os dados atuais da doação já preenchidos.

Faça a alteração desejada, como mudar a quantidade de **5 para 10** ou selecionar outro ponto de destino.

Após realizar as alterações, pressione **Salvar**. As novas informações serão atualizadas imediatamente na tela de detalhes e no card da doação.

### 5. Remover uma Doação

Na tela de **Detalhes da Doação**, pressione **Excluir Doação** ou utilize o ícone de lixeira no canto superior direito.

Antes da exclusão, o aplicativo exibirá uma mensagem solicitando a confirmação:

**"Deseja realmente excluir esta doação? Esta ação não pode ser desfeita."**

Para prosseguir, pressione **Excluir**.

Após a confirmação, o registro será removido do armazenamento local e o aplicativo retornará automaticamente para a tela de **Doações**. A lista e os valores apresentados no resumo serão atualizados de acordo com a exclusão realizada.

### 6. Testar a Persistência dos Dados

Para verificar se os dados permanecem salvos, primeiro certifique-se de que existe pelo menos uma doação registrada no histórico.

Em seguida, feche completamente o aplicativo. No dispositivo ou emulador, abra o menu de aplicativos recentes e encerre o aplicativo utilizando o gesto de deslizar para cima ou a opção de fechar.

Outra possibilidade é utilizar a tecla **r** no terminal do Metro Bundler para recarregar o aplicativo.

Depois, abra o aplicativo novamente e acesse a aba **Doações**.

Os registros cadastrados e as alterações realizadas anteriormente deverão continuar disponíveis. Isso confirma que os dados estão sendo mantidos localmente através do **AsyncStorage**, permitindo a persistência das informações mesmo após o fechamento do aplicativo.

## 🚀 Como Rodar o Projeto

Primeiramente, faça o clone do repositório e instale todas as dependências necessárias:

```bash
npm install
```

Depois, inicialize o servidor do Expo:

```bash
npx expo start
```

Para executar o projeto em um dispositivo ou emulador Android, pressione **a** no terminal ou utilize:

```bash
npx expo start --android
```

Para executar no iOS, pressione **i** no terminal ou execute:

```bash
npx expo start --ios
```

