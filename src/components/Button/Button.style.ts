import styled from "styled-components";

export const Container = styled.div`
  width: 12.5rem; /* 200px */
  height: 3.125rem; /* 50px */
  display: flex;
  background-color: #1550ff;
  border-radius: 0.625rem; /* 10px */
  opacity: 1;
  transition: all ease-in-out 0.3s;

  &:hover {
    cursor: pointer;
    opacity: 0.8;
  }
`;

export const IconArea = styled.div`
  height: inherit;
  display: flex;
  justify-content: center;
  align-items: center;
  border-right: 1px solid rgba(255, 255, 255, 0.2);
  padding: 0 0.9375rem; /* 0 15px */
`;

export const Icon = styled.img`
  height: 1.25rem; /* 20px */
`;

export const Label = styled.div`
  height: inherit;
  color: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
  flex: 1;
  padding: 0 1.25rem; /* 0 20px */
`;
