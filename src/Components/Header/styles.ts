import styled from "styled-components";

export const HeaderContainer = styled.header`
    background: ${({ theme }) => theme["gray-700"]};
    padding: 4.75rem 0;
`;

export const HeaderContent = styled.div`
    width: 100%;
    max-width: 1120px;
    margin: 0 auto;
    padding: 0 1.5rem;

    display: flex;
    justify-content: center;
    align-items: center;

    img {
        max-width: 100%;
        display: block;
    }
`;
