import './Post.css'
export default function Post({post}){
    // console.log(post)
    //Distructuring... eta na korle return er moddhe comment kora code kaz korbe. distructuring kora best practice
    const {title, userId, id, body} = post

    return (
        <div className="post">
        {/* Distructuting na korle eveabe return korte hobe. */}
            {/* <h5>Title: {post.title}</h5>
            <p><small>userId: {post.userId}</small></p>
            <p><small>postId: {post.id}</small></p>
            <p><small>Body: {post.body}</small></p> */}

            <h5>Title: {title}</h5>
            <p><small>userId: {userId}</small></p>
            <p><small>postId: {id}</small></p>
            <p><small>Body: {body}</small></p>

        </div>
    )
}