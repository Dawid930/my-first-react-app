/* const Beer = (props) => {
    const {title, sub, text} = props.info;
    return(
        <div className="beer">
            {title}
            {sub}
            {text}
        </div>
    )
}

export default Beer
 */

const Beer = ({info, randomNum}) => {
    const {title, sub, text} = info;
    return(
        <div className="beer">
            {title}
            {sub}
            {text}
            <button onClick={() => {console.log(`Clicked`)}}>Click me</button>
        </div>
    )
}

export default Beer