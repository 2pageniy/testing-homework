import {browserUrl} from "./utils/url";

describe("Navbar", () => {
    it("Проверка отображения navbar", async ({browser}) => {
        await browser.url(browserUrl('/'));

        const navbar = await browser.$('.navbar');
        expect(navbar).toBeDisplayedInViewport();
    });

    it("Проверка отображения navbar, при маленьком окне", async ({browser}) => {
        await browser.url(browserUrl('/'));
        await browser.setWindowSize(500, 800)
        const navbar = await browser.$('.navbar');
        expect(navbar).toBeDisplayedInViewport();
    });

    it("Проверка разворачивания navbar, при маленьком окне", async ({browser}) => {
        await browser.setWindowSize(500, 800)
        const navbarCollapse = await browser.$('.navbar-collapse.collapse');
        expect(navbarCollapse).toBeDisplayedInViewport();

        const btnToggle = await browser.$('.navbar-toggler');

        await btnToggle.click({button: 'left'});

        const navbarNotCollapsed = await browser.$('.navbar-collapse');
        expect(navbarNotCollapsed).toBeDisplayedInViewport();
    });

    it("Проверка клика на ссылку navbar, при маленьком окне", async ({browser}) => {
        await browser.setWindowSize(500, 800)
        const navLink = await browser.$('.nav-link');
        await navLink.click({button: 'left'});

        expect(navLink).toHaveHref('/hw/store/catalog')
        await browser.pause(300);

        const navbarCollapsed = await browser.$('.navbar-collapse.collapse');
        expect(navbarCollapsed).toBeDisplayedInViewport();
    });
});