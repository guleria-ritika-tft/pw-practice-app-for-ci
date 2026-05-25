// import { test, expect } from "@playwright/test";
import { expect } from "@playwright/test";
import { test } from "../test-options";

test.beforeEach(async ({ page, globalsQaURL }) => {
  // await page.goto("http://uitestingplayground.com/ajax");
  await page.goto(globalsQaURL);
  await page.getByText("Button Triggering AJAX Request").click();
});

test("auto waiting", async ({ page }) => {
  //   await page.getByText("Data loaded with AJAX get request.").click();
  const successbtn = await page.locator(".bg-success");
  //   const content = await successbtn.textContent(); //this method autowaits for 30s for web element to be displayed on the web screen
  //   await expect(content).toEqual("Data loaded with AJAX get request.");

  //   await successbtn.waitFor({ state: "attached" });

  //   const content = await successbtn.allTextContents(); //it doesn't wait so we use explit wait
  //   await expect(content).toContain("Data loaded with AJAX get request.");

  //   locator assertion - 5sec but it takes 15 sec to load as mentioned in website, explit timeout
  await expect(successbtn).toHaveText("Data loaded with AJAX get request.", {
    timeout: 20000,
  });

  //   test.setTimeout(5000);
  //   test.slow();
  //   await page.waitForSelector(".bg-success"); //wait for element
  //   await page.waitForResponse("https"); //wait for particular response
  //   await page.waitForLoadState("networkidle"); //wait for nextwork calls to be completed
  //   await page.waitForTimeout(5000);
});
