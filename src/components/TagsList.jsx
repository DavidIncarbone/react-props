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
// const singleTag = myTags.map((tag) => filteredTags.indexOf(tag) === -1 && filteredTags.push(tag))


function TagsList() {

    return (
        <div className="border w-25">
            <h2>Lista dei Tags</h2>
            {filteredTags.map((tag) => {

                return <li className="list-unstyled">{tag}</li>
            })}

        </div>
    )


}








export default TagsList

// if (array.indexOf(value) === -1) array.push(value);