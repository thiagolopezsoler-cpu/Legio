import { useState } from 'react';
import './App.css';

function App() {
  const [side, setSide] = useState("intro");

  const factsData = [
    {
      title: "Languages",
      content: "Canada is officially bilingual: English and French."
    },
    {
      title: "Immigration",
      content: "Canada is one of the most welcoming countries for immigrants."
    },
    {
      title: "Arts & Culture",
      content: "Famous in music (Céline Dion, Drake, The Weeknd), film (James Cameron, Denis Villeneuve) and literature (Margaret Atwood, Alice Munro)."
    },
    {
      title: "Sports",
      content: "Ice hockey is almost a national symbol, but lacrosse and curling are also very popular."
    },
    {
      title: "Typical Dishes",
      content: "Poutine (fries with gravy and cheese), Tourtière (meat pie) and maple syrup are iconic Canadian foods."
    },
    {
      title: "Geographical Regions",
      content: "• Western Mountains: Rocky Mountains and other ranges in British Columbia and Yukon.\n• Prairies: Fertile plains in Alberta, Saskatchewan, and Manitoba.\n• Northern Lands: Arctic territories with tundra and permanent ice."
    },
    {
      title: "Natural Wonders",
      content: "• Niagara Falls (Ontario): spectacular waterfalls on the US border.\n• Banff National Park (Alberta): rocky mountains, turquoise lakes like Lake Louise, and wildlife.\n• Jasper National Park (Alberta): glaciers, rivers, and scenic routes like Icefields Parkway.\n• Bay of Fundy (between New Brunswick and Nova Scotia): home to the highest tides in the world.\n• Northern Lights in Yukon and Northwest Territories: one of the best places to see them."
    },
    {
      title: "Cities & Urban Centers",
      content: "Toronto: the largest city, with the CN Tower and multicultural neighborhoods."
    }
  ];

  const placesData = [
    {
      title: "Niagara Falls",
      img: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/0d/a3/8b/5f/niagara-falls.jpg?w=900&h=-1&s=1"
    },
    {
      title: "Banff National Park",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRf3JoubbsPdIiIyv1aV8ehDF9K0kzG0xR1Tw&s"
    },
    {
      title: "Jasper National Park",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQLNqcp3oRs-tmjDWGjzIpvGT2Tf44apybudg&s"
    },
    {
      title: "Bay of Fundy",
      img: "https://www.bayoffundy.com/assets/walking-ocean-floor.jpg"
    },
    {
      title: "Northern Lights",
      img: "https://www.cnet.com/a/img/resize/cb2b9a619e78650b6a298f10bf144316b88e6ad4/hub/2025/03/04/b51f63e4-a1fb-4355-abbc-07ffcd78ed44/aurora-borealis-gettyimages-1835012818.jpg?auto=webp&fit=crop&height=675&width=1200"
    },
    {
      title: "Toronto",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT2zjjfaGH1sy0yNozYmLIMBp3s7F-P1clhvA&s"
    }
  ];

  const changeSide = (name) => {
    setSide(name);
    console.log(name);
  };

  return (
    <>
      <header>
        <div className="logo-nav">
          <img
            src="https://paisesdelmundo.org/wp-content/uploads/2019/10/imagenes-de-bandera-de-canada.jpg"
            alt="Bandera de Canadá"
          />
          <h1>Canada</h1>
          <h2
            className={side === 'intro' ? 'active' : ''}
            onClick={() => changeSide('intro')}
          >
            Intro
          </h2>
          <h2
            className={side === 'facts' ? 'active' : ''}
            onClick={() => changeSide('facts')}
          >
            Facts
          </h2>
          <h2
            className={side === 'places' ? 'active' : ''}
            onClick={() => changeSide('places')}
          >
            Places
          </h2>

        </div>
        <button>Culture</button>
      </header>

      {side === 'intro' ? (
        <main className="principal">
          <h1>Welcome to Canada</h1>
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSkZuweDRuNEBeoh5AYOkKqZMnOgDwF7INrSQ&s"
            alt="Paisaje de Canadá"
          />
        </main>
      ) : side === 'facts' ? (
        <main className="principal">
          <div className="facts-container">
            {factsData.map((fact, index) => (
              <div key={index} className="fact-card">
                <h2>{fact.title}</h2>
                {fact.content.split("\n").map((line, i) => (
                  <p key={i}>{line}</p>
                ))}
              </div>
            ))}
          </div>
        </main>
      ) : (
        <main className="principal">
          <div className="places-container">
            {placesData.map((place, index) => (
              <div key={index} className="place-card">
                <img src={place.img} alt={place.title} />
                <h3>{place.title}</h3>
              </div>
            ))}

          </div>
        </main>
      )}
    </>
  );
}

export default App;
