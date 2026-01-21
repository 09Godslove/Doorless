import styled from 'styled-components';

export const Container = styled.div`
    width: 100vw;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100vh;
    background-color: #ebd9d9;
`;
export const SubContainer = styled.div`
    width: 50%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 50%;
    border: 1px solid #ccc;
    background-color: #5a4e4e;
`;

export const Form = styled.form`
    display: flex;
    flex-direction: column;
    gap: 1rem;
    padding: 2rem;
    border-radius: 8px;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
`;

export const Button = styled.button`
    padding: 0.75rem;
    background-color: #007bff;
    color: white;
    border: none;
    border-radius: 4px;
    font-size: 1rem;
    cursor: pointer;

    &:hover {
        background-color: #0056b3;
    }
`; 
export const Title = styled.h2`
    margin-bottom: 1rem;
    text-align: center;
`; 