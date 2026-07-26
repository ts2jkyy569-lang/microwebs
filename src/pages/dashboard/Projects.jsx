import { useEffect, useState } from "react";
import { collection, onSnapshot, query, where } from "firebase/firestore";

import { db } from "../../firebase/firebase";
import { useAuth } from "../../context/AuthContext";


export default function Projects() {

  const { user } = useAuth();

  const [projects, setProjects] = useState([]);



  useEffect(() => {

    if (!user) return;


    const q = query(
      collection(db, "orders"),
      where("userId", "==", user.uid)
    );


    const unsubscribe = onSnapshot(q, (snapshot) => {

      const data = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));

      setProjects(data);

    });


    return unsubscribe;


  }, [user]);



  return (

    <div className="text-white p-10">


      <h1 className="text-4xl font-bold">
        My Projects
      </h1>


      {projects.length === 0 ? (

        <p className="text-gray-400 mt-4">
          You don't have any projects yet.
        </p>

      ) : (


        <div className="grid md:grid-cols-2 gap-6 mt-8">


          {projects.map((project) => (

            <div
              key={project.id}
              className="bg-neutral-900 border border-neutral-800 rounded-xl p-6"
            >

              <h2 className="text-2xl font-bold">
                {project.websiteType}
              </h2>


              <p className="text-gray-400 mt-2">
                Package: {project.packagePlan}
              </p>


              <p className="mt-3 text-yellow-400">
                {project.currency === "NGN"
                  ? `₦${Number(project.price).toLocaleString()}`
                  : `$${Number(project.price).toLocaleString()}`}
              </p>


              <div className="mt-4">

                <span className="text-sm text-gray-400">
                  Status:
                </span>


                <span className="ml-2 text-green-400">
                  {project.projectStatus || "Pending"}
                </span>

              </div>


            </div>

          ))}


        </div>

      )}


    </div>

  );

}