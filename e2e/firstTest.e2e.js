describe('My first suite tests E2E', () => {
  beforeAll(async () => {
    // abrindo o app
    await device.launchApp();
  });

  // antes de cada teste
  beforeEach(async () => {
    // fazendo um reload no app
    await device.reloadReactNative();
  });

  it('should have info about cancel subscription', async () => {
    const info = await element(by.text('Cancel anytime. Ofter terms apply.'));
    await expect(info).toBeVisible();
  });

  it('should subscribe to the premium plan', async () => {
    // selecionando um elemento pelo id e dando um click(tap())
    await element(by.id('option-premium')).tap();

    // selecionando o elemento input e clicando nele, porque o usuário não pode
    // digitar nele se ele não estiver em foco
    await element(by.id('input-email')).tap();
    // o input já está em foco e agora eu coloco o que o teste tem que digitar
    // dentro do input
    await element(by.id('input-email')).typeText('rodrigo@email.com');

    // selecionando o elemento TouchableWithoutFeedback(keyboard) e dando um
    // click nele, para ele fechar o teclado
    await element(by.id('keyboard')).tap();
    // selecionando o elemento button e dando um click nele
    await element(by.id('button-subscribe')).tap();

    // delay
    await new Promise((r) => setTimeout(r, 5000)); // 5000 => 5ms

    // estou esperando que o elemento que selecionei seja visível na tela
    await expect(element(by.id('confirmation-message'))).toBeVisible();
  });
});
