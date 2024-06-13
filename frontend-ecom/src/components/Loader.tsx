
export default function Loader() {
    const spinnerStyle = {
        width: '88px',
        height: '88px',
        borderRadius: '50%',
        border: '14.1px solid',
        borderColor: '#dbdcef',
        borderRightColor: '#474bff',
        animation: 'spinner-d3wgkg 1.2s infinite linear'
    };

    const keyframesStyle = `
        @keyframes spinner-d3wgkg {
            to {
                transform: rotate(1turn);
            }
        }
    `;

    return (
        <div style={{display: "flex", justifyContent: "center", alignItems: "center", height: "100vh"}}>
            <style>{keyframesStyle}</style>
            <div style={spinnerStyle}></div>
        </div>
    );
}
