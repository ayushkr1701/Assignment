import React from 'react';
import styled from 'styled-components';


export const Heading = styled.h3`
    padding-top: 20px;
    text-align: center;
    font-weight: 600;
    font-size: 32px;
    letter-spacing: 0.15rem;
    color: #fff;
`;

export const Text = styled.p`
	color: darkgray;
  padding: 10px;
  text-align: center;
  font-weight: 400;
  font-size: 18px;
  letter-spacing: 0.15rem;
`;

export const Thumbnail = styled.span`
	font-size: 50px;
`;
export const Content = styled.div`
  margin: auto;
  margin-top: 20px;
  width: 50%;
  height: 400px;
  overflow-y: scroll;
  background-color: #fff;
  padding: 10px;
  border-radius: 8px;

`;
 export const Ayush =styled.div`
  margin: auto;
  margin-top: 20px;
  width: 50%;
  height: auto;
  background-color: #fff;
  padding: 10px;
  border-radius: 8px;
 `;
export const ResultBox = styled.div`
  text-align: center;
  font-weight: 600;
  font-size: 4em;
  letter-spacing: 0.15rem;
  padding: 20px 0 0;

`;

//Layout atoms
export const Flex = styled.div`
	display: flex;
`;

export const Center = styled(Flex)`
	min-height: 100vh;
	justify-content: center;
	align-items: center;
`;

  type Props = {
    type: string,
    theme: string,
    size: string,
    onClick: Function,
    children: React.Node,
    className: string,
    disabled: Function,
  }
  const Button = (props: Props): React.Element<React> => {
    const { type, onClick, children,  className, disabled } = props
  
    return (
      <button type={type} onClick={onClick} disabled={disabled} className={className}>
        {children}
      </button>
    )
  }
  export default Button
  