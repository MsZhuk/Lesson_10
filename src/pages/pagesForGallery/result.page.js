import { BasePage } from "./base.page";

export class ResultPage extends BasePage {

    constructor (page) {
        super(page);
        this.searchResult = this.page.getByPlaceholder('Что вы ищете?');
        this.articleResult = this.page.locator('.result-item')
        this.curUrl ='';
    }

    getCurUrl() {
        return this.page.url();
    }
}