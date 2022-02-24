import React, { useState } from 'react'

const useInput = (REGEXP) => {
	const [value, setValue] = useState('')
	const [inputTouched, setInputTouched] = useState(false)

	const valueIsValid = REGEXP.test(value.trim())
	const valueInputIsInvalid = !valueIsValid && inputTouched
     
	return {
		value,
		valueIsValid,
		valueInputIsInvalid,
		onChange: (e) => {
			setValue(e.target.value)
		},
		onBlur: (e) => {
			setInputTouched(true)
		},
		onClear: () => {
			setValue('')
		},
	}
}

export default useInput
