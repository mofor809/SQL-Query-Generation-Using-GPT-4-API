import styles from './index.module.css'
import sqlLogo from './assets/sql-logo.png'

import { useState } from 'react'

function App() {
  const [queryDescription, setQueryDescription] = useState("")
  const [sqlQuery, setSqlQuery] = useState("");

  const onSubmit = async (e) => {
    e.preventDefault();
    
    
    const generatedQuery = await generateQuery();
    setSqlQuery(generatedQuery)
    console.log("returned from server: ", generatedQuery);
  }

  const generateQuery = async () => {
    const response = await fetch("http://localhost:3005/generate", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ queryDescription: queryDescription})
    });

    const data = await response.json()
    return data.response.trim();
  }
    
  return (
    <main className={styles.main}>
      <img src={sqlLogo} alt="SQL Logo" className={styles.icon}/>
      <h3>Generate SQL Queries Using GPT-4</h3>

      <form onSubmit={onSubmit}>
        <input 
          type="text"
          name="query-description"
          placeholder="Describe your query"
          onChange={(e) => setQueryDescription(e.target.value)}
        />
        <input type ="submit" value="Generate Query" />
      </form>
      {sqlQuery && (<h4>{sqlQuery}</h4>
      )}
    </main>
  );
}

export default App
