import { useState } from "react";


export default function ProjectDetails({ 
  setStep, 
  setDetails 
}) {


  const [details, setLocalDetails] = useState({

    businessName: "",
    websiteName: "",
    description: "",
    colors: "",
    inspiration: "",
    deadline: "",
    notes: "",

  });



  const handleChange = (e) => {

    setLocalDetails({

      ...details,

      [e.target.name]: e.target.value,

    });

  };



  return (

    <div className="text-white">


      <h1 className="text-4xl font-bold mb-2">
        Project Details
      </h1>


      <p className="text-gray-400 mb-8">
        Tell us about the website you want us to create.
      </p>



      <div className="bg-neutral-900 border border-neutral-800 rounded-2xl p-8 space-y-5">



        <input
          name="businessName"
          placeholder="Business Name"
          value={details.businessName}
          onChange={handleChange}
          className="w-full bg-neutral-800 p-4 rounded-xl"
        />



        <input
          name="websiteName"
          placeholder="Website Name"
          value={details.websiteName}
          onChange={handleChange}
          className="w-full bg-neutral-800 p-4 rounded-xl"
        />



        <textarea
          name="description"
          rows="5"
          placeholder="Describe your business and what you need..."
          value={details.description}
          onChange={handleChange}
          className="w-full bg-neutral-800 p-4 rounded-xl"
        />



        <input
          name="colors"
          placeholder="Preferred Colors (Example: Black and Gold)"
          value={details.colors}
          onChange={handleChange}
          className="w-full bg-neutral-800 p-4 rounded-xl"
        />



        <input
          name="inspiration"
          placeholder="Website examples you like (optional)"
          value={details.inspiration}
          onChange={handleChange}
          className="w-full bg-neutral-800 p-4 rounded-xl"
        />



        <select
          name="deadline"
          value={details.deadline}
          onChange={handleChange}
          className="w-full bg-neutral-800 p-4 rounded-xl"
        >

          <option value="">
            Preferred Timeline
          </option>

          <option>
            1 Week
          </option>

          <option>
            2 Weeks
          </option>

          <option>
            1 Month
          </option>

          <option>
            Flexible
          </option>

        </select>



        <textarea
          name="notes"
          rows="4"
          placeholder="Extra notes or requirements"
          value={details.notes}
          onChange={handleChange}
          className="w-full bg-neutral-800 p-4 rounded-xl"
        />



        <div>

          <label className="block mb-3 font-bold">
            Upload Files
          </label>


          <input
            type="file"
            multiple
            className="w-full bg-neutral-800 p-3 rounded-xl"
          />

        </div>




        <div className="flex gap-4 pt-5">



          <button
            onClick={() => setStep(3)}
            className="bg-neutral-700 px-8 py-4 rounded-xl"
          >

            Back

          </button>





          <button
            onClick={() => {

              setDetails(details);

              setStep(5);

            }}
            className="bg-yellow-400 text-black px-8 py-4 rounded-xl font-bold"
          >

            Review Order

          </button>



        </div>



      </div>



    </div>

  );

}