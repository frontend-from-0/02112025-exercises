async function getFoods(query) {
  try {
    const url = `${CONFIG.BASE_URL}${CONFIG.ENDPOINTS.search}?query=${query}&api_key=${CONFIG.API_KEY}`;
    const response = await fetch(url);
    if (!response.ok) {
      if (response.status === 429) {
        throw new Error('Rate limiti aşıldı - biraz bekle');
      }
      throw new Error(`HTTP error: ${response.status}`);
    }
    const data = await response.json();
    return data.foods;
  } catch (error) {
    console.error('Bir hata oluştu:', error);
    return [];
  }
}
// API KEY AL!!
