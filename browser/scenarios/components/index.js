import {forwardRef} from "react";

const Div = forwardRef(function Div(props, ref) {
    return <div ref={ref} {...props} />;
});

export default function Components() {
    return (
        <>
            {new Array(1000).fill().map(() => (
                <Div>test case</Div>
            ))}
        </>
    );
}
