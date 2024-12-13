import posts from "../data/posts"
import Card from "./Card"

function Main() {

    return (
        <main>
            <ul>
                {posts.map(post => (
                    post.published === true &&
                    <Card title={post.title}
                        description={post.content}
                        image={post.image}
                        key={post.id}
                        tags={post.tags.join(" ")} />
                ))}
            </ul>
        </main>
    )
}
export default Main