const Title = ({ title,caption }: {
    title: string 
    caption: string
})=>{
    return (
            <div className="captionTitle">
                <strong>{ caption }</strong>
                <h1 className="title-fnt">{ title.toUpperCase() }</h1>
                <div></div>
            </div>
    )
}
export default Title;