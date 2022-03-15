import { useState } from "react";
import styled from "styled-components";

interface ContainerProps {
    bgColor: string;
    borderColor: string;
  }

const Container = styled.div<ContainerProps>`
    width: 200px;
    height: 200px;
    background-color: ${(props) => props.bgColor};
    border-radius: 100px;
    border: 1px solid ${(props) => props.borderColor};
`;

interface CircleProps {
    bgColor: string;
    borderColor?: string;    
  }

function Circle({ bgColor, borderColor }: CircleProps) {
    const [value, setValue] = useState<string>("");
    return <Container bgColor={bgColor} borderColor={borderColor ?? bgColor} />;
}

export default Circle;

/*
1. TS react 에서 useState 의 타입은 우선 기본값으로 자동 추측한다.
    const [value, setValue] = useState(0);  value값을 number로 추측
2. 기본값없이 지정해 줄수 있다. 
    const [value, setValue] = useState<string>();
2. 여러개 지정도 가능하나 쓸일이 거의 없다. 
    const [value, setValue] = useState<string|number>();
*/
