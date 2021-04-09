import React from 'react'
import {useSelector , useDispatch} from 'react-redux'
import {increment , decrement} from '../redux/actions/actions'



const Counter = () => {

var count = useSelector ((state) => state.count)

const dispatch =useDispatch()

    return (
        <div>
<button type="button" onClick={()=> dispatch(increment())}class="btn btn-success">+</button>
<span style={{margin:"0 30px"}}>{count}</span>
<button type="button" onClick={()=>count > 0 ? dispatch(decrement()) : alert('stop!!')}class="btn btn-danger">-</button>
        </div>
    )
}



export default Counter
