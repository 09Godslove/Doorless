

export async function fetchCompanyLogo() {
  const url = 'https://api.nigerianbanklogos.xyz/?limit=10'
  const response = await fetch(url)

  if (!response.ok) {
    throw new Error("Can't display")
  }

  return response.json()
}
