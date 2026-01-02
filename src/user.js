import { div } from "../framework/element";
import { onClick } from "../framework/event";
import { createComponent } from "../framework";

const initialState = { firstName: "Elvis", lastName: "Madiba" };

const methods = {
  changeName: (state, firstName) => ({ ...state, firstName }),
};

const template = ({ firstName, lastName, methods }) =>
  div`${onClick(() =>
    methods.changeName("Orinah")
  )} Hello ${firstName} ${lastName}`;

export const User = createComponent({ template, methods, initialState });
