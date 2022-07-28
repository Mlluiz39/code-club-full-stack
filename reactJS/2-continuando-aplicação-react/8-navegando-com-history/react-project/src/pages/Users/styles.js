import styled from 'styled-components'

import Background from '@/assets/bg-image-2.svg'

export const Container = styled.main`
  background: url(${Background});
  background-size: cover;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  gap: 20px;

  height: 100vh;
`

export const H1 = styled.h1`
  font-size: 2.5rem;
  font-weight: bold;

  color: #fff;

  text-align: center;

  margin-bottom: 20px;

  @media (max-width: 768px) {
    font-size: 2.5rem;
  }

  @media (max-width: 414px) {
    font-size: 2rem;
  }
`

export const Table = styled.table`
  width: 950px;
  border-collapse: collapse;
  border-spacing: 0;
  border: 1px solid black;
  border-color: white;
  border-radius: 5px;

  background-color: white;

  padding: 10px;
  margin-top: 20px;

  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.5);

  @media (max-width: 768px) {
    max-width: 650px;
  }

  @media (max-width: 414px) {
    max-width: 350px;
  }
`

export const TableHeader = styled.thead`
  background-color: #f5f5f5;
  border-bottom: 1px solid black;
  border-color: white;
  border-radius: 5px;

  padding: 10px;
  margin-top: 20px;

  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.5);
`

export const TRHeader = styled.tr`
  text-align: center;
  padding: 10px;
  margin-top: 20px;
  border-bottom: 1px solid black;
`

export const THHeader = styled.th`
  font-weight: bold;
  font-size: 1rem;
  color: #1e3599;
  background-color: #e3e0db;
  border-bottom: 1px solid black;
  border-color: white;
  border-radius: 5px;
  padding: 10px;
  margin-top: 20px;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.5);
`

export const TableBody = styled.tbody`
  background-color: white;
  border-bottom: 1px solid black;
  border-color: white;
  border-radius: 5px;

  padding: 10px;
  margin-top: 20px;

  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.5);
`

export const TRow = styled.tr`
  background-color: white;
  border-bottom: 1px solid black;
  border-color: white;
  border-radius: 5px;

  padding: 10px;
  margin-top: 20px;
  margin-bottom: 20px;

  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.5);
`

export const TData = styled.td`
  background-color: white;

  border-bottom: 1px solid black;
  border-color: white;
  padding: 10px;
  margin-top: 20px;
  margin-bottom: 20px;

  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.5);
  text-align: center;
`

export const Image = styled.img`
  width: 20px;
  height: 20px;

  margin-left: 10px;
`

export const Button = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 14px;

  width: 342px;
  height: 74px;
  margin-top: 30px;

  background: transparent;
  border: 1px solid #fff;
  border-radius: 14px;

  font-style: normal;
  font-weight: 700;
  font-size: 17px;
  line-height: 28px;

  text-decoration: none;

  cursor: pointer;

  color: #ffffff;
  img {
    transform: scaleX(-1);
  }

  &:hover {
    opacity: 0.8;
  }

  &:active {
    opacity: 0.5;
  }
`
