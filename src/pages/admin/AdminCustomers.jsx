import { useState } from "react";
import useCustomers from "../../hooks/useCustomers";
import { deleteCustomer } from "../../services/admin/customerService";


export default function AdminCustomers() {

  const customers = useCustomers();

  const [search, setSearch] = useState("");


  const filteredCustomers = customers.filter((customer) =>
    customer.name?.toLowerCase()
    .includes(search.toLowerCase()) ||

    customer.email?.toLowerCase()
    .includes(search.toLowerCase())
  );


  async function removeCustomer(id) {

    const confirmDelete =
      window.confirm(
        "Delete this customer?"
      );

    if(confirmDelete){
      await deleteCustomer(id);
    }

  }


  return (

    <div className="text-white">

      <h1 className="text-3xl font-bold mb-6">
        Customers Management
      </h1>


      <input
        className="bg-gray-800 p-3 rounded w-full mb-6"
        placeholder="Search customer..."
        value={search}
        onChange={(e)=>setSearch(e.target.value)}
      />


      <div className="grid gap-5">

        {
          filteredCustomers.map((customer)=>(

            <div
              key={customer.id}
              className="bg-gray-900 p-5 rounded-xl flex justify-between"
            >

              <div>

                <h2 className="text-xl font-bold">
                  {customer.name || "No Name"}
                </h2>


                <p>
                  {customer.email}
                </p>


                <p>
                  {customer.phone || "No phone"}
                </p>

              </div>


              <button

                onClick={() =>
                  removeCustomer(customer.id)
                }

                className="bg-red-600 px-4 py-2 rounded"
              >
                Delete
              </button>


            </div>

          ))
        }


      </div>


    </div>

  );

}