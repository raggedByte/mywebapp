import './MyElement.css'

const MyElement = (props) => {
    const {firstName, lastName} = props.value;

    return (
        <li>
            {
                firstName + " " + lastName
            }
        </li>
    );
}

export default MyElement;