import posts from "../data/posts"

const myPosts = [...posts]
const filteredTags = []
const myTags = myPosts.map((post) => post.tags)
console.log(myTags)
for (let i = 0; i < myTags.length; i++) {

    for (let j = 0; j < myTags[i].length; j++) {
        filteredTags.indexOf(myTags[i][j]) === -1 && filteredTags.push(myTags[i][j])
    }
}
console.log(filteredTags)

function TagsList() {

    return (
        <div className="w-25">
            <h2 className="ps-1">Lista dei Tags</h2>
            <ul>
                {filteredTags.map((tag) => {
                    return <li>{tag}</li>
                })}
            </ul>
        </div>
    )
}
export default TagsList

// if (array.indexOf(value) === -1) array.push(value);