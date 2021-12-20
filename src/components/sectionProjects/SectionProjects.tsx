import "./sectionprojects.css"
import pjt1 from "../../images/pj1.jpg"

export const SectionProjects = () => {
    return(
    <section className="container">
        <h2 className="mb-3">Projetos</h2>
        <div className="galleryProject">
            <div className="projectTwo">
                <div className="projectElement" style={{backgroundImage: `url(${pjt1})`}}>
                    <div className="hoverDetails">
                        <div className="hoverContent">
                            <h3>Some Title</h3>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere porro quo culpa, placeat cumque a temporibus laborum perferendis, quis repellat minima ipsa maiores accusamus unde omnis quos error. Qui, suscipit.</p>
                        </div>
                    </div>
                </div>
                <div className="projectElement" style={{backgroundImage: `url(${pjt1})`}}>
                    <div className="hoverDetails toLeft">
                        <div className="hoverContent">
                            <h3>Some Title</h3>
                            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Provident maxime sequi id, nam perferendis veniam commodi temporibus culpa architecto minus voluptatibus necessitatibus saepe tempora. Id soluta dolorem atque obcaecati velit.</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="projectThree mt-4">
                <div className="projectElement" style={{backgroundImage: `url(${pjt1})`}}>
                    <div className="hoverDetails">
                        <div className="hoverContent">
                            <h3>Some Title</h3>
                            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aliquid officiis minima molestiae non explicabo eos dolores iusto, cumque exercitationem harum nisi quod accusantium, amet doloremque et sapiente. Mollitia, ad laboriosam.</p>
                        </div>
                    </div>
                </div>
                <div className="projectElement" style={{backgroundImage: `url(${pjt1})`}}>
                    <div className="hoverDetails">
                        <div className="hoverContent">
                            <h3>Some Title</h3>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusantium vero in veritatis beatae quas dicta, ipsum, atque aliquam voluptas cumque fugiat suscipit, praesentium tempore enim libero! Aut amet molestiae at!</p>
                        </div>
                    </div>
                </div>
                <div className="projectElement" style={{backgroundImage: `url(${pjt1})`}}>
                    <div className="hoverDetails">
                        <div className="hoverContent">
                            <h3>Some Title</h3>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni quibusdam minima doloremque qui veritatis amet architecto debitis a! Ipsam id fugiat provident molestias voluptate aperiam enim distinctio quo ea ducimus.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    );
}