import React from 'react';

import {ComponentRender} from "../utils/ComponentRender";
import {Delivery} from "../../../src/client/pages/Delivery";
import {Cart} from "../../../src/client/pages/Cart";
import {act, fireEvent, screen} from "@testing-library/react";

describe('Проверка компонента страницы Cart', () => {
    it('Проверка отображения компонента', async () => {
        const app = <Cart />;
        const {getByText} = ComponentRender(app);

        const header = getByText('Shopping cart');
        expect(header).toBeInTheDocument();
    });

    // it('Проверка пустой корзины', () => {
    //     const app = <Cart />;
    //     const {getByText} = ComponentRender(app);

    //     const emptyText = getByText('Cart is empty.');
    //
    //     expect(emptyText).toBeInTheDocument();
    // });

    it('Переход по ссылке из пустой корзины делает переход в каталог', async () => {
        const app = <Cart />;
        const {container} = ComponentRender(app);

        const link = container.querySelector('a');
        expect(link).toBeInTheDocument();

        await act(async () => {
            fireEvent.click(link);
        });

        // screen.debug();
    });
});
