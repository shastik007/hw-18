import useInput from '../hooks/useInput'
import { REGEXP_NAME } from '../helpers/constants'
import { REGEXP_EMAIL } from '../helpers/constants'
const BasicForm = (props) => {
	const input1 = useInput(REGEXP_NAME)
	const input2 = useInput(REGEXP_NAME)
	const input3 = useInput(REGEXP_EMAIL)
	let formIsValid = false
	if (input1.valueIsValid && input2.valueIsValid && input3.valueIsValid)formIsValid = true
	const onSubmitHandler = (e) => {
		e.preventDefault()
		input1.onClear()
		input1.onClear()
		input3.onClear()
	}
	const valueInput1Classes = !input1.valueInputIsInvalid ? 'form-control' : 'form-control invalid'
	const valueInput2Classes = !input2.valueInputIsInvalid ? 'form-control' : 'form-control invalid'
	const valueInput3Classes = !input3.valueInputIsInvalid ? 'form-control' : 'form-control invalid'
		
	return (
		<form onSubmit={onSubmitHandler}>
			<div className='control-group'>
				<div className={valueInput1Classes}>
					<label htmlFor='name'>First Name</label>
					<input value={input1.value} onChange={input1.onChange} onBlur={input1.onBlur}
			     		type='text'
						id='name'
					/>
					{input1.valueInputIsInvalid && (
						<p>the field must not be empty and must contain latin letters</p>
					)}
				</div>
				<div className={valueInput2Classes}>
					<label htmlFor='name'>Last Name</label>
					<input onChange={input2.onChange} value={input2.value} onBlur={input2.onBlur}
						type='text'
						id='name'
					/>
					{input2.valueInputIsInvalid && (
						<p>the field must not be empty and must contain latin letters</p>
					)}
				</div>
			</div>
			<div className={valueInput3Classes}>
				<label htmlFor='name'>E-Mail Address</label>
				<input onChange={input3.onChange} value={input3.value} onBlur={input3.onBlur}
					type='text'
					id='name'
				/>
				{input3.valueInputIsInvalid && <p>email entered incorrectly</p>}
			</div>
			<div className='form-actions'>
				<button disabled={!formIsValid}>Submit</button>
			</div>
		</form>
	)
}

export default BasicForm
