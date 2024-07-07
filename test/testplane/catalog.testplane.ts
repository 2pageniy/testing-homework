import {browserUrl} from "./utils/url";

describe("Catalog", () => {
    it("Проверка отображения каталога", async ({browser}) => {
        await browser.url(browserUrl('/catalog'));

        await expect(browser.$("h1")).toHaveText("Catalog");
    });

    it("Проверка отображения товаров", async ({browser}) => {
        await browser.url(browserUrl('/catalog'));
        const productItems = await browser.$$('.ProductItem');

        expect(productItems).toHaveLength(27);

        const productName = await productItems[0].$('.ProductItem-Name');
        const productPrice = await productItems[0].$('.ProductItem-Price');
        const productLink = await productItems[0].$('.ProductItem-DetailsLink');
        const productImage = await productItems[0].$('.card-img-top');

        expect(await productName.getText()).not.toHaveLength(0);
        expect(await productPrice.getText()).not.toHaveLength(0);
        expect(await productLink.getText()).not.toHaveLength(0);
        expect(await productImage.getAttribute('src')).not.toHaveLength(0);

    });

    it("Проверка перехода на страницу товара", async ({browser}) => {
        await browser.url(browserUrl('/catalog'));
        const productItem = await browser.$('.ProductItem');
        const textProduct = await productItem.$('.ProductItem-Name').getText();
        const itemLink = await productItem.$('.ProductItem-DetailsLink');

        await itemLink.click({ button: 'left' });
        const nameDetailsProduct = await browser.$('ProductDetails-Name');

        expect(nameDetailsProduct).toHaveText(textProduct);
    });

    it("Проверка верстки продукта", async ({browser}) => {
        await browser.url(browserUrl('/catalog/1'));
        const product = await browser.$('.Product');

        await product.assertView('product-details-view', {
            ignoreElements: ['.ProductDetails-Name', '.ProductDetails-Description', '.ProductDetails-Color', '.ProductDetails-Material', '.ProductDetails-Price']
        });
    });
});
