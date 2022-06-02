## :page_with_curl: Projeto

Realizando testes End to End(e2e) no React-Native!
<LINKEDIN>
Alguns posts atrás eu falei sobre testes E2E e sobre mais 2 tipos de testes, mas relambrando, testes E2E(de ponta a ponta) tem com objetivo testar a aplicação mais próximo daquilo que o usuário faria, ou seja, quando o usuário vai usar determinada interface da aplicação, determinada funcionalidade esse usuário tem um caminho a realizar, uma sequência de passos até ele concluir aquilo que ele deseja(ex: para fazer um cadastro o usuário deve clicar em um input preencher ele e depois clicar em um botão de confirmação - esses são os passos que o usuário teve que fazer para realizar esse objetivo). Esse tipo de teste visa simular exatamente o que o usuário faria na aplicação.
<LINKEDIN />

Optei por utilizar o expo no bare workflow porque vou realizar testes E2E e vai ser necessário fazer algumas configurações nativas para cada ambiente.
Utilizando a biblioteca Detox, que é uma biblioteca focada em testes E2E, um fato interessante é que ela utiliza o jest que é outra biblioteca para realizar testes.
[Veja mais dessa biblioteca aqui!](https://github.com/wix/Detox)

Uma das coisas mais delicadas nos testes E2E que testam simulando como se fosse o usuário interagindo com a aplicação, sempre foi que algumas ações são assíncronas, é muito difícil ajustar o timing do teste automatizado aguardar um click do usuário, simular o click do usuário e esperar esse click acontecer. E o detox é muito bom nesse timing.
