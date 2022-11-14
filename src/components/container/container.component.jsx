import { useEffect, useState } from "react";
import Card from "../card/cards.component";
import HeroName from "../name/name.component";
import './container.style.css';

const Container = ({ search }) => {
  const [heros, setHeros] = useState([]);
  const cards = [];
  const observer = new IntersectionObserver( entries  => {
    entries.forEach( entry => {
      const { target } = entry;
      if(entry.isIntersecting) {
        // target.style.opacity = 1;
        // target.style.transform = 'translateX(0px)';
        target.classList.add('move-card');
      } else {
        target.classList.remove('move-card');
      }
    })
  },{
    root : null,
    threshold : .2,
    rootMargin : '0px'
  })
  useEffect(() => {
    fetch("https://akabab.github.io/superhero-api/api/all.json")
      .then((res) => res.json())
      .then((heros) => setHeros(heros))
      .catch((err) => console.log(err));
  }, []);
  return (
    <div className="hero-container">
      <ul className="name-container">
          { heros.map(hero => {
              return (
                <HeroName hero={hero.name} key={hero.id} id={hero.id}/>
              )
          })}
      </ul>
      <div className="cards-container">
        {heros.map((item) => {
        if (item.name.toLowerCase().includes(search.toLowerCase()))
            return <Card hero = {item} key = {item.id} observer = {observer} />;
        })}
      </div>
    </div>
  );
};

export default Container;
