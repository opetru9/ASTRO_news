const apiKey = '6a5db6881b2541e18c3dee2730f7130f';
const apiUrl = `https://newsapi.org/v2/everything?q=technology&apiKey=${apiKey}`;


// GET news
async function fetchSportsNews() {
  const storedArticles  = localStorage.getItem('storedArticles');

  if (storedArticles){
    return JSON.parse(storedArticles)
  } 

  try {
    const response = await fetch(apiUrl);
    const data = await response.json();

    if (data.status === 'ok') {
      
      localStorage.setItem("storedArticles", JSON.stringify(data.articles));
      setTimeout(() => {
        localStorage.removeItem("storedArticles");
      }, 24 * 60 * 60 * 1000);
        
      return data.articles; 

    } else {
      console.error('Error:', data.message);
      return [];
    }
  }
  catch (error) {
    console.error('Error:', error);
    return [];
  }
    
  
}

export default fetchSportsNews;




