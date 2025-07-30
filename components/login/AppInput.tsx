import style from '@/styles/login.module.scss'

type InputPropsType = {
    name: string
    type: string
    value: string
    className?: string
    handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void
}

const AppInput = ({ name, type, value, className, handleChange }: InputPropsType) => {
    return (
        (
            <div className={`flex flex-col mt-4 ${className}`}>
                <label htmlFor={name} className={style.label}>{name}</label>
                <input
                    type={type}
                    name={name}
                    value={value}
                    onChange={handleChange}
                    className={style.input}
                />
            </div>
        )
    )
}

export default AppInput;