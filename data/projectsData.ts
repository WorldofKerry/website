interface Project {
  title: string
  description: string
  href?: string
  imgSrc?: string
}

const projectsData: Project[] = [
  {
    title: 'Cooking Speedrun',
    description: `80% of the taste, for 50% of the time.`,
    imgSrc: '/static/images/cookingspeedrun.png',
    href: 'https://www.instagram.com/cookingspeedrun/',
  },
  {
    title: 'Interkonnection',
    description: `Network of my notes from my recent learnings.`,
    imgSrc: '/static/images/obsidian.png',
    href: 'https://interkonnection.vercel.app/',
  },
  {
    title: 'Workout Calculator',
    description: `Efficient calculator for weight lifting`,
    imgSrc: '',
    href: '/workout',
  },
]

export default projectsData
