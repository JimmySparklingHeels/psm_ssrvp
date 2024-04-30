import { useSelector, useDispatch } from 'react-redux'
import { decrement, increment } from './counterSlice'
import '../stuff.css'

export default function Counter() {
	const count = useSelector((state) => state.counter.value)
	const dispatch = useDispatch()

	return (
		<div className='countbox'>
			<div>
				<span className="counttext">{count}</span>
			</div>
		<div>
			<button
			aria-label="+1"
			className="countbutton"
			onClick={() => dispatch(increment())}
			>
				+1
			</button>
			<button
			aria-label="-1"
			className="countbutton"
			onClick={() => dispatch(decrement())}
			>
				-1
			</button>
		</div>
    </div>
  )
}