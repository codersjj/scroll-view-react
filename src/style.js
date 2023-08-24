import styled from "styled-components";

const mask = `
  &::before,
  &::after {
    content: '';
    position: absolute;
    z-index: 5;
    top: 0;
    bottom: 0;
    width: 50px;
  }

  &:has(.control.left)::before {
    left: 0;
    background-image: linear-gradient(90deg, #fff, transparent);
  }

  &:has(.control.right)::after {
    right: 0;
    background-image: linear-gradient(90deg, transparent, #fff);
  }
`

export const ViewWrapper = styled.div`
  position: relative;
  width: 100%;

  .control {
    position: absolute;
    top: 50%;
    z-index: 9;

    border-radius: 50%;
    padding: 8px;
    background: #fff;
    box-shadow: 0 1px 1px 1px rgba(0,0,0,.14);
    cursor: pointer;

    &.left {
      left: 0;
      transform: translate(-50%, -50%);
    }

    &.right {
      right: 0;
      transform: translate(50%, -50%);
    }
  }

  .content {
    overflow: hidden;

    .scroll-content {
      display: flex;
      transition: transform 250ms ease;
    }
  }

  ${props => props.showMask ? mask : ''}
`