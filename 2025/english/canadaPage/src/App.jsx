import { useEffect, useRef, useState } from "react";
import "./App.css";
import BackgroundEffects from "./BackgroundEffects";

/* Normaliza respuestas: minúsculas, sin tildes, sin símbolos */
function normalizeAnswer(s = "") {
  return s
    .toLowerCase()
    .normalize("NFD")
    .replace(/\p{Diacritic}/gu, "")
    .replace(/[^a-z0-9]/g, "");
}

/* Banco de preguntas (varias por letra para que cambien entre partidas) */
function buildQuestionsPool() {
  return {
    A: [
      { q: "Leaf appearing on the Canadian flag", a: "Arce" },
      { q: "Province with capital St. John's (hint: it's an island)", a: "Terranova" },
    ],
    B: [{ q: "National park in Alberta famous for its turquoise lakes", a: "Banff" }],
    C: [
      { q: "Capital of Canada", a: "Ottawa" },
      { q: "Famous tower in Toronto", a: "CN Tower" },
    ],
    D: [{ q: "Canadian singer of 'Hotline Bling'", a: "Drake" }],
    E: [{ q: "Official language along with English", a: "Francés" }],
    F: [{ q: "Bay with the highest tides in the world", a: "Bay of Fundy" }],
    G: [
      { q: "Mountain range where Banff and Jasper are located", a: "Rocky Mountains" },
      { q: "Type of government: constitutional monarchy and ________ parliamentary", a: "democracia" },
    ],
    H: [{ q: "Comedian from 'The Mask' born in Newmarket, Ontario: Jim ______", a: "Carrey" }],
    I: [{ q: "Engineering, health, and IT are highly ______ employment sectors in Canada", a: "demandados" }],
    J: [{ q: "Large national park in the Canadian Rockies: starts with J", a: "Jasper" }],
    L: [{ q: "Singer-songwriter of 'Hallelujah': Leonard _____", a: "Cohen" }],
    N: [
      { q: "Bay known for having the highest tides in the world", a: "Bay of Fundy" },
      { q: "Province with the city of Halifax (New ______)", a: "Escocia" },
    ],
    O: [{ q: "Capital of Canada starting with O", a: "Ottawa" }],
    P: [{ q: "National park where Lake Louise is located", a: "Banff" }],
    Q: [{ q: "Historic city founded by Champlain in 1608: ______ City", a: "Quebec" }],
    R: [{ q: "Canadian singer of 'Old Man' and 'Harvest Moon': Neil _____", a: "Young" }],
    S: [{ q: "Iconic stadium/tower in Toronto (abbreviation, two letters)", a: "CN Tower" }],
    T: [{ q: "Most populous city in Canada", a: "Toronto" }],
    V: [{ q: "Province where Banff and Calgary are located", a: "Alberta" }],
  };
}

