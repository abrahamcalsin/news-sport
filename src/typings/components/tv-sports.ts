interface TvSportsProps {
  properties: {
    Url: { url: string }
    TvCover: { files: { file: { url: string } }[] }
    Name: { title: { plain_text: string }[] }
  }
  id: string
}

export type { TvSportsProps }
