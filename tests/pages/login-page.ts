import { Page, Locator } from "@playwright/test";

export class LoginPage {
  readonly page: Page;

  //   locators
  readonly username: Locator;
  readonly password: Locator;
  readonly loginBtn: Locator;
  readonly addToCartBtn: Locator;

  constructor(page: Page) {
    this.page = page;
    this.username = page.getByPlaceholder("Username");
    this.password = page.getByPlaceholder("Password");
    this.loginBtn = page.getByText("Login");
    this.addToCartBtn = page.getByRole("button", { name: "Add to cart" });
  }

  async goto() {
    // await this.page.goto("https://www.saucedemo.com/?utm_source=chatgpt.com");
    await this.page.goto("/"); //from baseurl in playwright.config.ts file
  }

  async wait(seconds: number) {
    await this.page.waitForTimeout(seconds);
  }

  async login(username: string, password: string) {
    await this.username.fill(username);
    await this.password.fill(password);
    await this.loginBtn.click();
    await this.addToCartBtn.first().click();
  }
}
