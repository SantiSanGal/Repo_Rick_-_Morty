import React from 'react'
import { useEffect,useState } from 'react'
import axios from 'axios'
import './styles/residentInfo.css'

const ResidentInfo = ({url}) => {
    
    const [character, setCharacter] = useState()

    useEffect(() => {
        axios.get(url)
            .then(res => setCharacter(res.data))
            .catch(err => console.log(err))
    }, [])
    
    console.log(character);

    return (
        <article className='card'>
            <header className='card__header'>
                <img className='card__img' src={character?.image} alt="" />
                <div className='card__container-status'>
                    <span className={`card__circle ${character?.status}`}></span>
                    <span className='card__status'> {character?.status}</span>
                </div>
            </header>
            <section className='card__body'>
                <h3 className='card__name'>{character?.name}</h3>
                <hr className='card__hr' />
                <ul className='card__list'>
                    <li className='card__item'><span className='card__label'>Specie </span>{character?.species}</li>
                    <li className='card__item'><span className='card__label'>Origin </span>{character?.origin.name}</li>
                    <li className='card__item'><span className='card__label'>Eppisodes where appear </span>{character?.episode.length}</li>
                </ul>
            </section>
        </article>
)
}

export default ResidentInfo