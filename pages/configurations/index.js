import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { getSingleListing, disapproveListing, approveListing } from "../../redux/features/listings.slice";
import { getConfigurations } from "../../redux/features/configurations.slice";
import { useDispatch, useSelector } from "react-redux";
import { PulseLoader } from "react-spinners";
import { motion } from "framer-motion";
import { getValue, getValueArray } from "../../helpers/utils";
import {
  AddFeatureModal,
  AddStorageAccessModal,
  AddStorageFloorModal,
  AddStorageTypeModal,
  AdditionalServicesModal,
  StorageAccess,
  StorageFeatures,
  StorageType,
  StorageFloor,
  StorageDimensions,
  AdditionalServices,
  StorageDimensionModal,
} from "../../components";

import { DashboardLayout } from "../../components";

const Configurations = () => {
  const router = useRouter();
  const dispatch = useDispatch();
  const { configurations, configurationLoading } = useSelector((state) => state.configuration);
  useEffect(() => {
    dispatch(getConfigurations());
  }, []);

  // console.log(configurations);

  return (
    <DashboardLayout>
      {configurationLoading ? (
        <div className="relative">
          <div className="h-[400px] flex justify-center items-center">
            <PulseLoader loading={configurationLoading} color="#EDCC5B" />
          </div>
        </div>
      ) : (
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1 }}>
          <div className="w-[80%] mx-auto">
            <>
              <StorageFeatures />
              <StorageType />
              <StorageAccess />
              <StorageFloor />
              <StorageDimensions />
              <AdditionalServices />
            </>

            {/* <div className="flex justify-end">
              <div className="flex gap-4">
                <button className="btn btn-white text-black border-3 border-accent w-[175px] hover:btn-accent ">
                  Discard Changes
                </button>

                <label htmlFor="deny" className={`btn text-white   bg-primary  w-[175px]`}>
                  Save
                </label>
              </div>
              </div> */}
            <AddFeatureModal />
            <AddStorageTypeModal />
            <AddStorageAccessModal />
            <AddStorageFloorModal />
            <StorageDimensionModal />
            <AdditionalServicesModal />
          </div>
        </motion.div>
      )}
    </DashboardLayout>
  );
};

export default Configurations;
