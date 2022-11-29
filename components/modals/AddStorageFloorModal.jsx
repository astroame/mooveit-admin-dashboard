import { useEffect, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useRouter } from "next/router";
import { uploadConfiguration, getConfigurations } from "../../redux/features/configurations.slice";
import { XIcon } from "@heroicons/react/outline";

const AddStorageFloorModal = () => {
  const { configurations } = useSelector((state) => state.configuration);
  const dispatch = useDispatch();
  const closeModal = useRef(null);
  const [id, setId] = useState("");
  const [storagefloor, setStoragefloor] = useState("");
  const router = useRouter();
  const disableBtn = !storagefloor;

  const refreshConfigurations = () => {
    dispatch(getConfigurations());
  };

  useEffect(() => {
    configurations?.map(({ _id }) => setId(_id));
  }, [configurations]);
  const handleSave = (e) => {
    const payload = {
      storageFloor: storagefloor,
    };

    dispatch(
      uploadConfiguration({
        id: id,
        payload: payload,
        refreshConfigurations: refreshConfigurations,
        closeModal: closeModal,
      })
    );
  };

  return (
    <>
      <input type="checkbox" id="addstoragefloor" className=" modal-toggle " />
      <label htmlFor="addstoragefloor" className=" modal ">
        <label className=" modal-box py-10 relative w-[80%] md:w-[50%] max-w-[500px] rounded-xl z-20">
          <div className="w-[80%] mx-auto text-left">
            <div className="flex justify-between items-center mb-6">
              <h2 className="font-bold text-2xl">Add Storage Floor</h2>
              <label htmlFor="addstoragefloor">
                <XIcon className="w-6 cursor-pointer modal-button" />
              </label>
            </div>
            <h3 className="font-bold text-sm mb-2">Storage Floor</h3>

            <input
              placeholder=""
              className="px-4 py-2 border border-black w-full mb-4 rounded-md"
              onChange={(e) => setStoragefloor(e.target.value)}
            />

            <button
              className="btn w-full disabled:bg-[#DDDDDD] disabled:text-white cursor-pointer bg-black text-white  mt-6"
              disabled={disableBtn}
              onClick={handleSave}>
              SAVE
            </button>
          </div>
        </label>
      </label>
      <label htmlFor="addstoragefloor" className="hidden" ref={closeModal} />
    </>
  );
};

export default AddStorageFloorModal;
