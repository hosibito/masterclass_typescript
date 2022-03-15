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
    text?: string;
  }

function Circle({ bgColor, borderColor, text = "default text" }: CircleProps) {
  return (
    <Container bgColor={bgColor} borderColor={borderColor ?? bgColor}>
      {text}
    </Container>
  );
}

export default Circle;

/*
* 의식의 흐름
1. Circle 를 만들어주고 Props를 정해준다.. 여기서 값이 있어도 되는것 없어도 되는것을 정해준다. 
2. Circle 는 bgColor, borderColor, text 를 받아오는데 그중 두가지는 require값이 아니다. 
3. borderColor, text 값이 안들어왔을때의 처리를 해준다. 
    - text = "default text" 디폴트값을 준다.
    - borderColor={borderColor ?? bgColor} borderColor값이 없을때 bgColor를 준다.

4. Container에서 style 값을 적용하는데. style는 값이 없을수 없다. 
5. 따라서 ContainerProps 은 전부 require값이다.
6. const Container = styled.div<ContainerProps>` 으로 받아와서
7. ${(props) => props.bgColor}, ${(props) => props.borderColor} 로 적용한다.
*/