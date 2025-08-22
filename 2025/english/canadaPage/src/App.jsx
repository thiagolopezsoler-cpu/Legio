import { useState } from 'react';
import './App.css';
import BackgroundEffects from './BackgroundEffects';

function App() {
  const [side, setSide] = useState("intro");
  const [selectedPlace, setSelectedPlace] = useState(null);
  const [selectedFact, setSelectedFact] = useState(null);

  const factsData = [
    {
      title: "Famous People",
      content: "Some of Canada’s most influential artists and actors.",
      description: `
- Drake: Born October 24, 1986 in Toronto. Multiple Grammy Awards.
- Justin Bieber: Born March 1, 1994 in London, Ontario. Global pop icon.
- The Weeknd: Born February 16, 1990 in Toronto. Famous solo music career.
- Jim Carrey: Born January 17, 1962 in Newmarket. Comedian and actor known for energetic style.
      `,
      images: [
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR0jrz4xEj_QD7ARAEi4jaEG8z3ba8yZn9bIA&s",
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSWSybcacnErKTAOIJHArOegV2jwRnJBh2R7w&s",
        "https://akns-images.eonline.com/eol_images/Entire_Site/2021330/rs_634x1024-210430163026-634-the-weeknd.jpg?fit=around%7C634:1024&output-quality=90&crop=634:1024;center,top",
        "https://www.rollingstone.com/wp-content/uploads/2018/06/rs-174854-MSDACVE_EC017_H.jpg?w=1581&h=1054&crop=1"
      ]
    },
    {
      title: "Culture",
      content: "Canada is multicultural, bilingual, and rich in heritage.",
      description: "Canada supports arts, festivals, music, and community events. It celebrates diversity and funds initiatives to promote Canadian music and performing arts.",
      images: [
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSpNf7uDelUXTRQVkqZ2oBxSNXo40PStZkbrQ&s",
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTAKp3kGZZn3fsF8solSXCr02yyXw93V78jZg&s",
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRByFMZiv0A2kx3H4qwofYac-VJgBzcSx4uDw&s"
      ]
    },
    {
      title: "Jobs in Demand",
      content: "Some of the most sought-after careers in Canada.",
      description: "Healthcare professionals, IT specialists, engineers, and skilled trades are highly demanded in Canada’s labor market.",
      images: [
        "https://getincanada.ca/wp-content/uploads/2023/11/what-are-the-top-10-in-demand-jobs-in-canada-1024x1024.webp"
      ]
    },
    {
      title: "History Timeline",
      content: "Key events in Canadian history.",
      description: `
- Before 1500: Indigenous peoples inhabit Canada.
- 1497: John Cabot claims land for England.
- 1534: Jacques Cartier explores St. Lawrence River for France.
- 1608: Quebec founded by Samuel de Champlain.
- 1867: Confederation forms first four provinces.
- 1982: Canadian Constitution and Charter of Rights and Freedoms.
- Present: Federal parliamentary democracy, bilingual, multicultural.
      `,
      images: [
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS1bpgmbBm9gYuOgGFO3v7DXqtcFlHaYR4aSw&s"
      ]
    },
    {
      title: "Arts & Festivals",
      content: "Music, performing arts, and community festivals.",
      description: "Canada has a thriving music scene, renowned rock bands and solo artists, and government-supported festivals. Examples: Neil Young, Bryan Adams, Leonard Cohen, Joni Mitchell.",
      images: [
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSAQgVzOQRgP23voB8RgdfqauoxtZIdPSL0RQ&s",
        "https://images.squarespace-cdn.com/content/v1/50e1b9c6e4b015296ce398f6/1587746330846-X1TQQ2ENNU7FVX8IR6MT/grandstand+show.jpeg"
      ]
    }
  ];

  const placesData = [
    {
      title: "Niagara Falls",
      img: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/0d/a3/8b/5f/niagara-falls.jpg?w=900&h=-1&s=1",
      description: "Niagara Falls is one of the most famous natural wonders in the world, located on the border between Canada and the United States.",
      images: [
        "https://tnphotos.s3.ca-central-1.amazonaws.com/uploads/2017/11/Niagara-Falls-Illumination-and-Fireworks-e1708469709625.jpg",
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTXJfjqr5tr1GyzzwVGU1_kvNmoO6btfJJLlw&s",
        "https://vagrantsoftheworld.com/wp-content/uploads/2020/07/American-Falls-Niagara-in-winter.jpg"
      ]
    },
    {
      title: "Banff National Park",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRf3JoubbsPdIiIyv1aV8ehDF9K0kzG0xR1Tw&s",
      description: "Banff National Park, in Alberta, is the first national park of Canada and part of the Rocky Mountains.",
      images: [
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSNtpgOGcvNkYh0CGxvMSrHWtcNH62sUvvSAA&s",
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRf3JoubbsPdIiIyv1aV8ehDF9K0kzG0xR1Tw&s",
        "https://www.todocanada.ca/wp-content/uploads/banff-Vermilion-lakes.jpeg"
      ]
    },
    {
      title: "Jasper National Park",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQLNqcp3oRs-tmjDWGjzIpvGT2Tf44apybudg&s",
      description: "Jasper National Park is the largest park in the Canadian Rockies, known for glaciers, rivers, waterfalls, and dark-sky preserves.",
      images: [
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR_pM-R2D_QJhPyNLy1LXeZE83zOFeEKaRxtw&s",
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRmkS134WpM0XwMe2vP-t5i87IKBQn8kAw-Xw&s",
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcROGEqbPkQqPe9yWGR-zYMD00Hrh8hgxBEMrg&s"
      ]
    },
    {
      title: "Bay of Fundy",
      img: "https://www.bayoffundy.com/assets/walking-ocean-floor.jpg",
      description: "The Bay of Fundy is known for having the highest tides in the world.",
      images: [
        "https://imageio.forbes.com/specials-images/imageserve/678998f4e4255496a03693fb/Bay-of-Fundy-Flower-Pot/0x0.jpg?format=jpg&width=960",
        "https://s3.amazonaws.com/iexplore_web/images/assets/000/001/822/original/Rochers_Hopewell_Rocks_at_night.jpg?1436889244",
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQgCUReh0iDuK55GOpO8M0EtDtoV6D45G7xpQ&s"
      ]
    },
    {
      title: "Northern Lights",
      img: "https://www.cnet.com/a/img/resize/cb2b9a619e78650b6a298f10bf144316b88e6ad4/hub/2025/03/04/b51f63e4-a1fb-4355-abbc-07ffcd78ed44/aurora-borealis-gettyimages-1835012818.jpg?auto=webp&fit=crop&height=675&width=1200",
      description: "The Aurora Borealis can be seen in Canada’s northern regions like Yukon, Nunavut, and Northwest Territories.",
      images: [
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSJ2oxWtXGB3Qs8JaeVvGYNZPN_34uLTOJn_A&s",
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT1-kvvxhxp6g_PpEo73xssLoXRaESUGBY29Q&s",
        "https://gti.images.tshiftcdn.com/1243967/x/0/reykjanes-sea-cliff-northern-lights-winter-2019.jpg?crop=1.91%3A1&width=1200&fit=crop"

      ]
    },
    {
      title: "Toronto",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT2zjjfaGH1sy0yNozYmLIMBp3s7F-P1clhvA&s",
      description: "Toronto is Canada’s largest city, famous for the CN Tower, multicultural neighborhoods, art, music, and sports.",
      images: [
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTlFddBURsc2dgc3SFiUUtmrpDLNo2qAxnwuA&s",
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTSRbZVajRZM2nN40SYakceKuQDK3ECyQo7dw&s",
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSXsXymei5QhIXN97-wwNiPjSuNfdeaudCTkg&s"
      ]
    }
  ];

  const changeSide = (name) => {
    setSide(name);
    setSelectedPlace(null);
    setSelectedFact(null);
  };

  return (
    <>
      <BackgroundEffects />

      <header>
        <div className="logo-nav">
          <img src="https://paisesdelmundo.org/wp-content/uploads/2019/10/imagenes-de-bandera-de-canada.jpg" alt="Bandera de Canadá" />
          <h1>Canada</h1>
          <h2 className={side === 'intro' ? 'active' : ''} onClick={() => changeSide('intro')}>Intro</h2>
          <h2 className={side === 'facts' ? 'active' : ''} onClick={() => changeSide('facts')}>Facts</h2>
          <h2 className={side === 'places' ? 'active' : ''} onClick={() => changeSide('places')}>Places</h2>
        </div>
      </header>

      {/* INTRO */}
      {side === 'intro' && !selectedPlace && !selectedFact && (
        <main className="principal">
          <h1>Welcome to Canada</h1>
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSkZuweDRuNEBeoh5AYOkKqZMnOgDwF7INrSQ&s" alt="Paisaje de Canadá" />
        </main>
      )}

      {/* FACTS LIST */}
      {side === 'facts' && !selectedFact && (
        <main className="principal">
          <div className="facts-container">
            {factsData.map((fact, index) => (
              <div key={index} className="fact-card" onClick={() => setSelectedFact(fact)}>
                <h2>{fact.title}</h2>
                {fact.content.split("\n").map((line, i) => <p key={i}>{line}</p>)}
              </div>
            ))}
          </div>
        </main>
      )}

      {/* FACT DETAIL */}
      {selectedFact && (
        <main className="principal place-detail">
          <button onClick={() => setSelectedFact(null)}>⬅ Back</button>
          <h1>{selectedFact.title}</h1>

          {selectedFact.title === "Famous People" || selectedFact.title === "History Timeline" ? (
            <ul className="fact-list">
              {selectedFact.description.trim().split("\n").map((line, idx) => (
                <li key={idx}>{line.replace("-", "").trim()}</li>
              ))}
            </ul>
          ) : (
            <p>{selectedFact.description}</p>
          )}

          {selectedFact.images && selectedFact.images.length > 0 && (
            <div className="gallery">
              {selectedFact.images.map((img, idx) => (
                <img key={idx} src={img} alt={`${selectedFact.title} ${idx}`} />
              ))}
            </div>
          )}
        </main>
      )}

      {/* PLACES LIST */}
      {side === 'places' && !selectedPlace && !selectedFact && (
        <main className="principal">
          <div className="places-container">
            {placesData.map((place, index) => (
              <div key={index} className="place-card" onClick={() => setSelectedPlace(place)}>
                <img src={place.img} alt={place.title} />
                <h3>{place.title}</h3>
              </div>
            ))}
          </div>
        </main>
      )}

      {/* PLACE DETAIL */}
      {selectedPlace && (
        <main className="principal place-detail">
          <button onClick={() => setSelectedPlace(null)}>⬅ Back</button>
          <h1>{selectedPlace.title}</h1>
          <p>{selectedPlace.description}</p>
          <div className="gallery">
            {selectedPlace.images.map((img, idx) => (
              <img key={idx} src={img} alt={`${selectedPlace.title} ${idx}`} />
            ))}
          </div>
        </main>
      )}
    </>
  );
}

export default App;
