// @ts-check
export {};
import { test, expect, Page } from '@playwright/test';
import { HomePage } from '../pageobjects/home';
import { LoginPage } from '../pageobjects/login';

var username = "student";
var wrongUsername = "wrongStudent";
var password = "Password123";
var wrongPassword = "Password321";
var wrongUsernameText = "Incorrect username!";
var wrongPasswordText = "Incorrect password!";
var wrongUsernameAndPasswordText = "Incorrect username and password!";

var homePage : HomePage;
var loginPage : LoginPage;

test.beforeEach(async ({ page } : { page: Page }) => {
  homePage = new HomePage(page);
  loginPage = new LoginPage(page);
  await homePage.goto();
  await homePage.goToLoginPage();
});
test.describe('wrong login tests', () => {
  test('wrong username', async ({ page } : { page: Page }) => {
    await loginPage.fillLoginForm(wrongUsername, password);

    // Expect a title "to contain" a substring.
    await expect(loginPage.loginMessage).toHaveText(wrongUsernameText);
  });

  test('wrong password', async ({ page } : { page: Page }) => {
  await loginPage.fillLoginForm(username, wrongPassword);

    // Expect a title "to contain" a substring.
    await expect(loginPage.loginMessage).toHaveText(wrongPasswordText);
  });

  test('wrong username and password', async ({ page } : { page: Page }) => {
    await loginPage.fillLoginForm(wrongUsername, wrongPassword);

    // Expect a title "to contain" a substring.
    await expect(loginPage.loginMessage).toHaveText(wrongUsernameAndPasswordText);
  });
})