import React from 'react';

import {ComponentRender} from "../utils/ComponentRender";
import {Delivery} from "../../../src/client/pages/Delivery";
import {Contacts} from "../../../src/client/pages/Contacts";

describe('Проверка компонента страницы Contacts', () => {
    it('Проверка отображения компонента', async () => {
        const app = <Contacts />;
        const {getByText} = ComponentRender(app);

        const header = getByText('Contacts');
        expect(header).toBeInTheDocument();
    });

    it('Проверка количества параграфов', () => {
        const app = <Contacts />;
        const {container} = ComponentRender(app);

        const paragraphs = container.querySelectorAll('p');

        expect(paragraphs).toHaveLength(3);
    });
});
