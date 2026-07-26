import { Link } from "react-router-dom";
import { projects } from "../data/projects";


export default function Projects(){

return (

<div className="min-h-screen bg-black text-white px-6 py-20">


<h1 className="text-5xl font-bold text-center">
MicroWebs Projects
</h1>


<p className="text-gray-400 text-center mt-4">
Websites built by MicroWebs
</p>



<div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8 mt-12">


{
projects.map((project)=>(


<div
key={project.id}
className="bg-gray-900 rounded-2xl overflow-hidden"
>


<img
src={project.image}
alt={project.title}
className="w-full h-56 object-cover"
/>



<div className="p-6">


<h2 className="text-2xl font-bold">
{project.title}
</h2>


<p className="text-gray-400 mt-2">
{project.category}
</p>



<Link

to={`/projects/${project.id}`}

className="inline-block mt-5 bg-blue-600 px-5 py-2 rounded-lg"

>

View Case Study

</Link>


</div>


</div>


))


}



</div>



</div>

);

}