
export function Row({ children }) {
    return (
        <div className="common-row">{children}</div>
    )
}

export function Col({ children }) {
    return (
        <div className="common-col">{children}</div>
    )
}

export default { Row, Col }