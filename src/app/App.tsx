import React from 'react';
import style from './App.module.scss'
import {Header} from "../header/Header";
import {Main} from "../main/Main";
import {Skills} from "../skills/Skills";
import {Work} from "../work/Work";
import {Contact} from "../contact/Contact";
import {Footer} from "../footer/Footer";
import {Route} from 'react-router-dom';
import {Preloader} from "../preloader/Preloader";

export function App() {

    const [preloader, setPreloader] = React.useState(false)
    React.useEffect(() => {
        const id = setTimeout(() => {
            setPreloader(false)
        }, 4000)

        return  () => clearTimeout(id)
    }, [preloader])

    return (
        <>
            {
                preloader
                    ? <Preloader/>
                    : <div className={style.app}>
                        <Header/>
                        <Route exact path={'/'} render={() => <Main/>}/>
                        <Route path={'/skills'} render={() => <Skills/>}/>
                        <Route path={'/work'} render={() => <Work/>}/>
                        <Route path={'/contacts'} render={() => <Contact/>}/>
                        <Footer/>
                    </div>
            }
        </>
    );
}
