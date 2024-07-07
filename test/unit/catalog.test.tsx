import React from 'react';
import {act, screen} from '@testing-library/react';

import {Catalog} from "../../src/client/pages/Catalog";
import {ComponentRender} from "./utils/ComponentRender";

describe('Simple Test Case', () => {
    it('Should render', async () => {
        const app = <Catalog />;

        await act(async () => {
            ComponentRender(app);
        });

        // screen.debug()
    });
});
