import Image from 'next/image'
import { useRouter } from 'next/router'
import React from 'react'
import NavBar from '../../../Components/navbar/NavBar'
import style from './login.module.css'

const Login = () => {
    const router = useRouter()
    return (
        <div className={style.loginPage}>
            <NavBar/>
            <Image alt='bg' layout='fill' src={"/images/code bg/bg.webp"}/>
            <div className={style.loginBox}>
                <div className={style.loginHead}>
                    <div className={style.loginText}>
                        <h1>LOGIN</h1>
                        <p>Sorry currently this page only for <span>Manshad</span></p>
                    </div>
                    <img src="/images/icons/add-user.png" alt="" />
                </div>
                <div className={style.loginBody}>
                    <div className={style.usernameWraper}>
                        <img src="/images/icons/username.png" alt="" />
                        <input placeholder='username' type="text" />
                    </div>
                    <div className={style.passwordWraper}>
                        <img src="/images/icons/password.png" alt="" />
                        <input placeholder='password' type="password" />
                    </div>
                    <button className={style.btnLetsGo}>let&apos;s go</button>
                    <button onClick={() => {
                        router.push('/')
                    }} className={style.btnBack}>Back to Home</button>
                </div>
            </div>
        </div>
    )
}

export default Login