/* ----------------------------
   Componente: Pasapalabra
----------------------------- */
function Pasapalabra({ onBack }) {
  const pool = useRef(buildQuestionsPool());
  const [rosco, setRosco] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [input, setInput] = useState("");
  const [stats, setStats] = useState({ correct: 0, wrong: 0 });
  const [finished, setFinished] = useState(false);

  useEffect(() => {
    startGame();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  function startGame() {
    // Tomamos 1 pregunta aleatoria por letra disponible
    const letters = Object.keys(pool.current);
    const built = letters.map((letter) => {
      const options = pool.current[letter];
      const pick = options[Math.floor(Math.random() * options.length)];
      return {
        letter,
        q: pick.q,
        a: pick.a,
        status: "pending", // pending | correct | wrong
      };
    });
    setRosco(built);
    setCurrentIndex(0);
    setInput("");
    setStats({ correct: 0, wrong: 0 });
    setFinished(false);
  }

  function nextPending(fromIndex) {
    if (!rosco.length) return 0;
    // Busca el siguiente "pending" circularmente
    for (let i = 1; i <= rosco.length; i++) {
      const idx = (fromIndex + i) % rosco.length;
      if (rosco[idx].status === "pending") return idx;
    }
    return fromIndex;
  }

  function handleSubmit(e) {
    e.preventDefault();
    if (!rosco.length || finished) return;

    const answer = normalizeAnswer(input);
    const correct = normalizeAnswer(rosco[currentIndex].a);

    setRosco((prev) => {
      const copy = [...prev];
      copy[currentIndex] = {
        ...copy[currentIndex],
        status: answer === correct ? "correct" : "wrong",
      };
      return copy;
    });

    setStats((s) => ({
      correct: s.correct + (answer === correct ? 1 : 0),
      wrong: s.wrong + (answer !== correct ? 1 : 0),
    }));

    setInput("");

    // ¿quedan pendientes?
    const stillPending = rosco.some((r, i) =>
      i === currentIndex ? false : r.status === "pending"
    );
    if (!stillPending && rosco[currentIndex].status !== "pending") {
      setFinished(true);
      return;
    }
    setCurrentIndex(nextPending(currentIndex));
  }

  function handlePass() {
    if (!rosco.length || finished) return;
    setCurrentIndex(nextPending(currentIndex));
  }

  function revealAnswer(i) {
    if (!rosco.length || finished) return;
    setRosco((prev) => {
      const copy = [...prev];
      copy[i] = { ...copy[i], status: "wrong" };
      return copy;
    });
    setStats((s) => ({ ...s, wrong: s.wrong + 1 }));
    setInput("");
    setCurrentIndex(nextPending(i));
  }

  useEffect(() => {
    // cerrar con Enter en teclado móvil
    const onKey = (e) => {
      if (e.key === "Enter" && !e.isComposing) {
        e.preventDefault();
      }
    };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, []);

  const allDone = finished || rosco.every((r) => r.status !== "pending");

  return (
    <div className="game">
      <div className="game-header">
        <button className="btn ghost" onClick={onBack}>
          ⬅ Back
        </button>
        <h2>Pasapalabra (Canada)</h2>
        <div style={{ width: 56 }} />
      </div>

      <div className="rosco">
        {rosco.map((r, idx) => (
          <div
            key={r.letter}
            className={[
              "rosco-letter",
              r.status,
              idx === currentIndex && !allDone ? "current" : "",
            ].join(" ")}
            title={r.status === "pending" ? "" : r.a}
          >
            {r.letter}
          </div>
        ))}
      </div>

      {!allDone && rosco.length > 0 && (
        <div className="question-area">
          <div className="question-card">
            <div className="question-letter">{rosco[currentIndex].letter}</div>
            <div className="question-text">{rosco[currentIndex].q}</div>
            <form onSubmit={handleSubmit} className="answer-form">
              <input
                autoFocus
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Type your answer and press Enter"
              />
              <div className="answer-actions">
                <button type="submit" className="btn primary">
                  Submit
                </button>
                <button type="button" className="btn" onClick={handlePass}>
                  Pass
                </button>
                <button
                  type="button"
                  className="btn warn"
                  onClick={() => revealAnswer(currentIndex)}
                >
                  Reveal
                </button>
              </div>
            </form>
          </div>

          <div className="game-stats">
            <p>Correct: {stats.correct}</p>
            <p>Wrong: {stats.wrong}</p>
            <p>Pending: {rosco.filter((r) => r.status === "pending").length}</p>
          </div>
        </div>
      )}

      {allDone && (
        <div className="end-card">
          <h3>Game Over!</h3>
          <p>
            Correct: <b>{stats.correct}</b> &nbsp;—&nbsp; Wrong:{" "}
            <b>{stats.wrong}</b>
          </p>
          <button className="btn primary" onClick={startGame}>
            Play Again
          </button>
        </div>
      )}
    </div>
  );
}

/* ----------------------------
   App principal (Intro/Facts/Places/Game)
----------------------------- */
function App() {
  const [side, setSide] = useState("intro"); // intro | facts | places | game
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
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRd2DKHQ9Hb9XPF5mnOlQGgQCAFnXFKzqhyEg&s",
        "https://www.rollingstone.com/wp-content/uploads/2018/06/rs-174854-MSDACVE_EC017_H.jpg?w=1581&h=1054&crop=1",
      ],
    },
    {
      title: "Culture",
      content: "Canada is multicultural, bilingual, and rich in heritage.",
      description:
        "Canada supports arts, festivals, music, and community events. It celebrates diversity and funds initiatives to promote Canadian music and performing arts.",
      images: [
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSpNf7uDelUXTRQVkqZ2oBxSNXo40PStZkbrQ&s",
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTAKp3kGZZn3fsF8solSXCr02yyXw93V78jZg&s",
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRByFMZiv0A2kx3H4qwofYac-VJgBzcSx4uDw&s",
      ],
    },
    {
      title: "Jobs in Demand",
      content: "Some of the most sought-after careers in Canada.",
      description:
        "Healthcare professionals, IT specialists, engineers, and skilled trades are highly demanded in Canada’s labor market.",
      images: [
        "https://getincanada.ca/wp-content/uploads/2023/11/what-are-the-top-10-in-demand-jobs-in-canada-1024x1024.webp",
      ],
    },
    {
      title: "History Timeline",
      content: "Key events in Canadian history.",
      description: [
        { year: "Before 1500", event: "Indigenous peoples inhabit Canada." },
        { year: "1497", event: "John Cabot claims land for England." },
        { year: "1534", event: "Jacques Cartier explores St. Lawrence River for France." },
        { year: "1608", event: "Quebec founded by Samuel de Champlain." },
        { year: "1867", event: "Confederation forms first four provinces." },
        { year: "1982", event: "Canadian Constitution and Charter of Rights and Freedoms." },
        { year: "Present", event: "Federal parliamentary democracy, bilingual, multicultural." },
      ],
      images: [
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS1bpgmbBm9gYuOgGFO3v7DXqtcFlHaYR4aSw&s",
      ],
    },
    {
      title: "Arts & Festivals",
      content: "Music, performing arts, and community festivals.",
      description:
        "Canada has a lively music scene, renowned rock bands and solo artists, and government-supported festivals. Examples: Neil Young, Bryan Adams, Leonard Cohen, Joni Mitchell.",
      images: [
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSAQgVzOQRgP23voB8RgdfqauoxtZIdPSL0RQ&s",
        "https://images.squarespace-cdn.com/content/v1/50e1b9c6e4b015296ce398f6/1587746330846-X1TQQ2ENNU7FVX8IR6MT/grandstand+show.jpeg",
      ],
    },
  ];

  const placesData = [
    {
      title: "Niagara Falls",
      img: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/0d/a3/8b/5f/niagara-falls.jpg?w=900&h=-1&s=1",
      description:
        "Niagara Falls is one of the most famous natural wonders in the world, located on the border between Canada and the United States.",
      images: [
        "https://tnphotos.s3.ca-central-1.amazonaws.com/uploads/2017/11/Niagara-Falls-Illumination-and-Fireworks-e1708469709625.jpg",
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTXJfjqr5tr1GyzzwVGU1_kvNmoO6btfJJLlw&s",
        "https://vagrantsoftheworld.com/wp-content/uploads/2020/07/American-Falls-Niagara-in-winter.jpg",
      ],
    },
    {
      title: "Banff National Park",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRf3JoubbsPdIiIyv1aV8ehDF9K0kzG0xR1Tw&s",
      description:
        "Banff National Park, in Alberta, is the first national park of Canada and part of the Rocky Mountains.",
      images: [
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSNtpgOGcvNkYh0CGxvMSrHWtcNH62sUvvSAA&s",
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRf3JoubbsPdIiIyv1aV8ehDF9K0kzG0xR1Tw&s",
        "https://www.todocanada.ca/wp-content/uploads/banff-Vermilion-lakes.jpeg",
      ],
    },
    {
      title: "Jasper National Park",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQLNqcp3oRs-tmjDWGjzIpvGT2Tf44apybudg&s",
      description:
        "Jasper National Park is the largest park in the Canadian Rockies, known for glaciers, rivers, waterfalls, and dark-sky preserves.",
      images: [
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR_pM-R2D_QJhPyNLy1LXeZE83zOFeEKaRxtw&s",
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRmkS134WpM0XwMe2vP-t5i87IKBQn8kAw-Xw&s",
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcROGEqbPkQqPe9yWGR-zYMD00Hrh8hgxBEMrg&s",
      ],
    },
    {
      title: "Bay of Fundy",
      img: "https://www.bayoffundy.com/assets/walking-ocean-floor.jpg",
      description: "The Bay of Fundy is known for having the highest tides in the world.",
      images: [
        "https://imageio.forbes.com/specials-images/imageserve/678998f4e4255496a03693fb/Bay-of-Fundy-Flower-Pot/0x0.jpg?format=jpg&width=960",
        "https://s3.amazonaws.com/iexplore_web/images/assets/000/001/822/original/Rochers_Hopewell_Rocks_at_night.jpg?1436889244",
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQgCUReh0iDuK55GOpO8M0EtDtoV6D45G7xpQ&s",
      ],
    },
    {
      title: "Northern Lights",
      img: "https://www.cnet.com/a/img/resize/cb2b9a619e78650b6a298f10bf144316b88e6ad4/hub/2025/03/04/b51f63e4-a1fb-4355-abbc-07ffcd78ed44/aurora-borealis-gettyimages-1835012818.jpg?auto=webp&fit=crop&height=675&width=1200",
      description:
        "The Aurora Borealis can be seen in Canada’s northern regions like Yukon, Nunavut, and Northwest Territories.",
      images: [
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSJ2oxWtXGB3Qs8JaeVvGYNZPN_34uLTOJn_A&s",
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT1-kvvxhxp6g_PpEo73xssLoXRaESUGBY29Q&s",
        "https://gti.images.tshiftcdn.com/1243967/x/0/reykjanes-sea-cliff-northern-lights-winter-2019.jpg?crop=1.91%3A1&width=1200&fit=crop",
      ],
    },
    {
      title: "Toronto",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT2zjjfaGH1sy0yNozYmLIMBp3s7F-P1clhvA&s",
      description:
        "Toronto is Canada’s largest city, famous for the CN Tower, multicultural neighborhoods, art, music, and sports.",
      images: [
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTlFddBURsc2dgc3SFiUUtmrpDLNo2qAxnwuA&s",
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTSRbZVajRZM2nN40SYakceKuQDK3ECyQo7dw&s",
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSXsXymei5QhIXN97-wwNiPjSuNfdeaudCTkg&s",
      ],
    },
  ];

  const changeSide = (name) => {
    setSide(name);
    setSelectedPlace(null);
    setSelectedFact(null);
  };

  return (
    <>
      <BackgroundEffects />

      {/* HEADER */}
      <header className="site-header">
        <div className="logo-nav">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/31/Flag_of_Canada_%283-2%29.svg/1200px-Flag_of_Canada_%283-2%29.svg.png"
            alt="Flag of Canada"
          />
          <h1>Canada</h1>

          <nav className="nav-buttons">
            <button className={side === "intro" ? "active" : ""} onClick={() => changeSide("intro")}>
              Intro
            </button>
            <button className={side === "facts" ? "active" : ""} onClick={() => changeSide("facts")}>
              Facts
            </button>
            <button className={side === "places" ? "active" : ""} onClick={() => changeSide("places")}>
              Places
            </button>
            <button className={side === "game" ? "active" : ""} onClick={() => changeSide("game")}>
              Pasapalabra
            </button>
          </nav>
        </div>
      </header>

      {/* INTRO */}
      {side === "intro" && (
        <div className="principal">
          <div className="intro-container">
            <h1>Welcome to Canada</h1>
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSkZuweDRuNEBeoh5AYOkKqZMnOgDwF7INrSQ&s"
              alt="Canadian Landscape"
            />
          </div>
        </div>
      )}

      {/* FACTS LIST */}
      {side === "facts" && !selectedFact && (
        <main className="principal">
          <div className="cards-grid">
            {factsData.map((fact) => (
              <div key={fact.title} className="fact-card" onClick={() => setSelectedFact(fact)}>
                <h2>{fact.title}</h2>
                {fact.content.split("\n").map((line, i) => (
                  <p key={`${fact.title}-${i}`}>{line}</p>
                ))}
              </div>
            ))}
          </div>
        </main>
      )}

      {/* FACT DETAIL */}
      {selectedFact && (
        <main className="principal place-detail">
          <button className="btn ghost" onClick={() => setSelectedFact(null)}>
            ⬅ Back
          </button>
          <h1>{selectedFact.title}</h1>

          {selectedFact.title === "History Timeline" ? (
            <div className="timeline-container">
              {selectedFact.description.map((item, idx) => (
                <div key={`${item.year}-${idx}`} className="timeline-item">
                  <div className="timeline-circle" />
                  <div className="timeline-content">
                    <div className="timeline-year">{item.year}</div>
                    <div className="timeline-event">{item.event}</div>
                  </div>
                </div>
              ))}
            </div>
          ) : selectedFact.title === "Famous People" ? (
            <ul className="fact-list">
              {selectedFact.description
                .trim()
                .split("\n")
                .map((line, idx) => (
                  <li key={`fp-${idx}`}>{line.replace("-", "").trim()}</li>
                ))}
            </ul>
          ) : (
            <p>{selectedFact.description}</p>
          )}

          {selectedFact.images && (
            <div className="gallery">
              {selectedFact.images.map((img, idx) => (
                <img key={`${selectedFact.title}-img-${idx}`} src={img} alt={`${selectedFact.title} ${idx + 1}`} />
              ))}
            </div>
          )}
        </main>
      )}

      {/* PLACES LIST */}
      {side === "places" && !selectedPlace && !selectedFact && (
        <main className="principal">
          <div className="places-grid">
            {placesData.map((place) => (
              <div key={place.title} className="place-card" onClick={() => setSelectedPlace(place)}>
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
          <button className="btn ghost" onClick={() => setSelectedPlace(null)}>
            ⬅ Back
          </button>
          <h1>{selectedPlace.title}</h1>
          <p>{selectedPlace.description}</p>
          <div className="gallery">
            {selectedPlace.images.map((img, idx) => (
              <img key={`${selectedPlace.title}-img-${idx}`} src={img} alt={`${selectedPlace.title} ${idx + 1}`} />
            ))}
          </div>
        </main>
      )}

      {/* GAME */}
      {side === "game" && <Pasapalabra onBack={() => changeSide("intro")} />}
    </>
  );
}

export default App;
