import {
    createContext,
    ReactNode,
    useCallback,
    useContext,
    useMemo,
    useState,
} from "react";

type Task = {
    id: string;
    description: string;
    status: "checked" | "unchecked";
};

type TasksContextProps = {
    tasks: Task[];
    toggleTask: (id: string) => void;
    finishedTasks: number;
    createdTaskQuantity: number;
    createTask: (task: Task) => void;
    deleteTask: (id: string) => void;
};

export const TasksContext = createContext({} as TasksContextProps);

export const TasksProvider = ({ children }: { children: ReactNode }) => {
    const [tasks, setTasks] = useState<Task[]>([]);

    const toggleTask = useCallback((id: string) => {
        setTasks((tasks) => {
            return tasks.map((task) => {
                if (task.id === id) {
                    return {
                        ...task,
                        status:
                            task.status === "checked" ? "unchecked" : "checked",
                    };
                }

                return task;
            });
        });
    }, []);

    const createTask = useCallback((task: Task) => {
        setTasks((tasks) => [...tasks, task]);
    }, []);

    const deleteTask = useCallback((id: string) => {
        setTasks((tasks) => tasks.filter((task) => task.id !== id));
    }, []);

    const createdTaskQuantity = tasks?.length;

    const finishedTasks = useMemo(() => {
        return tasks?.filter((task) => task?.status === "checked").length;
    }, [tasks]);

    return (
        <TasksContext.Provider
            value={{
                tasks,
                toggleTask,
                finishedTasks,
                createdTaskQuantity,
                createTask,
                deleteTask,
            }}
        >
            {children}
        </TasksContext.Provider>
    );
};

export const useTasks = () => {
    const context = useContext(TasksContext);

    return context;
};
