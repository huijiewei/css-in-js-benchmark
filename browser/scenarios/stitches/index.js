import {styled} from './stitches.config';
import {benchmarkTheme} from "../../utils";

const Div = styled('div', {
    width: '200px',
    height: '200px',
    borderWidth: '3px',
    borderColor: 'white',
    ':hover': {
        backgroundColor: '$dark',
    },
    sm: {
        backgroundColor: '$main',
        borderStyle: 'dashed'
    }
});

const theme = benchmarkTheme;

export default function Stitches() {
    return (
        <>
            {new Array(1000).fill().map(() => (
                <Div theme={theme}>test case</Div>
            ))}
        </>
    );
}
