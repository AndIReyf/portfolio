import React from 'react';
import style from './App.module.scss'
import {Header} from "../header/Header";
import {Main} from "../main/Main";
import {Skills} from "../skills/Skills";
import {Work} from "../work/Work";

export function App() {
    return (
        <div className={style.app}>
            <Header/>
            <Main/>
            <Skills/>
            <Work/>
        </div>
    );
}
