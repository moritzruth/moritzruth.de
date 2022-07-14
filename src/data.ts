interface Photo {
  file: string
  title: string
  altText: string
  date: string
  description: string
}

export const photos: Photo[] = [
  {
    file: "Late_afternoon.webp",
    title: "Late afternoon",
    altText: "A red house in London",
    date: "2019",
    description: "Taken in London during a sunny afternoon.\nSeems to be 65 Curzon St."
  },
  {
    file: "Martyrdom.webp",
    title: "Martyrdom",
    altText: "A church on a vineyard",
    date: "2019",
    description: "The Sankt-Laurentius church right by the Mosel river in Bremm (Germany)."
  },
  {
    file: "Heat.webp",
    title: "Heat",
    altText: "An orange passageway with windows on all walls",
    date: "2022",
    description: "A passageway in Venice."
  }
]

const META_KEYWORDS = ["web", "dev", "development", "coding", "moritz", "ruth", "development", "design", "kotlin", "android", "photography", "matrix"]

export const getKeywordsWithBase = (keywords: string[]) => [...new Set([...META_KEYWORDS, ...keywords])]
export const getKeywordsTagWithBase = (keywords: string[]) => ({
  name: "keywords",
  content: getKeywordsWithBase(keywords).join(", ")
})
