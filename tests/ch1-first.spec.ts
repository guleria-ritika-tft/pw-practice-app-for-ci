import { test, expect } from "@playwright/test";

test.beforeEach(async ({ page }) => {
  await page.goto("http://localhost:4200/");
  await page.getByRole("link", { name: "IoT Dashboard" }).click();

  await page.getByTitle("Forms").click();
  //   await page.getByTitle("Form Layouts").click();
  await page.getByRole("link", { name: "Form Layouts" }).click();
});

// test.skip("Locator Syntax Rules", async ({ page }) => {
//   // by tag name
//   page.locator("input").first().click();

//   //   by id
//   page.locator("#inputEmail1");

//   //   by class value
//   page.locator(".shape-rectangle");

//   //   by attribute
//   page.locator('[placeholder="Email"]');

//   //   by full class value
//   page.locator(
//     '[class="input-full-width size-medium status-basic shape-rectangle nb-transition"]',
//   );

//   //   combine different selectors
//   page.locator('input[placeholder="Email"]');

//   //   by xpath
//   page.locator("//*[@id=inputEmail1]");

//   //   partial text
//   page.locator(':text("Using")');

//   // full text
//   page.locator('text-is("Using the Grid")');
// });

test("User facing locators", async ({ page }) => {
  await page.getByRole("textbox", { name: "Jane Doe" }).fill("Ritika");
  await page
    .getByRole("textbox", { name: "Email" })
    .first()
    .fill("gdhds@gmail.com");
  await page.getByRole("button", { name: "Submit" }).first().click();

  //   await page.getByPlaceholder("Jane Doe").fill("x@gmail.com");

  await page.getByText("Using the Grid").click();
  //   await page.getByTitle("IoT Dashboard").click();
  //   await page.getByRole("link", { name: "IoT Dashboard" }).click();
  //   await page.getByAltText("IoT Dashboard").click();
  //   await page.getByLabel("cdsh").click();

  //   practice
  //   await page
  //     .getByRole("listitem")
  //     .filter({ hasText: "Product 2" })
  //     .getByRole("button", { name: "Add to cart" })
  //     .click();

  //   matching two locators simulataneously
  //   page.getByRole("button").and(page.getByTitle("Subscribe"));

  //   await expect(page.getByRole("listitem")).toHaveCount(3);
  //   await expect(page.getByRole("listitem")).toHaveText(["apple", "bab", "mab"]);
  //   await page.getByText("orange").click();

  await page
    .locator("nb-card", { hasText: "Using the Grid" })
    .getByRole("textbox", { name: "Email" })
    .fill("rg@gmail.com"); //has: use another locator, both works same for filter
});
