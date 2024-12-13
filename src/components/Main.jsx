import posts from "../data/posts"
import Card from "./Card"
import tagsStyle from "../style/Tags.module.css"
import TagsList from "./TagsList"

function Main() {

    return (
        <main className="d-flex">

            <TagsList />

            <ul className="d-flex flex-wrap gap-5">
                {posts.map(post => (
                    post.published === true &&
                    <Card title={post.title}
                        description={post.content}
                        image={post.image}
                        key={post.id}
                        tags={post.tags}
                    />
                ))}
            </ul>
        </main>
    )
}
export default Main