
import { WebDriver, Builder, Capabilities, until, By } from "selenium-webdriver";
const chromedriver = require("chromedriver");

const driver: WebDriver = new Builder()
  .withCapabilities(Capabilities.chrome())
  .build();

  import { specPage } from "./SpecPage";

const page = new specPage(driver);

test("it works", async () => {
  await page.navigate();
  await page.doSearch("purple");
  expect(await page.getResults()).toContain("purple");
});

afterAll(async () => {

  await driver.quit();
});