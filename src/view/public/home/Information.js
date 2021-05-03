import React from 'react';
import logo from '../../../assets/img/logo.png'
import userIcon from '../../../assets/img/user-icon.png';
import play from '../../../assets/img/play.png';
import './__styles__/index.css';
import Movie from "../../../components/Movie";
import { Link } from 'react-router-dom'
import { Rating } from '@material-ui/lab'
const Page = (props) => {
    const setVoteClass = (vote) => {
        if (vote >= 8) {
            return "green";
        } else if (vote >= 6) {
            return "orange";
        } else {
            return "red";
        }
    };
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

            <div style={{ display: 'flex', flexDirection: 'row', paddingTop:50, }}>
                <div >
                    <Movie key={props.location.aboutprops.movie.id} {...props.location.aboutprops.movie} />
                </div>
                <div className="card" >
                    <section >
                        <div>

                            <h2 className="info__title">{props.location.aboutprops.movie.original_title}</h2>
                            <div style={{ display: 'flex', marginTop: 20, width: '1%' }}>
                                <Rating size="small" readOnly={true} name="customized-empty" precision={0.5} defaultValue={props.location.aboutprops.movie.vote_average} max={10} />

                                <span className={`tag ${setVoteClass(props.location.aboutprops.movie.vote_average)}`}>{props.location.aboutprops.movie.vote_average}</span>
                            </div>

                            <h6 style={{ display: 'flex', marginTop: -10 }}>{props.location.aboutprops.movie.release_date} </h6>

                        </div>
                        <div style={{ width: '85%' }} >
                            <samp className='font' > {props.location.aboutprops.movie.overview}</samp>
                        </div>
                        <div style={{ marginLeft: '-3%' }}>
                            <img className="play__img" src={play} alt="MoviesTime" />
                        </div>

                    </section>


                </div>
            </div>



        </ >
    )
}

export default Page;