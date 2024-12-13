import { useState } from 'react'
import Button from "./Button";
import posts from "../data/posts"
import style from "../style/Button.module.css"
import tagsStyle from "../style/Tags.module.css"




function Card({ title, description, image, id, tags }) {

    const [pippo, setPippo] = useState(false);
    function toggleActive() {
        setPippo(!pippo)
    }

    const [numero, setNumero] = useState(0);
    function increment() {

        setNumero(numero + 100)
    }
    return (
        <li key={id} className="list-unstyled">
            <div className={`card container mb-5 ${pippo ? style.isActive : ""}`} onClick={toggleActive} style={{
                width: 30 + "rem"
            }}>
                <img className="card-img-top" src={image} alt="Card image cap" />
                <div className="card-body">
                    <h5 className="card-title">{title}</h5>
                    <p className="card-text"><b>{description}</b></p>

                    {tags.map((tag) => {
                        return (tag === "html" && <span key={id} className={tagsStyle.green} >{tag}</span> ||
                            tag === "css" && <span key={id} className={tagsStyle.pink}>{tag}</span> ||
                            tag === "js" && <span key={id} className={tagsStyle.yellow}>{tag}</span> ||
                            tag === "php" && <span key={id} className={tagsStyle.red}>{tag}</span>
                        )
                    })}

                    <div>{numero}</div>
                    <Button />
                    <button onClick={increment} >Incrementa</button>
                </div>
            </div>
        </li>
    )
}

export default Card;