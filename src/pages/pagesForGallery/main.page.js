import { th } from '@faker-js/faker';
import { BasePage } from '../base.page.js';

export class MainPage extends BasePage {
  constructor(page) {
    super(page);
    this.searchIcon = this.page.getByLabel('Поиск');
    this.searchFild = this.page.getByPlaceholder('Что вы ищете?');
    this.searchButton = this.page.locator('form').getByLabel('Поиск');
  };
 
  async clickSearchIcon () {
    await this.searchIcon.click()
  }

  async enterFirstSearch (data) {
    await this.searchFild.fill(data)
    await this.searchButton.click();
  }

};
