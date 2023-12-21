import './App.css'
import { TwitterFollowCard } from './TwitterFollowCard.jsx'

export function App(){
    return(
        <section className='App'>
        <TwitterFollowCard isFollowing = {true} userName="jos.isa.192@gmail.com" name="Josue Isaac Cano Guzman"/>
        <TwitterFollowCard isFollowing = {false} userName="otak@gmail.com" name="Ignacio Obregon Ruiz"/>
        <TwitterFollowCard isFollowing = {false} userName="19030212@itcelaya.edu.mx" name="Mario Bros"/>
        </section>     
    )
}