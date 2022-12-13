import { useEffect, useState } from "react";
import ArtList from "./ArtList";
import NewArtForm from "./NewArtForm";
import Search from "./Search";


function ArtsPage() {
  const [searchTerm, setSearchTerm] = useState("");
  
  const demoData = [
    {
      "id": 1,
      "name": "John Snows Rock",
      "image": "https://images.unsplash.com/flagged/photo-1572392640988-ba48d1a74457?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8YXJ0fGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
      "price": "434",
      "description": "this is the description"
    }
  ]
  
  const [arts, setArts] = useState(demoData);
  //const baseUrl = "https://artisty-production.up.railway.app/admins"
  const baseUrl = "https://art-data.glitch.me/data"
  
  useEffect(() => {
    fetch(baseUrl)
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

