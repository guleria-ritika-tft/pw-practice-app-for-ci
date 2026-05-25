import { test, expect } from "@playwright/test";

test.beforeEach(async ({ page }) => {
  page.goto("http://localhost:4200/");
});

test.describe("Form layout", () => {
  test.beforeEach("form page", async ({ page }) => {
    await page.getByTitle("Forms").click();
    await page.getByTitle("Form Layouts").click();
  });

  test("fill the using the grid", async ({ page }) => {
    // --------------Email--------------
    const val = await page
      .locator("nb-card", { hasText: "Using the Grid" })
      .getByRole("textbox", { name: "Email" });

    await val.fill("xyz@gmail.com");

    // generic assertion
    const getVal = await val.inputValue();
    await expect(getVal).toEqual("xyz@gmail.com");

    // locator assertion
    await expect(val).toHaveValue("xyz@gmail.com");

    // --------------Password-----------------
    const pas = await page
      .locator("nb-card", { has: await page.getByText("Using the Grid") })
      .getByRole("textbox", { name: "Password" });

    await pas.fill("qwert");

    await expect(pas).toHaveValue("qwert");
  });

  test("Radio buttons", async ({ page }) => {
    const a = await page.locator("nb-card", { hasText: "Using the Grid" });
    await a.getByRole("radio", { name: "Option 1" }).check({ force: true });

    // general assertion
    const radioStatus = await a
      .getByRole("radio", { name: "Option 1" })
      .isChecked();
    await expect(radioStatus).toBeTruthy();

    // locator assertion
    await expect(a.getByRole("radio", { name: "Option 1" })).toBeChecked();

    // second radio button
    await a.getByRole("radio", { name: "Option 2" }).check({ force: true });

    //general assertion
    const radioStatus2 = await a
      .getByRole("radio", { name: "Option 2" })
      .isChecked();

    await expect(radioStatus2).toBeTruthy();
  });
});

test("checkboxes", async ({ page }) => {
  await page.getByText("Modal & Overlays").click();
  await page.getByText("Toastr").click();

  await page
    .getByRole("checkbox", { name: "Hide on click" })
    .check({ force: true });
  await page
    .getByRole("checkbox", { name: "Prevent arising of duplicate toast" })
    .check({ force: true });
  await page
    .getByRole("checkbox", { name: "Show toast with icon" })
    .check({ force: true });

  const allCheckboxes = await page.getByRole("checkbox");
  for (const i of await allCheckboxes.all()) {
    await i.uncheck({ force: true });
    // await expect(i.isChecked()).toBeTruthy();
  }
});

test.only("dialog", async ({ page }) => {
  await page.getByText("Tables & Data").click();
  await page.getByText("Smart Table").click();

  page.on("dialog", (dialog) => {
    expect(dialog.message()).toEqual("Are you sure you want to delete?");
    dialog.accept();
  });

  await page
    .getByRole("table")
    .locator("tr", { hasText: "mdo@gmail.com" })
    .locator(".nb-trash")
    .click();
});
