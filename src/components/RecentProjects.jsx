import { Link } from "react-router-dom";
import { projects } from "../data/projects";


export default function RecentProjects(){


const featuredProjects =
projects.filter(
(project)=>project.featured
);



return (

<section className="bg-black text-white py-20 px-6">


<div className="max-w-6xl mx-auto">


<h2 className="text-4xl font-bold text-center">

Recent Projects

</h2>


<p className="text-gray-400 text-center mt-3">

Built by MicroWebs

</p>




<div className="grid md:grid-cols-2 gap-8 mt-12">


{
featuredProjects.map((project)=>(


<div

key={project.id}

className="bg-gray-900 rounded-2xl overflow-hidden shadow-xl"

>



<img

src={project.image}

alt={project.title}

className="w-full h-64 object-cover"

/>



<div className="p-6">


<div className="flex justify-between items-center">


<h3 className="text-2xl font-bold">

{project.title}

</h3>


{
project.featured &&

<span className="text-yellow-400">

★★★★★

</span>

}


</div>



<p className="text-gray-400 mt-2">

{project.category}

</p>





<div className="flex gap-3 mt-6">


<a

href={project.liveUrl}

target="_blank"

className="bg-blue-600 px-5 py-2 rounded-lg"

>

Live Website

</a>



<Link

to={`/projects/${project.id}`}

className="border px-5 py-2 rounded-lg"

>

Case Study

</Link>


</div>



</div>


</div>


))


}



{/* Future Projects */}


<div className="bg-gray-900 rounded-2xl flex items-center justify-center p-10">


<div className="text-center">


<h3 className="text-2xl font-bold">

More Projects Coming Soon

</h3>


<p className="text-gray-400 mt-3">

Your business could be here.

</p>


</div>


</div>



</div>



</div>



</section>

)

}