const Container = (props) => {
    return <div className="containering header-toggle" style={{display: "flex", border: "5px solid green", height: "100vh"}} >{props.children}</div>
}

export default Container;
