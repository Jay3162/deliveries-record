import {useState, useEffect} from 'react';
import style from './landingPage.module.css'

export default function LandingPage() {
    const [addRow, setAddRow] = useState([]);
    const [counter, setCounter] = useState(0);
    const [date, setDate] = useState([]);
    const [company, setCompany] = useState([]);
    const [boxes, setBoxes] = useState([]);
    const [fao, setFao] = useState([]);
    const [signed, setSigned] = useState([]);

    // <section>
    //     <span className={style["input-wrapper"]}>
    //         <input onChange={(e) => {setDate(e.target.value)}} className={style["input-bar"]}></input>
    //         <input onChange={(e) => {setCompany(e.target.value)}} className={style["input-bar"]}></input>
    //         <input onChange={(e) => {setBoxes(e.target.value)}} className={style["input-bar"]}></input>
    //         <input onChange={(e) => {setFao(e.target.value)}} className={style["input-bar"]}></input>
    //         <input onChange={(e) => {setSigned(e.target.value)}} className={style["input-bar"]}></input>
    //         <button>x</button>
    //     </span>
    // </section>

    const NewLine = () => {
        setAddRow(addRow.concat(
            <section className={style["input-wrapper1"]} key={counter}>
                <input className={style["input-bar"]}></input>, 
                <input className={style["input-bar"]}></input>,
                <input className={style["input-bar"]}></input>,
                <input className={style["input-bar"]}></input>,
                <input className={style["input-bar"]}></input>
            </section>)
        )
        setCounter((prev) => prev+=1)
        return (
            {addRow}
        )
    }

    return (
        <div>
            <header></header>
            <main className={style["record"]}>
                <section className={style["record-titles"]}>
                    <span className={style["sub-title"]}>Date</span>
                    <span className={style["sub-title"]}>Company</span>
                    <span className={style["sub-title"]}>No. of Boxes</span>
                    <span className={style["sub-title"]}>Fao</span>
                    <span className={style["sub-title"]}>Signed by</span>
                </section>
                <section>
                    <span className={style["input-wrapper"]}>
                        {addRow}
                    </span>
                </section>
                <section className={style["record-btns"]}>
                    <button onClick={NewLine} className={style["add-btn"]}>Add Row</button>
                    <button className={style["delete-btn"]}>Delete Row</button>
                </section>
            </main>
            <footer></footer>
        </div>
    )
}