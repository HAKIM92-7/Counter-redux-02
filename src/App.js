import './App.css';
import Counter from './components/Counter'
import {changeVisibility} from './redux/actions/actions'
import {useSelector , useDispatch} from 'react-redux'
// import {connect} from 'react-redux'

function App() {


const display = useSelector (state => state.display)
const dispatch = useDispatch()
  return (
    <div className="App">

<button  onClick={()=> dispatch(changeVisibility())}>{display ? "Hide counter" : "Show counter" } </button>

{ display ? 
 <Counter/> : ""
}
    </div>
  );
}


// const mapStateToProps = state => {

// return {

//   display: state.display
// }

// }

// const mapStateToDispatch = dispatch => {

// return {

// changeVisibility : () => dispatch(changeVisibility())

// }

// } 


export default  App;
