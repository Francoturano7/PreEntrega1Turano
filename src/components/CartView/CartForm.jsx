import {useState} from "react";
import MyButton from "../MyButton";


export default function CartForm(props){
    const [data,setData]=useState({
        name:"",
        email:"",
        phone:"",
    } );
    
    function onInputChange(evt){
        let nameInput= evt.target.name;
        let value= evt.target.value;
        
        let newData={...data};
        newData[nameInput]= value;
        setData(newData);
    }
    
    function onSubmit(evt){
        if(data.name.length === 0) return;
        evt.preventDefault();
        props.onSubmit(evt,data);
    }
    
    return(
        <form className="total2" onSubmit={onSubmit}>
        <div >
            <label htmlFor="name" style={{width:"100px", marginRight:4}}>
                Nombre
            </label>
            <input 
            required
            value={data.name}
            name="name"
            type="text"
            onChange={onInputChange}
            />
         </div>

         <div >
            <label htmlFor="email" style={{width:"100px", marginRight:4}}>
                Email
            </label>
            <input 
            required
            value={data.email}
            name="email"
            type="email"
            onChange={onInputChange}
            />
         </div>

         <div >
            <label htmlFor="phone" style={{width:"100px", marginRight:4}}>
                Telefono
            </label>
            <input 
            required
            value={data.phone}
            name="phone"
            type="phone"
            onChange={onInputChange}
            />
         </div>
         <MyButton
          disabled={data.name === ""|| data.phone === "" || data.email === ""}
         type="submit"  text="Finalizar Compra" color="darkgreen" colorLetra="white"></MyButton>
         

    </form>
);
}
