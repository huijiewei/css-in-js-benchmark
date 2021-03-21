import {styled} from '@compiled/react';
import {benchmarkTheme} from "../../utils";

const Div = styled.div`
  width: 200px;
  height: 200px;
  border-width: 3px;
  border-color: white;

  :hover {
    background-color: ${(props) => props.$dark};
  }

  @media (min-width: ${props => props.$sm}) {
    background-color: ${(props) => props.$main};
    border-style: dashed;
  }
`

const theme = benchmarkTheme;

export default function Compiled() {
    return (
        <>
            {new Array(1000).fill().map(() => (
                <Div $color={'#000'} $main={'#FFF'} $sm={'640px'}>test case</Div>
            ))}
        </>
    );
}
