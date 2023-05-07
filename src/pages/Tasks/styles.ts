import styled, { css } from "styled-components";

export const TasksContainer = styled.main`
    width: 100%;
    max-width: 1120px;
    margin: 4rem auto 0;
    padding: 0 1.5rem;
`;

export const ListTasks = styled.section`
    width: 100%;
    display: flex;
    flex-direction: column;
    margin-top: 4rem;
    margin-bottom: 2rem;
    display: inline-block;

    header {
        width: 100%;
        display: flex;
        justify-content: space-between;
        align-items: center;

        div {
            display: flex;
            align-items: center;
            gap: 0.5rem;

            strong {
                color: ${({ theme }) => theme.blue};
                font-weight: bold;
            }

            span {
                font-weight: bold;
            }

            span.counter {
                padding: 6px 12px;
                background: ${({ theme }) => theme["gray-400"]};
                border-radius: 99999px;
                color: ${({ theme }) => theme["gray-200"]};
                line-height: 1;
            }
        }

        div:nth-child(2) strong {
            color: ${({ theme }) => theme.purple};
        }
    }

    main {
        div.empty-list div {
            margin-top: 1.5rem;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            border-radius: 8px;
            border-top: 2px solid ${({ theme }) => theme["gray-400"]};
            padding: 4rem;
            gap: 1rem;

            img {
                display: block;
                max-width: 100%;
            }

            p {
                white-space: pre;
                color: ${({ theme }) => theme["gray-300"]};
                text-align: center;

                strong {
                    font-weight: bold;
                }
            }
        }
    }
`;

type CardTaskProps = {
    status: "checked" | "unchecked";
};

export const CardTask = styled.div<CardTaskProps>`
    display: flex;
    align-items: center;
    background: ${({ theme }) => theme["gray-500"]};
    gap: 48px;
    border-radius: 8px;
    margin-top: 1.5rem;
    padding: 1rem;
    border: 1px solid ${({ theme }) => theme["gray-400"]};

    div {
        display: flex;
        align-items: center;
        flex: 1;
    }

    .CheckboxRoot {
        background-color: transparent;
        width: 25px;
        min-width: 25px;
        height: 25px;
        min-height: 25px;
        border-radius: 50%;
        display: flex;
        align-items: center;
        justify-content: center;
        box-shadow: 0 0 0 2px ${({ theme }) => theme.blue};

        &[data-state="checked"] {
            background: ${({ theme }) => theme["purple-dark"]};
            box-shadow: 0 0 0 2px ${({ theme }) => theme["purple-dark"]};

            &:hover {
                transition: all 0.2s ease-in-out;
                background: ${({ theme }) => theme.purple};
                box-shadow: 0 0 0 2px ${({ theme }) => theme.purple};
            }
        }

        &[data-state="unchecked"]:hover {
            transition: all 0.2s ease-in-out;
            background: rgba(30, 111, 159, 0.2);
        }

        .CheckboxIndicator {
            color: ${({ theme }) => theme["gray-100"]};
            line-height: 0;
        }
    }

    .Label {
        font-size: 0.875rem;
        color: ${({ theme }) => theme["gray-100"]};
        margin-left: 12px;

        ${({ status }) =>
            status === "checked" &&
            css`
                text-decoration: line-through;
                color: ${({ theme }) => theme["gray-300"]};
            `}
    }

    button.delete-task {
        align-self: flex-start;
        display: flex;
        align-items: center;
        justify-content: center;
        padding: 6px;
        border-radius: 4px;

        &:hover {
            transition: background 0.2s ease-in-out;
            background: ${({ theme }) => theme["gray-700"]};
        }
    }
`;
