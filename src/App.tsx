import { ThemeProvider } from "styled-components";
import { Tasks } from "./pages/Tasks";
import { GlobalStyle } from "./styles/global";
import { defaultTheme } from "./styles/themes/default";

export const App = () => {
    return (
        <ThemeProvider theme={defaultTheme}>
            <GlobalStyle />
            <Tasks />
        </ThemeProvider>
    );
};
