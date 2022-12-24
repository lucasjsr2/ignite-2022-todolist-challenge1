import { Header } from "../../Components/Header";
import { SearchForm } from "./SearchForm";
import { CardTask, ListTasks, TasksContainer } from "./styles";
import emptyListImg from "../../assets/clipboard.png";
import * as Checkbox from "@radix-ui/react-checkbox";
import { Check, Trash } from "phosphor-react";
import { useTheme } from "styled-components";
import { useTasks } from "../../contexts/TasksContext";

export const Tasks = () => {
    const theme = useTheme();

    const {
        createdTaskQuantity,
        deleteTask,
        finishedTasks,
        toggleTask,
        tasks,
    } = useTasks();

    return (
        <>
            <Header />

            <TasksContainer>
                <SearchForm />

                <ListTasks>
                    <header>
                        <div>
                            <strong>Tarefas criadas</strong>
                            <span className="counter">
                                {createdTaskQuantity}
                            </span>
                        </div>

                        <div>
                            <strong>Concluídas</strong>
                            <span className="counter">
                                {finishedTasks} de {createdTaskQuantity}
                            </span>
                        </div>
                    </header>

                    <main>
                        {tasks && !tasks.length ? (
                            <div className="empty-list">
                                <div>
                                    <img src={emptyListImg} alt="" />

                                    <p>
                                        <strong>
                                            Você ainda não tem tarefas
                                            cadastradas
                                            {"\n"}
                                        </strong>
                                        Crie tarefas e organize seus itens a
                                        fazer
                                    </p>
                                </div>
                            </div>
                        ) : (
                            tasks &&
                            tasks.map((task) => (
                                <CardTask key={task.id} status={task.status}>
                                    <div>
                                        <Checkbox.Root
                                            className="CheckboxRoot"
                                            onClick={() => toggleTask(task.id)}
                                            id={task.id}
                                        >
                                            <Checkbox.Indicator className="CheckboxIndicator">
                                                <Check size={22} />
                                            </Checkbox.Indicator>
                                        </Checkbox.Root>

                                        <label
                                            className="Label"
                                            htmlFor={task.id}
                                        >
                                            {task.description}
                                        </label>
                                    </div>

                                    <button
                                        className="delete-task"
                                        type="button"
                                        onClick={() => deleteTask(task.id)}
                                    >
                                        <Trash
                                            size={22}
                                            color={theme["gray-300"]}
                                        />
                                    </button>
                                </CardTask>
                            ))
                        )}
                    </main>
                </ListTasks>
            </TasksContainer>
        </>
    );
};
