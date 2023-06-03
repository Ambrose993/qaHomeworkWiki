import {
    Builder,
    By,
    Capabilities,
    until,
    WebDriver
} from "selenium-webdriver";
const chromedriver = require('chromedriver');

const driver: WebDriver = new Builder()
.withCapabilities(Capabilities.chrome()).build();

import { empObject } from "./employeeManager";
const emPage = new empObject(driver);

describe("Employee manager test", () => {

test("adding employee", async () => {
    await emPage.navigate();
    await emPage.click(emPage.addEmployee);
    await emPage.click(emPage.newEmployee);
    await emPage.click(emPage.nameInput);
    await emPage.SendKeys(emPage.nameInput, "Tyson Spainhower");
    let emName = await emPage.getText(emPage.nameInput);
    await emPage.click(emPage.phoneInput);
    await emPage.SendKeys(emPage.phoneInput, "8013453214");
    let emPhone = await emPage.getText(emPage.nameInput);
    await emPage.click(emPage.titleInput);
    await emPage.SendKeys(emPage.titleInput, "CCAO");
    let emTitle = await emPage.getText(emPage.titleInput);
    await emPage.click(emPage.saveBtn);
    await emPage.driver.quit();
});

});