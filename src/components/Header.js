import React ,{useState} from 'react';
import { useDispatch } from 'react-redux';
import { dataFrom } from '../redux/action/todoAction';

const Header = () => {
    const [inputText, setInputText] = useState('');
    const dispatch = useDispatch();
    const inputHandler = e => {
        setInputText(e.target.value)
      };
    const submitHandler = e => {
        e.preventDefault();
        console.log("input value=>",inputText)
        if (inputText !== "" && inputText.length >= 3) {
            setInputText('')   
            dispatch(dataFrom(inputText))
        }
      
        
        };

    return(
        <form>
            <div className="header">
            <input type='text' value={inputText} placeholder=" Add your new todo" onChange={inputHandler} className='todo_input' />
            <button onClick={submitHandler} className='todo_button' type="submit">
                +
            </button>
        </div>
        
        </form>

    );
}
export default Header;