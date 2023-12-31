import { PencilAltIcon, PhotographIcon, TrashIcon, TruckIcon } from "@heroicons/react/outline";
import { useSelector } from "react-redux";
import React from "react";

import Accordion from "../../shared/Accordion";

const StorageFeatures = () => {
  const { configurations } = useSelector((state) => state.configuration);

  return (
    <Accordion title="Storage Features">
      <div className="flex justify-between items-center mb-6">
        <p>Add a storage feature </p>
        <label
          htmlFor="addfeature"
          className={`btn text-black btn-outline btn-primary border border-accent hover:btn-accent w-[175px]`}>
          Add a Feature
        </label>
      </div>

      {configurations?.map(({ storageFeatures }, i) => (
        <div key={i}>
          {storageFeatures?.length === 0 ? (
            <div className=" text-center font-semibold">No storage features at this time</div>
          ) : (
            storageFeatures.map(({ label, image }, indx) => (
              <div
                key={indx}
                className="bg-[#F9F9F9] border-l-4 border-accent rounded-lg px-6 py-4 flex justify-between items-center text-sm mb-6">
                <div className="flex  items-center">
                  <span className="rounded-full w-10 h-10 flex justify-center items-center ">
                    <div className="w-8 h-8 mr-2 bg-white  rounded-full flex items-center justify-center">
                      {image ? (
                        <img src={image} alt="Feature Image" className="w-4 h-4 " />
                      ) : (
                        <PhotographIcon className="w-4" />
                        // <img src="/auth-image.png" alt="Feature Image" className="w-4 h-4 " />
                      )}
                    </div>
                  </span>
                  <p className=" uppercase">{label}</p>
                </div>
                <div className="flex items-center gap-6">
                  <div className="flex items-center cursor-pointer ">
                    <PencilAltIcon className="text-primary w-4 mr-2 " />
                    <p>Edit</p>
                  </div>
                  <span className=" text-red-500  cursor-pointer flex items-center">
                    <TrashIcon className="w-4   mr-2" />
                    <p className="">Delete</p>
                  </span>
                </div>
              </div>
            ))
          )}
        </div>
      ))}
    </Accordion>
  );
};

export default StorageFeatures;
