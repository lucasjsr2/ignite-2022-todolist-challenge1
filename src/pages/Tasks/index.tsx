import { Header } from "../../Components/Header";
import { SearchForm } from "./SearchForm";
import { CardTask, ListTasks, TasksContainer } from "./styles";
import emptyListImg from "../../assets/clipboard.png";
import { useState } from "react";
import * as Checkbox from "@radix-ui/react-checkbox";
import { Check } from "phosphor-react";

type TasksProps = {
    id: string;
    description: string;
    status: "checked" | "unchecked";
};

export const Tasks = () => {
    const [tasks, setTasks] = useState<TasksProps[]>([
        {
            id: crypto.randomUUID(),
            description:
                "Integer urna interdum massa libero auctor neque turpis turpis semper. Duis vel sed fames integer.",
            status: "unchecked",
        },
        {
            id: crypto.randomUUID(),
            description:
                "Integer urna interdum massa libero auctor neque turpis turpis semper. Duis vel sed fames integer.",
            status: "checked",
        },
    ]);

    return (
        <>
            <Header />

            <TasksContainer>
                <SearchForm />

                <ListTasks>
                    <header>
                        <div>
                            <strong>Tarefas criadas</strong>
                            <span className="counter">{0}</span>
                        </div>

                        <div>
                            <strong>Concluídas</strong>
                            <span className="counter">{0}</span>
                        </div>
                    </header>

                    <main>
                        {!tasks.length ? (
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
                            tasks.map((task) => (
                                <CardTask key={task.id}>
                                    <div
                                        style={{
                                            display: "flex",
                                            alignItems: "center",
                                        }}
                                    >
                                        <Checkbox.Root
                                            className="CheckboxRoot"
                                            defaultChecked
                                            id="c1"
                                        >
                                            <Checkbox.Indicator className="CheckboxIndicator">
                                                <Check size={22} />
                                            </Checkbox.Indicator>
                                        </Checkbox.Root>

                                        <label className="Label" htmlFor="c1">
                                            Accept terms and conditions.
                                        </label>
                                    </div>
                                </CardTask>
                            ))
                        )}
                    </main>
                </ListTasks>
            </TasksContainer>
        </>
    );
};
