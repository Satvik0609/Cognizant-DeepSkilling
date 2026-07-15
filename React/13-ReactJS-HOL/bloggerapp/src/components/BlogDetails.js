function BlogDetails() {

    const blogs = [

        {

            id:1,

            title:"React Learning",

            author:"Stephen Biz",

            description:"Welcome to learning React!"

        },

        {

            id:2,

            title:"Installation",

            author:"Schwedenier",

            description:"You can install React from npm."

        }

    ];

    return (

        <div className="section">

            <h1>Blog Details</h1>

            {

                blogs.map((blog)=>(

                    <div key={blog.id}>

                        <h3>{blog.title}</h3>

                        <b>{blog.author}</b>

                        <p>{blog.description}</p>

                    </div>

                ))

            }

        </div>

    );

}

export default BlogDetails;