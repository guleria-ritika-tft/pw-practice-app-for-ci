import { test, expect } from "@playwright/test";
import { LoginPage } from "./pages/login-page";

test.describe("mock interview", () => {
  test("task1", async ({ page }) => {
    // await page.goto("https://the-internet.herokuapp.com/login");
    await page.goto(process.env.URL);

    await page.getByRole("textbox", { name: "username" }).fill("tomsmith");
    await page
      .getByRole("textbox", { name: "password" })
      .fill("SuperSecretPassword!");
    const loginBtn = await page.getByRole("button", { name: "Login" });
    // await page.waitForTimeout(5000);
    await expect(loginBtn).toBeEnabled();
    await loginBtn.click();

    const ans = await page.getByText("You logged into a secure area!");

    // assertion
    await expect(ans).toContainText("You logged into a secure area!");
    await expect(ans).toBeVisible();
  });

  test("task2", async ({ page }) => {
    // await page.goto("https://www.saucedemo.com/?utm_source=chatgpt.com");
    // await page.getByPlaceholder("Username").fill("standard_user");
    // await page.getByPlaceholder("Password").fill("secret_sauce");

    // await page.getByText("Login").click();
    // await page.getByRole("button", { name: "Add to cart" }).first().click();

    const loginPage = new LoginPage(page);
    await loginPage.goto();
    await loginPage.login("standard_user", "secret_sauce");
    const ans = await page.locator(".shopping_cart_badge");
    await expect(ans).toHaveCount(1);
  });
  test("download", async ({ page }) => {
    await page.goto("https://the-internet.herokuapp.com/download");
    const downloadPromise = await page.waitForEvent("download"); // start listening BEFORE click
    await page.getByText("some-file.txt").click(); // click file link
    const download = await downloadPromise;

    const filename = download.suggestedFilename();
    await download.saveAs(`Users/ritikaguleria/Downloads/${filename}`);
  });
});
