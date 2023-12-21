export function TwitterFollowCard({userName, name, isFollowing}){
    return(
        <article className='tw-followCard'>
            <header className='tw-followCard-header'>
                <img className='tw-followCard-avatar'
                alt="Avatar 1" 
                src="https://images.pexels.com/photos/771742/pexels-photo-771742.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" 
                width="120"
                height="150"/>
                <div className='tw-followCard-info'>
                <strong >{name}</strong>
                <span className='tw-followCard-infoUserName'>{userName}</span>
                </div>
            </header>
            <aside>
                <button className='tw-followCard-button'>
                Seguir
                </button>
                </aside>    
        </article>
    )
}