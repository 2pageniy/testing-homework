import {browserUrl} from "./utils/url";

describe("Cart", () => {
    it("Проверка отображения корзины", async ({browser}) => {
        await browser.url(browserUrl('/cart'));

        await expect(browser.$("h1")).toHaveText("Shopping cart");
    });

    it("Проверка перехода в каталог", async ({browser}) => {
        await browser.url(browserUrl('/cart'));

        await browser.$('.Cart a').click({ button: 'left' });
        await expect(browser.$(".Catalog h1")).toHaveText("Catalog");
    });
    describe('Заказ продукта' , () => {
        it("Проверка добавления продукта", async ({browser}) => {
            await browser.url(browserUrl('/cart'));

            await browser.$('.Cart a').click({ button: 'left' });
            await browser.$('.ProductItem-DetailsLink.card-link').click({ button: 'left' });
            const textProduct = await browser.$('.ProductDetails-Name').getText();
            await browser.$('.ProductDetails-AddToCart').click({ button: 'left' });

            const navLinkCart = await browser.$$('.navbar-nav .nav-link')[3];

            expect(navLinkCart).toHaveText('Cart (1)');

            await navLinkCart.click({ button: 'left' });

            const cartName = await browser.$('.Cart-Name');
            expect(cartName).toHaveText(textProduct);
        });
        it("Проверка оформления продукта с пустыми полями", async ({browser}) => {
            await browser.url(browserUrl('/cart'));

            const btnSubmit = await browser.$('.Form-Submit');
            await btnSubmit.scrollIntoView();
            await browser.pause(500);
            await btnSubmit.click({button: 'left'});
            const invalidFields = await browser.$$('.is-invalid');

            expect(invalidFields).toHaveLength(3);
        });
        it("Проверка оформления продукта с заполненными полями", async ({browser}) => {
            const btnSubmit = await browser.$('.Form-Submit');
            const nameField = await browser.$('.Form-Field_type_name');
            const phoneField = await browser.$('.Form-Field_type_phone');
            const addressField = await browser.$('.Form-Field_type_address');

            await nameField.addValue('Name');
            await phoneField.addValue('1111111111');
            await addressField.addValue('Address');

            await btnSubmit.click({button: 'left'});
            const invalidFields = await browser.$$('.is-invalid');

            expect(invalidFields).toHaveLength(0);
        });
        it("Проверка сообщения об успешном оформлении", async ({browser}) => {
            const cartSuccessMessage = await browser.$('.Cart-SuccessMessage');
            const successMessage = await browser.$('.Cart-SuccessMessage p').getText();
            expect(successMessage).toBe('Order #1 has been successfully completed.');
            await cartSuccessMessage.assertView('cart-success-message-view');
        });
    });
});
