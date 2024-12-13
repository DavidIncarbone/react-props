import posts from "../data/posts"
import Card from "./Card"

function Main() {

    return (
        <main>
            <ul>
                {posts.map(post => (
                    <Card title={post.titolo} description={post.descrizione} image={post.immagine} key={post.id} />
                ))}
            </ul>
        </main>
    )
}
export default Main