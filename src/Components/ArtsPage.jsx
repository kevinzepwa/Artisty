import { useEffect, useState } from "react";
import ArtList from "./ArtList";
import NewArtForm from "./NewArtForm";
import Search from "./Search";


function ArtsPage() {
  const [arts, setArts] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  const demoData = [
    {
      "id": 1,
      "name": "John Snows Rock",
      "image": "therock.svg",
      "price": "434"
    }
  ]

  useEffect(() => {
    //fetch("http://localhost:3000")
    fetch("/arts")
      .then((r) => r.json())
      .then((artsArray) => {
        setArts(artsArray);
      });
  }, []);

  function handleAddArt(newArt) {
    const updatedArtsArray = [...arts, newArt];
    setArts(updatedArtsArray);
  }

  const displayedArts = arts.filter((art) => {
    return art.name.toLowerCase().includes(searchTerm.toLowerCase());
  });

  return (
    <main>
      <NewArtForm onAddArt={handleAddArt} />
      <Search searchTerm={searchTerm} onSearchChange={setSearchTerm} />
      <ArtList arts={displayedArts} />
    </main>
  );
}

export default ArtsPage;
