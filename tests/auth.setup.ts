import { test as setup } from "@playwright/test";

const authFile = ".auth/user.json";

setup("authentication", async ({ page }) => {
  await page.goto("https://www.saucedemo.com/?utm_source=chatgpt.com");
  await page.getByPlaceholder("Username").fill("standard_user");
  await page.getByPlaceholder("Password").fill("secret_sauce");
  await page.getByText("Login").click();

  //   await page.screenshot({ path: "screenshots/abc.png", fullPage: true });

  await page.context().storageState({ path: authFile });
});
