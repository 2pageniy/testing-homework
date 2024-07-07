import React, {ReactNode} from "react";
import {MemoryRouter} from "react-router-dom";
import {Provider} from "react-redux";
import {render} from "@testing-library/react";
import {CartApi, ExampleApi} from "../../../src/client/api";
import {initStore} from "../../../src/client/store";

const basename = '/hw/store';

const api = new ExampleApi(basename);
const cart = new CartApi();
const store = initStore(api, cart);

export const ComponentRender = (component: ReactNode) => {

    return render(
        <MemoryRouter>
            <Provider store={store}>
                {component}
            </Provider>
        </MemoryRouter>
    );
}