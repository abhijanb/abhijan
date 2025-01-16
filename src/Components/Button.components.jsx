export const Button = ({handler,label}) => {
    return(
        <>
        {/* {console.log(props)} */}
        <button onClick={handler}>{label}</button>
        </>
    )
}
