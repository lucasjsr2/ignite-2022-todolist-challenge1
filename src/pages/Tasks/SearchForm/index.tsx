import { PlusCircle } from "phosphor-react";
import { FormEvent, useState } from "react";
import { useTasks } from "../../../contexts/TasksContext";
import { SearchFormContainer } from "./styles";

export const SearchForm = () => {
    const { createTask } = useTasks();
    const [taskDescription, setTaskDescription] = useState("");

    const handleCreateTask = (e: FormEvent) => {
        e.preventDefault();

        createTask({
            id: crypto.randomUUID(),
            description: taskDescription,
            status: "unchecked",
        });

        setTaskDescription("");
    };

    return (
        <SearchFormContainer onSubmit={(e) => handleCreateTask(e)}>
            <input
                type="text"
                placeholder="Adicione uma tarefa"
                onChange={(e) => setTaskDescription(e.currentTarget.value)}
                value={taskDescription}
            />

            <button type="submit" disabled={!taskDescription}>
                Criar
                <PlusCircle size={24} />
            </button>
        </SearchFormContainer>
    );
};
