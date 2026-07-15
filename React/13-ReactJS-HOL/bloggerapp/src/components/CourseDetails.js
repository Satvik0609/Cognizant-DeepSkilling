function CourseDetails() {

    const courses = [

        {

            id:1,

            cname:"Angular",

            date:"4/5/2021"

        },

        {

            id:2,

            cname:"React",

            date:"6/3/2021"

        }

    ];

    return (

        <div className="section">

            <h1>Course Details</h1>

            {

                courses.map((course)=>(

                    <div key={course.id}>

                        <h3>{course.cname}</h3>

                        <p>{course.date}</p>

                    </div>

                ))

            }

        </div>

    );

}

export default CourseDetails;