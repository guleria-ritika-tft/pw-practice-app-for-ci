import { test as base } from "@playwright/test";

export type TestOptions = {
  globalsQaURL: string;
  formLayoutPage: string;
};

export const test = base.extend<TestOptions>({
  globalsQaURL: ["", { option: true }],

  formLayoutPage: async ({ page }, use) => {
    // await page.goto("/");
    // await page.goto(process.env.URLOfWebApp);
    await page.goto("http://localhost:4200/");
    await page.getByText("Forms").click();
    await page.getByText("Form Layouts").click();
    await use("");
  },

  //   if we want that this will excute befroe hooks and we dont need to write it on my ch5_fixture test near page then use [] to pass 2nd arugument
  //   formLayoutPage1: [
  //     async ({ page }, use) => {
  //       // await page.goto("/");
  //       await page.goto(process.env.URLOfWebApp);
  //       await page.getByText("Forms").click();
  //       await page.getByText("Form Layouts").click();
  //       await use("");
  //     },
  //     { auto: true },
  //   ],
});
