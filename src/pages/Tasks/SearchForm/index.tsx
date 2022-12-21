import { PlusCircle } from "phosphor-react";
import { SearchFormContainer } from "./styles";

export const SearchForm = () => {
    return (
        <SearchFormContainer>
            <input type="text" placeholder="Busque uma tarefa" />

            <button type="submit">
                Criar
                <PlusCircle size={24} />
            </button>
        </SearchFormContainer>
    );
};
