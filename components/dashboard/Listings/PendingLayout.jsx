import {
  ChevronLeftIcon,
  ChevronRightIcon,
  DotsVerticalIcon,
  XCircleIcon,
  CheckCircleIcon,
  EyeIcon,
  TrashIcon,
} from "@heroicons/react/outline";
import { useRouter } from "next/router";
import React, { useEffect } from "react";
import { useState } from "react";
import { PulseLoader } from "react-spinners";
import { getListings } from "../../../redux/features/listings.slice";
import { useDispatch, useSelector } from "react-redux";

const PendingLayout = () => {
  const [option, setOption] = useState("");
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getListings());
  }, []);
  const { listings } = useSelector((state) => state.listing);
  const { listingLoading } = useSelector((state) => state.listing);
  const router = useRouter();
  const view = (_id) => router.push(`/listings/${_id}`);
  const approve = () => router.push("/listings/approve");
  const deny = () => router.push("/listings/deny");

  return (
    <div className="">
      {listingLoading ? (
        <div className="relative">
          <div className="h-[400px] flex justify-center items-center">
            <PulseLoader loading={listingLoading} color="#EDCC5B" />
          </div>
        </div>
      ) : (
        <div className="overflow-auto rounded-lg">
          {/* <table className="table table-compact w-full p-4 mb-8 "> */}
          <table className=" w-full p-4 mb-8 ">
            <thead className="bg-white text-black border border-accent rounded-md p-6 ">
              <tr className="p-4 ">
                <th className="items-center ml-6 my-4 text-start w-[30%] p-4 text-[#222222]">Listing</th>

                <th className="w-[15%] whitespace-nowrap text-start p-4">Location</th>

                <th className="w-[15%] whitespace-nowrap text-start p-4">With Moving</th>
                <th className="w-[10%]  whitespace-nowrap text-start p-4">With Packing</th>
                {/* <th className="w-[10%] whitespace-nowrap text-start p-4"></th> */}
              </tr>
            </thead>
            <tbody className="w-full   ">
              {listings?.map(
                ({_id, status, address, parking, delivery }, index) =>
                  status === "pending" && (
                    <tr className="capitalize cursor-pointer border border-accent text-[#666666]" onClick={(()=>view(_id))} key={index}>
                      <td className=" w-[20%]  text-sm  p-4 ">
                        <div className="flex justify-start items-center">
                          <p>Shift Man Van LTD</p>
                        </div>
                      </td>

                      <td className="w-[15%] p-4 whitespace-nowrap ">{address}</td>

                      <td className="w-[10%] p-4 text-sm text-blue">{`${delivery === false ? "False" : "True"}`}</td>

                      <td className="w-[10%] p-4 text-sm">{`${parking === false ? "False" : "True"}`}</td>

                      {/* <td className="w-[10%] p-4">Approved</td> */}
                      {/* <td className="w-[10%] p-4">
                        <div className="flex">
                          <div className="flex text-[#11A131]  " onClick={approve}>
                            <CheckCircleIcon className="w-4  mr-4 " />
                            Approved
                          </div>
                          <div className="flex ml-4 text-[#D12C2C]" onClick={deny}>
                            <XCircleIcon className="w-4 mr-4  " />
                            Deny
                          </div>
                          <div className="flex text-[#4543A5] ">
                            <EyeIcon className="w-4 ml-4  " />
                          </div>
                        </div>
                      </td> */}
                    </tr>
                  )
              )}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default PendingLayout;
