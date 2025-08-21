import { useState } from 'react';
import './App.css';

function App() {
  const [side, setSide] = useState("intro");
  const [selectedPlace, setSelectedPlace] = useState(null);

  const factsData = [
    { title: "Languages", content: "Canada is officially bilingual: English and French." },
    { title: "Immigration", content: "Canada is one of the most welcoming countries for immigrants." },
    { title: "Arts & Culture", content: "Famous in music (Céline Dion, Drake, The Weeknd), film (James Cameron, Denis Villeneuve) and literature (Margaret Atwood, Alice Munro)." },
    { title: "Sports", content: "Ice hockey is almost a national symbol, but lacrosse and curling are also very popular." },
    { title: "Typical Dishes", content: "Poutine (fries with gravy and cheese), Tourtière (meat pie) and maple syrup are iconic Canadian foods." },
    { title: "Geographical Regions", content: "• Western Mountains: Rocky Mountains and other ranges in British Columbia and Yukon.\n• Prairies: Fertile plains in Alberta, Saskatchewan, and Manitoba.\n• Northern Lands: Arctic territories with tundra and permanent ice." },
    { title: "Natural Wonders", content: "• Niagara Falls (Ontario): spectacular waterfalls on the US border.\n• Banff National Park (Alberta): rocky mountains, turquoise lakes like Lake Louise, and wildlife.\n• Jasper National Park (Alberta): glaciers, rivers, and scenic routes like Icefields Parkway.\n• Bay of Fundy (between New Brunswick and Nova Scotia): home to the highest tides in the world.\n• Northern Lights in Yukon and Northwest Territories: one of the best places to see them." },
    { title: "Cities & Urban Centers", content: "Toronto: the largest city, with the CN Tower and multicultural neighborhoods." }
  ];

  const placesData = [
    {
      title: "Niagara Falls",
      img: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/0d/a3/8b/5f/niagara-falls.jpg?w=900&h=-1&s=1",
      description: "Niagara Falls is one of the most famous natural wonders in the world, located on the border between Canada and the United States. It consists of three waterfalls: Horseshoe Falls (the largest, on the Canadian side), American Falls, and Bridal Veil Falls. The falls are not only breathtaking but also a major source of hydroelectric power.",
      images: [
        "https://www.niagarafallstourism.com/site/assets/files/1/niagara-falls-night.jpg",
        "https://www.niagarafallstourism.com/site/assets/files/1/niagara-falls-boat.jpg",
        "https://www.niagarafallstourism.com/site/assets/files/1/niagara-falls-winter.jpg"
      ]
    },
    {
      title: "Banff National Park",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRf3JoubbsPdIiIyv1aV8ehDF9K0kzG0xR1Tw&s",
      description: "Banff National Park, in Alberta, is the first national park of Canada and part of the Rocky Mountains. It is famous for turquoise lakes like Lake Louise and Moraine Lake, impressive glaciers, and mountain scenery. It's a top destination for hiking, skiing, and spotting wildlife like bears, elk, and mountain goats.",
      images: [
        "https://www.banfflakelouise.com/sites/default/files/styles/hero_mobile/public/2022-04/Lake%20Louise%20Summer.jpg",
        "https://www.banfflakelouise.com/sites/default/files/inline-images/Moraine%20Lake%20Sunrise.jpg",
        "https://www.banfflakelouise.com/sites/default/files/inline-images/Banff%20Ski%20Resort.jpg"
      ]
    },
    {
      title: "Jasper National Park",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQLNqcp3oRs-tmjDWGjzIpvGT2Tf44apybudg&s",
      description: "Jasper National Park is the largest park in the Canadian Rockies, known for the Icefields Parkway, glaciers, rivers, waterfalls, and dark-sky preserves ideal for stargazing. It is less crowded than Banff and offers a more untouched wilderness experience.",
      images: [
        "https://www.jasper.travel/media/images/IcefieldsParkway.width-1600.jpg",
        "https://www.jasper.travel/media/images/AthabascaFalls.width-1600.jpg",
        "https://www.jasper.travel/media/images/MaligneLake.width-1600.jpg"
      ]
    },
    {
      title: "Bay of Fundy",
      img: "https://www.bayoffundy.com/assets/walking-ocean-floor.jpg",
      description: "The Bay of Fundy, between New Brunswick and Nova Scotia, is known for having the highest tides in the world. Visitors can literally walk on the ocean floor during low tide and see dramatic sea stacks and cliffs.",
      images: [
        "https://www.bayoffundy.com/assets/fundy-tide.jpg",
        "https://www.bayoffundy.com/assets/hopewell-rocks.jpg",
        "https://www.bayoffundy.com/assets/whales.jpg"
      ]
    },
    {
      title: "Northern Lights",
      img: "https://www.cnet.com/a/img/resize/cb2b9a619e78650b6a298f10bf144316b88e6ad4/hub/2025/03/04/b51f63e4-a1fb-4355-abbc-07ffcd78ed44/aurora-borealis-gettyimages-1835012818.jpg?auto=webp&fit=crop&height=675&width=1200",
      description: "The Aurora Borealis (Northern Lights) can be seen in Canada’s northern regions like Yukon, Nunavut, and Northwest Territories. The lights dance across the sky in shades of green, purple, and red, creating one of the most magical natural spectacles on Earth.",
      images: [
        "https://yukon.ca/sites/default/files/styles/hero/public/2021-02/aurora.jpg",
        "https://www.tripsavvy.com/thmb/aurora-borealis-in-canada.jpg",
        "https://northernlightscentre.ca/images/aurora.jpg"
      ]
    },
    {
      title: "Toronto",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT2zjjfaGH1sy0yNozYmLIMBp3s7F-P1clhvA&s",
      description: "Toronto is Canada’s largest city, located in Ontario. It is famous for the CN Tower, its multicultural neighborhoods, art, music, food, and professional sports teams like the Toronto Raptors and Maple Leafs.",
      images: [
        "https://media.cntraveler.com/photos/toronto-skyline.jpg",
        "https://www.destinationtoronto.com/imager/sd-to-cn-tower_9e33f2dd3d.jpg",
        "https://www.destinationtoronto.com/imager/toronto-night.jpg"
      ]
    }
  ];

  const changeSide = (name) => {
    setSide(name);
    setSelectedPlace(null);
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
          <h2 className={side === 'intro' ? 'active' : ''} onClick={() => changeSide('intro')}>Intro</h2>
          <h2 className={side === 'facts' ? 'active' : ''} onClick={() => changeSide('facts')}>Facts</h2>
          <h2 className={side === 'places' ? 'active' : ''} onClick={() => changeSide('places')}>Places</h2>
        </div>
      </header>

      {/* Intro */}
      {side === 'intro' && !selectedPlace && (
        <main className="principal">
          <h1>Welcome to Canada</h1>
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSkZuweDRuNEBeoh5AYOkKqZMnOgDwF7INrSQ&s" alt="Paisaje de Canadá" />
        </main>
      )}

      {/* Facts */}
      {side === 'facts' && !selectedPlace && (
        <main className="principal">
          <div className="facts-container">
            {factsData.map((fact, index) => (
              <div key={index} className="fact-card">
                <h2>{fact.title}</h2>
                {fact.content.split("\n").map((line, i) => <p key={i}>{line}</p>)}
              </div>
            ))}
          </div>
        </main>
      )}

      {/* Places list */}
      {side === 'places' && !selectedPlace && (
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

      {/* Place detail */}
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
