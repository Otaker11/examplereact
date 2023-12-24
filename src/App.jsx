import './App.css'
import { TwitterFollowCard } from './TwitterFollowCard.jsx'

const users = [
  {
    userName: 'Otaker11',
    name: 'Josue Cano',
    isFollowing: true
  },
  {
    userName: 'MarcoSare',
    name: 'Marco Ramirez',
    isFollowing: false
  },
  {
    userName: 'DavidPortador',
    name: 'David Garcia',
    isFollowing: true
  }
]

export function App () {
  return (
    <section className='App'>
      {
        users.map(({ userName, name, isFollowing }) => (
          <TwitterFollowCard
            key={userName}
            userName={userName}
            initialIsFollowing={isFollowing}
          >
            {name}
          </TwitterFollowCard>
        ))
      }
    </section>
  )
}