import { useParams, Link } from "react-router-dom";
import { projects } from "../data/projects";


export default function ProjectDetails(){


const {id}=useParams();


const project =
projects.find(
(item)=>item.id===id
);



if(!project){

return(

<div className="min-h-screen bg-black text-white flex items-center justify-center">

<h1 className="text-4xl">
Project Not Found
</h1>

</div>

)

}




return (

<div className="bg-black text-white min-h-screen">



{/* HERO */}


<section className="py-20 px-6 text-center">


<h1 className="text-6xl font-bold">

{project.title}

</h1>


<p className="text-gray-400 text-xl mt-4">

{project.category}

</p>



<div className="mt-8 flex justify-center gap-4">


<a

href={project.liveUrl}

target="_blank"

className="bg-blue-600 px-8 py-3 rounded-xl"

>

Visit Website

</a>



<Link

to="/dashboard/new-order"

className="border border-white px-8 py-3 rounded-xl"

>

Order Similar Website

</Link>


</div>


</section>






{/* BROWSER MOCKUP */}


<section className="px-6">


<div className="max-w-6xl mx-auto rounded-2xl overflow-hidden bg-gray-900">


<div className="bg-gray-800 p-4 flex items-center gap-2">


<span>●</span>

<span>●</span>

<span>●</span>


<p className="ml-4 text-gray-300">

dinepro-restaurant.netlify.app

</p>


</div>



<img

src={project.image}

alt={project.title}

className="w-full"

/>



</div>


</section>






{/* PROJECT INFO */}


<section className="grid md:grid-cols-3 gap-8 p-10 max-w-6xl mx-auto">


<div>

<h3 className="text-gray-400">
Industry
</h3>

<p className="text-xl">
{project.industry}
</p>

</div>



<div>

<h3 className="text-gray-400">
Timeline
</h3>

<p className="text-xl">
{project.timeline}
</p>

</div>



<div>

<h3 className="text-gray-400">
Rating
</h3>

<p className="text-xl">
{project.rating}
</p>

</div>



</section>






{/* TECHNOLOGY */}


<section className="p-10 max-w-6xl mx-auto">


<h2 className="text-3xl font-bold">

Technology Used

</h2>


<div className="flex flex-wrap gap-3 mt-5">


{
project.technology.map((item)=>(

<span

key={item}

className="bg-gray-800 px-5 py-2 rounded-full"

>

{item}

</span>

))

}


</div>


</section>








{/* FEATURES */}


<section className="p-10 max-w-6xl mx-auto">


<h2 className="text-3xl font-bold">

Features

</h2>


<div className="mt-6 space-y-3">


{
project.features.map((item)=>(

<p key={item}>

✓ {item}

</p>

))

}


</div>


</section>






{/* SCREENSHOTS */}


<section className="p-10 max-w-6xl mx-auto">


<h2 className="text-3xl font-bold mb-8">

More Screenshots

</h2>



<div className="grid md:grid-cols-3 gap-6">


{
project.screenshots.map((shot)=>(


<div

key={shot.title}

className="bg-gray-900 rounded-xl overflow-hidden"

>


<img

src={shot.image}

alt={shot.title}

className="w-full"

/>


<p className="p-4">

{shot.title}

</p>


</div>


))

}



</div>


</section>





</div>


)

}