import {Given, When, Then} from '@cucumber/cucumber';
import { ICustomWorld } from '../support/custom-world';
import { expect } from '@playwright/test';


Given('je suis sur la page de connexion {string}',  async function(this:ICustomWorld, s: string) {
    await this.page?.goto(s);

 
})

When('user saisit son identifiant {string}',async function(this:ICustomWorld , s: string)  {
    await this.page?.locator('#user-name').fill(s);
  
})

When('user saisit son mot de passe {string}', async function(this:ICustomWorld , s: string) {
    await this.page?.locator('#password').fill(s);
  
})


When('user clique sur le bouton de login', async function(this:ICustomWorld)  {
  await this.page?.locator('#login-button').click();
})


Then('user est redirige vers la page {string}', async function(this:ICustomWorld , s: string) {
    await expect(this.page!).toHaveURL(s);
  
})
