export interface PinnedRepo {
  name: string
  url: string
  cardImg: string
}

export interface Website {
  name: string
  description: string
  url: string
  icon?: string
}

export interface Sponsor {
  name: string
  url: string
}

export interface ProfileData {
  avatar: string
  name: string
  location: string
  githubUrl: string
  githubUsername: string
  bio?: string
}

export interface TechBadge {
  label: string
  img: string
  url: string
}

export interface TechCategory {
  title: string
  badges: TechBadge[]
}
