import React from 'react';
import logo from '../../../assets/img/logo.png'
import userIcon from '../../../assets/img/user-icon.png';
import './__styles__/index.css';
import Movie from "../../../components/Movie";
import { Link } from 'react-router-dom'
const Page = (props) => {
    console.log('props son ', props.location.aboutprops)
    return (
        <>
            <header>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'flex-start', }}>
                    <Link className='link' to='/'>
                        <img className="header__img" src={logo} alt="MoviesTime" />
                        <samp className='samp'>MoviesTime</samp>
                    </Link>



                </div>
                <div className="header__menu">
                    <div className="header__menu--profile">
                        <img className='profile' src={userIcon} alt="" />
                        <p>Perfil</p>
                    </div>
                    <ul>
                        <li><a href="/">Iniciar Sesión</a></li>
                    </ul>
                </div>

            </header>

            <div style={{ display: 'flex', flexDirection: 'row' , justifyContent:'center'}}>
                <div >
                    <Movie key={props.location.aboutprops.movie.id} {...props.location.aboutprops.movie} />
                </div>
                <div className="card" >
                    <section >
                        <div>
                            <h2 className="info__title">{props.location.aboutprops.movie.original_title}</h2>
                            <h6 >{props.location.aboutprops.movie.release_date} </h6>

                        </div>
                        <div style={{ width: '85%' }} >
                            <samp  className='font' > {props.location.aboutprops.movie.overview}</samp>
                        </div>

                    </section>


                </div>
            </div>



        </ >
    )
}

export default Page;