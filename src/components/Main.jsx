import posts from "../data/posts"
import Card from "./Card"

function Main() {

    return (
        <main>
            <ul>
                {posts.map(post => (
                    <Card title={post.title} description={post.content} image={post.image} key={post.id} />
                ))}
            </ul>
        </main>
    )
}
export default Main