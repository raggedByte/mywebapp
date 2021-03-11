import './MyList.css'
import MyElement from "./MyElement.js"

const MyList = (props) => {
    const array = props.array;

    return (
        <ol>
            {
                array.map(
                    item => <MyElement value={item} />
                )
            }
        </ol>
    );
}

export default MyList;