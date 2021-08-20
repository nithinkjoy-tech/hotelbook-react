import React,{useEffect} from "react";
import PropertySelectBox from "./../common/PropertySelectBox";
import {useFormikContext} from "formik";
import SaveAsDraftButton from './SaveAsDraftButton';

function Step4({saveAsDraft}) {
  useEffect(() => {
    window.scrollTo(0, 0) 
  }, [])

  const {getFieldProps, values} = useFormikContext();

  let {value:freeCancellation} = getFieldProps("freeCancellationAvailable");
  let time;
  let check_in_out=[]
  for(let i=0;i<24;i++){
        time=`${i<10?"0":""}${i} : 00`
        check_in_out.push(time)
        time=`${i<10?"0":""}${i} : 30`
        check_in_out.push(time)
  }

  return (
    <div style={{marginLeft: "7.75vw", width: "85%"}} className="md:grid md:grid-cols-1 md:gap-6">
      <div className="mt-10 sm:mt-0">
        <div className="md:grid md:grid-cols-1 md:gap-6">
          <div className="md:col-span-1">
            <div className="px-4 sm:px-0" />
          </div>
          <div className="mt-5 md:mt-0 md:col-span-2">
            <div className="shadow overflow-hidden sm:rounded-md">
              <div className="px-4 py-5 bg-white sm:p-6">
                <div className="grid grid-cols-6 gap-6">
                  <div className="col-span-6 sm:col-span-3">
                    <PropertySelectBox
                      label="How many days in advance can guests cancel free of charge?"
                      name="freeCancellationAvailable"
                      options={["None.(Guest cannot cancel once booked)", "Day of arrival","1 day","2 days","3 days","7 days","14 days"]}
                    />
                  </div>
                  {(freeCancellation&&!freeCancellation.startsWith("None"))?<div className="col-span-6 sm:col-span-3">
                    <PropertySelectBox
                      label="or guests will pay 100%"
                      name="ifNotCancelledBeforeDate"
                      options={["of the first day","of the full stay"]}
                    />
                  </div>:<div></div>}
                  <div className="col-span-3 sm:col-span-3">
                    <PropertySelectBox
                      label="Check-in"
                      name="checkInStart"
                      options={check_in_out}
                    />
                  </div>
                  <div className="col-span-3 sm:col-span-3">
                    <PropertySelectBox
                      label="Check-in"
                      name="checkInEnd"
                      options={check_in_out}
                    />
                  </div>
                  <div className="col-span-3 sm:col-span-3">
                    <PropertySelectBox
                      label="Check-out"
                      name="checkOutStart"
                      options={check_in_out}
                    />
                  </div>
                  <div className="col-span-3 sm:col-span-3">
                    <PropertySelectBox
                      label="Check-out"
                      name="checkOutEnd"
                      options={check_in_out}
                    />
                  </div>
                  <div className="col-span-3 sm:col-span-3">
                    <PropertySelectBox
                      label="Can you accommodate children?"
                      name="accomodateChildren"
                      options={["No","Yes"]}
                    />
                  </div>
                  <div className="col-span-3 sm:col-span-3">
                    <PropertySelectBox
                      label="Do you allow pets?"
                      name="allowPets"
                      options={["No","Yes"]}
                    />
                  </div>
                  <div className="col-span-3 sm:col-span-3">
                    <PropertySelectBox
                      label="Do you provide dormitory for driver"
                      name="provideDormitoryForDriver"
                      options={["No","Yes"]}
                    />
                  </div>
                </div>
              </div>
               <SaveAsDraftButton values={values} saveAsDraft={saveAsDraft} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Step4;
