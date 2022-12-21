import styled from "styled-components";

export const SearchFormContainer = styled.form`
    display: flex;
    gap: 0.5rem;
    margin-top: -5.75rem;

    input {
        flex: 1;
        border-radius: 8px;
        border: 0;
        background: ${({ theme }) => theme["gray-500"]};
        padding: 1rem;
        border: 1px solid ${({ theme }) => theme["gray-700"]};
        color: ${({ theme }) => theme["gray-100"]};

        &::placeholder {
            color: ${({ theme }) => theme["gray-300"]};
        }
    }

    button {
        display: flex;
        align-items: center;
        gap: 0.75rem;

        padding: 1rem;
        background: ${({ theme }) => theme["blue-dark"]};
        border-radius: 8px;
        font-weight: bold;
        color: #fff;

        &:disabled {
            opacity: 0.6;
            cursor: not-allowed;
        }

        &:not(:disabled):hover {
            transition: all 0.2s ease-in-out;
            background: ${({ theme }) => theme.blue};
            border-color: ${({ theme }) => theme.blue};
        }
    }
`;
