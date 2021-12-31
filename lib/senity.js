const SENITY_API_URL = process.env.SENITY_API_URL

const executeQuery = async (query) => {
  const url = query ? `${SENITY_API_URL}?query=${encodeURIComponent(query)}` : SENITY_API_URL

  return fetch(url).then((res) => res.json())
}

export { SENITY_API_URL, executeQuery }
