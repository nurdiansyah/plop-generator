import { useEffect, useState } from 'react'

export enum FormMode {
  OnChange = 'onChange',
  OnBlur = 'onBlur'
}

export type ErrorSchema<T> = {
  [k in keyof T]: ErrorSchema<object> | string
}

export type ValidationFunction<T> = (value: T) => Partial<ErrorSchema<T>>

export default <T>(defaultValue: T, validationFunction?: ValidationFunction<T>, mode: FormMode = FormMode.OnBlur) => {
  const [formState, setFormState] = useState<T>(defaultValue)
  const [errors, setErrors] = useState<Partial<ErrorSchema<T>>>({})
  const [showValidationErrors, setShowValidationErrors] = useState(false)

  useEffect(() => {
    if (showValidationErrors) {
      validate()
    }
  }, [formState])

  const handleChange = (value: T) => {
    setFormState(value)
  }

  const handleSubmit = () => {
    return { formState, isValid: validate() }
  }

  const validate = (): boolean => {
    setShowValidationErrors(true)

    const isValid = (e: any): boolean => {
      for (let k in e) {
        if (e[k] instanceof Object) {
          if (!isValid(e[k])) {
            return false
          }
        } else if (e[k]) {
          return false
        }
      }
      return true
    }

    if (validationFunction) {
      const validationErrors = validationFunction(formState)
      setErrors(validationErrors)
      return isValid(validationErrors)
    }

    return true
  }

  return {
    formState,
    errors,
    showValidationErrors,
    handleSubmit,
    handleChange,
    mode
  }
}
