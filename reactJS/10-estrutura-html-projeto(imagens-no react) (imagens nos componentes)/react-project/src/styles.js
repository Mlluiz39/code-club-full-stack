import styled from 'styled-components'
import Background from '../src/assets/bg-image-1.svg'

export const Container = styled.main`
  background: url(${Background});
  background-size: cover;

  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 40px;

  height: 100vh;
`

export const Image = styled.img`
  margin-top: 30px;
`

export const ContainerItems = styled.div`
  display: flex;
  flex-direction: column;

  height: 100%;

  background: linear-gradient(
    157.44deg,
    rgba(255, 255, 255, 0.6) 0.84%,
    rgba(255, 255, 255, 0.6) 0.85%,
    rgba(255, 255, 255, 0.15) 100%
  );
  border-radius: 61px 61px 0px 0px;

  padding: 50px 36px;
`

export const H1 = styled.h1`
  margin-bottom: 30px;

  font-style: normal;
  font-weight: bold;
  font-size: 36px;
  line-height: 42px;
  text-align: center;

  color: #fff;
`

export const InputLabel = styled.p`
  font-style: normal;
  font-weight: bold;
  font-size: 18px;
  line-height: 22px;
  align-items: center;
  letter-spacing: -0.408px;

  margin-left: 25px;

  color: #eee;
`

export const Input = styled.input`
  background: rgba(255, 255, 255, 0.25);
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 14px;

  width: 342px;
  height: 58px;

  border: none;
  outline: none;

  padding-left: 25px;
  margin-bottom: 34px;

  font-style: normal;
  font-weight: normal;
  font-size: 20px;
  line-height: 28px;

  color: #fff;
`

export const Button = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 20px;

  width: 342px;
  height: 74px;

  background: rgba(0, 0, 0, 0.8);

  border-radius: 14px;
  border: none;
  outline: none;

  font-style: normal;
  font-weight: bold;
  font-size: 18px;
  line-height: 28px;

  color: #fff;

  cursor: pointer;

  &:hover {
    opacity: 0.8;
  }

  &:active {
    opacity: 0.5;
  }
`
