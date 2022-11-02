import "./MyButton.css";

function MyButton(props){
  const styleButton= {backgroundColor:props.color}
  return <button style={styleButton} className="btn btn1">{props.text}</button>
}
export default MyButton;