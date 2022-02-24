// import { useRef, useState } from 'react'

// const SimpleInput = (props) => {
// 	const [value, setValue] = useState('')
// 	const [valueTuched, setValueTuched] = useState(false)

// 	const valueIsValid = value.trim() !== ''
// 	const valueInputIsInvalid = !valueIsValid && valueTuched

// 	const valueInputBlurHandler = (e) => {
// 		setValueTuched(true)
// 	}

// 	const onChangeHandler = (e) => {
// 		setValue(e.target.value)
// 	}

// 	const onSubmitHandler = (e) => {
// 		e.preventDefault()
// 		setValueTuched(true)
// 		if (valueIsValid) return

// 		setValue('')
//     setValueTuched(false)
// 	}

// 	const valueInputClasses = !valueInputIsInvalid
// 		? 'form-control'
// 		: 'form-control invalid'

// 	return (
// 		<form onSubmit={onSubmitHandler}>
// 			<div className={valueInputClasses}>
// 				<label htmlFor='name'>Your Name</label>
// 				<input
// 					ref={valueInputRef}
// 					onChange={onChangeHandler}
// 					value={value}
// 					type='text'
// 					id='name'
// 					onBlur={valueInputBlurHandler}
// 				/>
// 				{!valueIsValid && <p>Name must not be empty</p>}
// 			</div>
// 			<div className='form-actions'>
// 				<button type='submit'>Submit</button>
// 			</div>
// 		</form>
// 	)
// }

// export default SimpleInput
