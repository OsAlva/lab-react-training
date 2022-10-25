function BoxColor({r, g, b}) {
    return (
        <div className="box-color">
            <div style={{backgroundColor: `rgb(${r}, ${g}, ${b})`}}>
                <h1>RGB({r}, {g}, {b})</h1>
            </div>
            
        </div>
    )
}

export default BoxColor;