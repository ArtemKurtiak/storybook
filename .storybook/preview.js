import {withConsole} from '@storybook/addon-console'
import {addDecorator} from "@storybook/react";
import {CSSReset, ThemeProvider} from "@chakra-ui/core";


export const parameters = {
    actions: {argTypesRegex: "^on[A-Z].*"},
}

addDecorator((storyFn, context) => withConsole()(storyFn)(context));

