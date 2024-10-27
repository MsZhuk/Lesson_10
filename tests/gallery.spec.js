import { test, expect } from '@playwright/test';
import * as allure from "allure-js-commons";
import { MainPage } from '../src/pages/pagesForGallery/main.page';
import { ResultPage  } from '../src/pages/pagesForGallery/result.page';



const url = 'https://www.tretyakovgallery.ru';

test.describe('Проверка поиска', () => {
  test('Первый поиск', async ({ page }) => {
    await allure.tags ('Search');

    const mainPage = new MainPage(page);
    const resultPage = new ResultPage(page);

    await allure.step('Перейти на сайт', async () => {
      await mainPage.open(url);
    });

    await allure.step('Клик по иконке поиска и ввод поиска', async () => {
      await mainPage.clickSearchIcon();
      await mainPage.enterFirstSearch('Пушкин');
    });
   
    await allure.step('Пушкин включен в заголовок статьи', async () => {
      await expect (resultPage.articleResult.nth(0)).toHaveText(/.*?Пушкин.*/);
    });
     
    await allure.step('Пушкин влючен в url', async () => {
      await expect (resultPage.getCurUrl()).toContain('https://www.tretyakovgallery.ru/search/?query=%D0%9F%D1%83%D1%88%D0%BA%D0%B8%D0%BD');
    });
});

 test('Второй поиск', async ({ page }) => {

    const mainPage = new MainPage(page);
    const resultPage = new ResultPage(page);

    await allure.step('Перейти на сайт', async () => {
      await mainPage.open(url);
    });

    await allure.step('Клик по иконке поиска и ввод поиска', async () => {
      await mainPage.clickSearchIcon();
      await mainPage.enterFirstSearch('Италия');
    });

    await allure.step('Италия включена в заголовок статьи', async () => {
       await expect (resultPage.articleResult.nth(0)).toHaveText(/.*?Италия.*/);
    });

    await allure.step('Италия влючена в url', async () => {
       await expect (resultPage.getCurUrl()).toContain('https://www.tretyakovgallery.ru/search/?query=%D0%98%D1%82%D0%B0%D0%BB%D0%B8%D1%8F');
    });
  });
});