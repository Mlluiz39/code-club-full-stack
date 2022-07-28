import styled from 'styled-components'

import Background from '@/assets/bg-image-1.svg'

export const Container = styled.main`
  background: url(${Background});
  background-size: cover;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  gap: 40px;

  height: 100vh;
`

export const Image = styled.img`
  margin-top: 30px;
`

export const ContainerItems = styled.section`
  height: 100%;

  background: linear-gradient(
    157.44deg,
    rgba(255, 255, 255, 0.6) 0.84%,
    rgba(255, 255, 255, 0.6) 0.85%,
    rgba(255, 255, 255, 0.15) 100%
  );
  border-radius: 61px 61px 0px 0px;
  padding: 50px 36px;

  display: flex;
  flex-direction: column;
`

export const H1 = styled.h1`
  font-style: normal;
  font-weight: 700;
  font-size: 34px;
  line-height: 40px;

  text-align: center;

  color: #ffffff;

  margin-bottom: 50px;
`

export const InputLabel = styled.p`
  font-style: normal;
  font-weight: 700;
  font-size: 18px;
  line-height: 22px;
  letter-spacing: -0.408px;

  margin-left: 25px;
  margin-bottom: 3px;

  color: #fff;
`

export const Input = styled.input`
  background: rgba(255, 255, 255, 0.25);
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 14px;
  border: none;
  outline: none;

  width: 342px;
  height: 58px;

  padding-left: 25px;
  margin-bottom: 50px;

  font-style: normal;
  font-weight: 400;
  font-size: 20px;
  line-height: 28px;

  color: #fff;
`

export const Button = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 14px;

  width: 342px;
  height: 74px;

  background: rgba(0, 0, 0, 0.8);
  border: none;
  border-radius: 14px;

  font-style: normal;
  font-weight: 700;
  font-size: 17px;
  line-height: 28px;

  text-decoration: none;

  cursor: pointer;

  color: #ffffff;

  &:hover {
    opacity: 0.8;
  }

  &:active {
    opacity: 0.5;
  }
`

export const List = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 14px;

  width: 342px;
  height: 74px;
  margin-top: 50px;

  background: #36019a;
  border: none;
  border-radius: 14px;

  font-style: normal;
  font-weight: 700;
  font-size: 17px;
  line-height: 28px;

  text-decoration: none;

  cursor: pointer;

  color: #ffffff;

  &:hover {
    opacity: 0.8;
  }

  &:active {
    opacity: 0.5;
  }
`
