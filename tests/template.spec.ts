import { test, expect } from '@playwright/test';

const MEU_RM   = 'COLOQUE AQUI SEU RM'
const BASE_URL = 'https://prova.carvalho.cc';

test('submissão completa da prova', async ({ browser }) => {
  const context = await browser.newContext({
    extraHTTPHeaders: { 'x-exam-student-id': MEU_RM },
  });
  const page = await context.newPage();

  await page.goto(BASE_URL);

  // Dry-run banner should NOT appear
  await expect(page.locator('#dry-run-banner')).not.toBeVisible();

  // escreva o teste a partir daqui
  await page.getByLabel("Número de Matrícula").fill("251034")
  await page.getByLabel("Nome Completo").fill("Angelo Abreu")
  await page.getByLabel("URL").fill("https://github.com/AbreuAngl/ProvaDS.git")
  await page.getByRole('button', { name: 'Iniciar Prova'}).click();

  await page.getByText('Uma função que valida os dados de entrada, salva no banco de dados e envia um e-mail').click()
  await page.getByRole('button', { name: 'Próxima'}).click();
  

  // Confirmar envio
  // Remover o comentário quando terminar de escrever o código
  // await expect(page.getByRole('heading', { name: 'Prova enviada!' })).toBeVisible();
});