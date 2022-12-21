import { HeaderContainer, HeaderContent } from "./styles";
import logoTodoList from "../../assets/logo-todolist.svg";

export const Header = () => {
    return (
        <HeaderContainer>
            <HeaderContent>
                <img src={logoTodoList} alt="" />
            </HeaderContent>
        </HeaderContainer>
    );
};
