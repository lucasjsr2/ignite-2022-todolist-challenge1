import { ThemeProvider } from "styled-components";
import { TasksProvider } from "./contexts/TasksContext";
import { Tasks } from "./pages/Tasks";
import { GlobalStyle } from "./styles/global";
import { defaultTheme } from "./styles/themes/default";

export const App = () => {
    return (
        <ThemeProvider theme={defaultTheme}>
            <GlobalStyle />
            <TasksProvider>
                <Tasks />
            </TasksProvider>
        </ThemeProvider>
    );
};
