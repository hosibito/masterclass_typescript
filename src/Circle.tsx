import styled from "styled-components";

interface CircleProps {
    bgColor: string;
}

// const Container = styled.div<ContainerProps>`
const Container = styled.div<CircleProps>`
    width: 200px;
    height: 200px;
    background-color: ${(props) => props.bgColor};
    border-radius: 100px;
`;

// interface CircleProps {
//     bgColor: string;
// }

function Circle({bgColor}:CircleProps) {
  return <Container bgColor={bgColor}/>;
}

export default Circle;

/**
 * 의식의 흐름
 * 1. Ciecle 를 만들고 받아올 props 를 정해준다 (bgColor)
 * 2. TS 는 타입을 정해줘야 함으로 inteface 를 만들어서 bgColor의 타입을 정해준다. 
 * 3. 받은 props 를 Container에 전달한다. (return)
 * 4. Conrainer에서 받아올 props를 정해준다. inteface ContainerProps (bgColor)
 * 5. Container에 ContainerProps 를 적용 받아올 Prop를 정해준다. 
 * 6. 내부에서 사용가능. ${(props) => props.bgColor}
 * 
 * ex : ContainerProps 과 CircleProps 은 같으므로 하나로 이용할수 잇다. 
 */