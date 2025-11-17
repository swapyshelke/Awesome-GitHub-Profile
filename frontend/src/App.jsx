import { useEffect, useState } from "react";
import "./App.css";
import Repos from "./components/Repos";

function App() {
  const [data, setData] = useState(null);
  const [repos, setRepos] = useState(null);
  const [isLoading, setIsLoading] = useState(true);


  useEffect(() => {
    fetch("https://api.github.com/users/swapyshelke")
      .then((res) => res.json())
      .then((info) => {
        setData(info);
        setIsLoading(false);
      })

      .catch((error) => {
        console.error("Error fetching data:", error);
        setIsLoading(false);
      });
  }, []);

  //  useEffect(() => {
  //    fetch("https://api.github.com/repos/swapyshelke/react")
  //      .then((res) => res.json())
  //      .then((d) => {
  //        setRepos(d);
  //        setIsLoading(false);
  //      })

  //      .catch((error) => {
  //        console.error("Error fetching data:", error);
  //       //  setRepos(false);
  //      });
  //  }, []);

  if (isLoading) {
    return <div>Loading profile data...</div>;
  }

  // Check if data is null before accessing properties
  if (!data) {
    return <div>No profile data found.</div>;
  } 

  console.log(data);
  
  

  
  const avatar = data.avatar_url;
  const creatingTime = data.created_at;

  return (
    <>
    
      <h1>Awesome Github Viewer</h1>

      {
        Object.entries(data).map(([key, value]) => {
          <div key={key}>
            <strong>{key} : </strong>
            
            {
              key === "avatar_url" ? (
                <img src={value} alt="avatar" width={50}/>
              ) : (
                  value?.toString()
              )
            }
          </div>
        })
      }

      {/* <h1>{data.name || "GitHub User"}</h1>
      <img src={avatar} alt="User Avatar" width={100} />
      <p> {new Date(creatingTime).toLocaleDateString()}</p>
      <a href={data.html_url}>🗃️ : GitHub</a> */}

      {/* <Repos repos={repos} /> */}
    </>
  );
}

export default App;
