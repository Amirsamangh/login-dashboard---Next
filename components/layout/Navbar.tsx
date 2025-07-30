import style from '@/styles/navbar.module.scss'

const Navbar = () => {
    return (
        <>
            <div>
                <div>
                    <ul className={style.navbar}>
                        <li className={style.navbar_items}>login</li>
                        <li className={style.navbar_items}>dashboard</li>
                    </ul>
                </div>
            </div>
        </>
    )
}

export default Navbar;