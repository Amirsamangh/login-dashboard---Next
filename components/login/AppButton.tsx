import style from '@/styles/login.module.scss'

type ButtonPropsType = {
    onClick: () => void
    value: string
}

const AppButton = ({onClick, value}: ButtonPropsType) => {
    return (
        <div className='dflex justify-content-center'>
            <button
                onClick={onClick}
                className={style.button}
            >
                {value}
            </button>
        </div>
    )
}

export default AppButton;