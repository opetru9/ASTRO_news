const apiKey = '6a5db6881b2541e18c3dee2730f7130f';
const apiUrl = `https://newsapi.org/v2/top-headlines?category=sports&country=us&apiKey=${apiKey}`;


// GET news
async function fetchSportsNews() {
  try {
    const response = await fetch(apiUrl);
    const data = await response.json();

    if (data.status === 'ok') {
      return data.articles; 
    } else {
      console.error('Error:', data.message);
      return [];
    }
  } catch (error) {
    console.error('Error:', error);
    return [];
  }
// const data = ['data1', 'data2', 'data3']

// return data
}

export default fetchSportsNews;




