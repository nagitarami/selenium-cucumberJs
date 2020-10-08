const{Bulder,By,Key,util, Builder} = require("selenium-webdriver");
async function example(){
    let driver = await new Builder().forBrowser('chrome').build();
    await driver.get("http://google.com");
    await driver.findElement(By.name("q")).sendKeys("falabella",Key.RETURN);
}
example();