
function LiTask(props) {
    const clickHand = () => {
        const {delCallback, id} = props;
        delCallback(id);
    }
    
    return( 
        <li>
            {props.text}
            <button onClick={() => clickHand()}>x</button>
        </li>
    )
}

export default LiTask