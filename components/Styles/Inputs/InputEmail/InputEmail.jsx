import Input from '../Input/Input'

const InputEmail = ({
  placeholder = 'please insert email',
  id = '',
  customCalss = '',
  required = '',
}) => {
  return (
    <>
      <Input
        type="email"
        placeholder={placeholder}
        id={id}
        customCalss={customCalss}
        required={required}
      />
    </>
  )
}

export default InputEmail
