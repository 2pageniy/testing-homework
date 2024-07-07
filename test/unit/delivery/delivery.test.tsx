import React from 'react';

import {ComponentRender} from "../utils/ComponentRender";
import {Delivery} from "../../../src/client/pages/Delivery";

describe('Проверка компонента страницы Delivery', () => {
    it('Проверка отображения компонента', async () => {
        const app = <Delivery />;
        const {getByText} = ComponentRender(app);

        const header = getByText('Delivery');
        expect(header).toBeInTheDocument();
    });

    it('Проверка количества параграфов', () => {
        const app = <Delivery />;
        const {container} = ComponentRender(app);

        const paragraphs = container.querySelectorAll('p');

        expect(paragraphs).toHaveLength(3);
    });
});
