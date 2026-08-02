"use client";

export default function CompanyForm() {
  return (
    <form className="space-y-4 rounded-lg bg-white p-6 shadow">
      <div>
        <div>
          <label className="mb-2 block font-bold text-gray-700">
            Company Name
          </label>
          <input
            type="text"
            className="w-full rounded-md border p-2 text-gray-700"
          />
        </div>
        <br />
        <div>
          <label className="mb-2 block font-bold text-gray-700">
            Company Type
          </label>
          <select className="w-full rounded-md border p-2 text-gray-700">
            <option>Service</option>
            <option>Product</option>
          </select>
        </div>
        <br />
        <div>
          <label className="mb-2 block font-bold text-gray-700">Industry</label>

          <input
            type="text"
            className="w-full rounded-md border p-2 text-gray-700"
          />
        </div>
        <br />
        <div>
          <label className="mb-2 block font-bold text-gray-700">
            Employee Count
          </label>
          <input
            type="number"
            className="w-full rounded-md border p-2 text-gray-700"
          />
        </div>
        <br />
        <div>
          <label className="mb-2 block font-bold text-gray-700">
            Founded Year
          </label>
          <input
            type="number"
            className="w-full rounded-md border p-2 text-gray-700"
          />
        </div>
        <br />
        <div>
          <label className="mb-2 block font-bold text-gray-700">Website</label>
          <input
            type="text"
            className="w-full rounded-md border p-2 text-gray-700"
          />
        </div>
        <br />
        <div>
          <label className="mb-2 block font-bold text-gray-700">Email</label>
          <input
            type="email"
            className="w-full rounded-md border p-2 text-gray-700"
          />
        </div>
        <br />
        <div>
          <label className="mb-2 block font-bold text-gray-700">Phone</label>
          <input
            type="text"
            className="w-full rounded-md border p-2 text-gray-700"
          />
        </div>
        <br />
        <div>
          <label className="mb-2 block font-bold text-gray-700">City</label>
          <input
            type="text"
            className="w-full rounded-md border p-2 text-gray-700"
          />
        </div>
        <br />
        <div>
          <label className="mb-2 block font-bold text-gray-700">State</label>
          <input
            type="text"
            className="w-full rounded-md border p-2 text-gray-700"
          />
        </div>
        <br />
        <div>
          <label className="mb-2 block font-bold text-gray-700">Pincode</label>
          <input
            type="text"
            className="w-full rounded-md border p-2 text-gray-700"
          />
        </div>
        <br />
        <div>
          <label className="mb-2 block font-bold text-gray-700">CEO Name</label>
          <input
            type="text"
            className="w-full rounded-md border p-2 text-gray-700"
          />
        </div>
        <br />
        <div>
          <label className="mb-2 block font-bold text-gray-700">HR Email</label>
          <input
            type="text"
            className="w-full rounded-md border p-2 text-gray-700"
          />
        </div>
        <br />
        <div>
          <label className="mb-2 block font-bold text-gray-700">Status</label>
          <select className="w-full rounded-md border p-2 text-gray-700">
            <option>Active</option>
            <option>Inactive</option>
          </select>
        </div>
        <br />
        <div>
          <label className="mb-2 block font-bold text-gray-700">Address</label>
          <textarea
            rows={3}
            className="w-full rounded-md border p-2 text-gray-700"
          />
        </div>
        <br />
        <div>
          <label className="mb-2 block font-bold text-gray-700">
            Description
          </label>
          <textarea
            rows={3}
            className="w-full rounded-md border p-2 text-gray-700"
          />
        </div>
        <br />
        <button className="mt-6 rounded-md bg-blue-600 px-5 py-2 text-white hover:bg-blue-700">
          Save Company
        </button>
      </div>
    </form>
  );
}
