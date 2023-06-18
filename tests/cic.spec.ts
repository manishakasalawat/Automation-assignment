import { test } from '@playwright/test';
import { LoginPage } from '../pages/POM';
import { AUTH, COMMON } from '../constants/constant';

test.beforeEach(async ({page}) =>{
    const Login = new LoginPage(page) //created object from POM
    Login.goToLogin()                 
    await Login.login(AUTH.EMAIL, AUTH.PASSWORD)
    await page.waitForTimeout(5000)
    
})

test('Verify that user can create, edit and delete contact', async ({ page }) => {
    //Creating a Contact
    await page.getByRole('link', { name: ' Contacts' }).click();
    await page.getByRole('button', { name: 'Add Contact' }).click();
    await page.getByLabel('First Name').fill('Hanuman');
    await page.getByRole('button', { name: 'Save' }).click();
    await page.waitForTimeout(8000)
    //Editing a Contact
    await page.getByRole('button', { name: 'Edit' }).nth(1).click();
    await page.waitForTimeout(5000)
    await page.getByLabel('Last Name').fill('Sharsher');
    await page.getByRole('button', { name: 'Save' }).click();
    await page.waitForTimeout(5000)
    //Deleting a Contact
    await page.locator('.fa-ellipsis-h').click()
    await page.getByText('Delete Contact').click();
    await page.getByRole('textbox').click();
    await page.getByRole('textbox').fill('DELETE');
    await page.getByRole('button', { name: 'Confirm' }).click();
    await page.waitForTimeout(3000)
  });

test('verify that user can create, edit and delete impact areas', async ({ page }) => {
    // Creating Impact Area
    await page.getByText('Impact Areas').click();
    await page.getByRole('button', { name: 'New Impact Area' }).click();
    await page.getByLabel('Impact Area Name').fill('imp test 1');
    await page.waitForTimeout(3000)
    await page.getByLabel('Impact Area Name').press('Enter');
    await page.getByRole('link', { name: 'imp test 1', exact: true }).click();
    await page.waitForTimeout(3000)
    //Editing Impact Area
    await page.locator('.fa-ellipsis-v').click()
    await page.getByText('Edit Information').click();
    await page.getByLabel('Impact Area Name').fill('impact edit');
    await page.getByRole('button', { name: 'Save' }).click();
    await page.waitForTimeout(3000)
    //Deleting Impact Area
    await page.goto(`${COMMON.URL}impact-areas`)
    await page.getByRole('link', { name: 'impact edit', exact: true }).click();
    await page.locator('.fa-ellipsis-v').click()
    await page.getByText('Delete').click();
    await page.getByRole('textbox').fill('DELETE');
    await page.getByRole('textbox').press('Enter');
    await page.waitForTimeout(3000)
  });

test('Verify that user can create, edit and delete campaign', async ({ page }) => {
    //Creating a Campaign
    await page.getByText('Campaigns').click();
    await page.getByRole('button', { name: 'Create Campaign' }).click();
    await page.getByLabel('Campaign Name').fill('Campaign Test');
    await page.getByRole('button', { name: 'Save' }).click();
    await page.waitForTimeout(3000)
    //Editing a Campaign
    await page.getByRole('button', { name: 'Actions ' }).click();
    await page.locator('a').filter({ hasText: 'Edit Information' }).click();
    await page.getByLabel('Campaign Name').fill('Edit Campaign Test');
    await page.getByRole('button', { name: 'Save' }).click();
    await page.waitForTimeout(3000)
    //Deleting a Campaign
    await page.getByRole('button', { name: 'Actions ' }).click();
    await page.getByText('Delete').click();
    await page.getByRole('textbox').fill('DELETE');
    await page.getByRole('button', { name: 'Confirm' }).click();
    await page.waitForTimeout(3000)
  });