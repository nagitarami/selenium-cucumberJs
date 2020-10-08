const { Browser, By } = require("selenium-webdriver");

module.exports = function(){
  this.Given(/^Ingreso a la pagina de google$/, async function(){
      const googlePage = await helpers.loadPage("http://www.google.com");
  });

  this.Given(/^Realizar la busqueda de la pagina falabella.cl$/, async function(){
      const txtBuscar = await driver.findElement(By.xpath("//*[@id='tsf']/div[2]/div[1]/div[1]/div/div[2]/input")).sendKeys("falabella");
  });

  this.Given(/^Hacer click en boton Buscar con google y en falabella.cl$/, async function(){
    const btnBuscar = await driver.findElement(By.xpath("//*[@id='tsf']/div[2]/div[1]/div[2]/div[2]/div[2]/center/input[1]")).click();
    const linkFalabella = await driver.findElement(By.xpath("//span[contains(text(),'Lo encontr')]")).click();
  });

  this.When(/^Visualizar consola Nintendo Switch$/, async function(){
    const txtBuscarProducto = await driver.findElement(By.xpath("//body/div/nav/div[3]/div/div/div/div[1]/div/input")).sendKeys("Nintendo switch");
    await driver.sleep(2000);
    const source = await driver.getPageSource();
    const linkNintendo = await driver.findElement(By.xpath("/html/body/div[3]/div/div/div/div[2]/div/div[2]/a[1]")).click();
    await driver.sleep(2000);
    const linkProducto = await driver.findElement(By.xpath("//*[@id='testId-pod-image-8014962']")).click();
  });

  this.Then(/^Se agrega a la bolsa de compra$/, async function(){
    await driver.sleep(2000);
    const btnIrBolsaCompra = await driver.findElement(By.xpath("//*[@id='buttonForCustomers']/button")).click();
  });

  this.Then(/^Selecciona garantia extendida$/, async function(){
      const source = await driver.getPageSource();
      await driver.sleep(2000);
      const btnGarantiaExtendida = await driver.findElement(By.xpath("//*[@id='__next']/div/div/div/div/div/div/div[2]/div/div/div[2]/div/div/div[2]/div[1]")).click();
    });

  this.Then(/^Agregar 2 consolas$/, async function(){
    const btnMasProducto = await driver.findElement(By.xpath("//*[@id='__next']/div/div/div/div/div/div/div[2]/div/div/div[1]/div/div[3]/div/button[2]")).click();
  });

  this.Then(/^Ingresar Ir a comprar$/, async function(){
    const btnContinuar = await driver.findElement(By.xpath("//*[@id='linkButton']")).click();
    await driver.sleep(2000);
  });
};