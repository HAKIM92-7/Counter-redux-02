import './App.css';
import Counter from './components/Counter'
import {changeVisibility} from './redux/actions/actions'
import {useSelector , useDispatch, connect} from 'react-redux'


function App(props) {


// const display = useSelector (state => state.display)
// const dispatch = useDispatch()
  return (
    <div className="App">

<button  onClick={()=> props.changeVisibility()}>{props.display ? "Hide counter" : "Show counter" } </button>

{ props.display ? 
 <Counter/> : ""
}
    </div>
  );
}


const mapStateToProps = state => {

return {

  display: state.display
}

}

const mapStateToDispatch = dispatch => {

return {

changeVisibility : () => dispatch(changeVisibility())

}

} 


export default  connect(mapStateToProps,mapStateToDispatch)  (App);
