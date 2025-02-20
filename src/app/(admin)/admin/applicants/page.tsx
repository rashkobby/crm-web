"use client";

import { ApplicantsTableColumns } from "@/components/admin/applicants/ApplicantsTableCols";
import TableComponent from "@/components/admin/applicants/Table";
import { useApplicantHooks } from "@/hooks/useApplicantsHook";

export default function Applicants() {
  const { tableData, mutation, message, filter, setFilter } =
    useApplicantHooks();
  const dropdownActions = {
    view: "View Applicant",
    activate: "Activate Applicant",
    email: "Send Email",
  };

  function actionToPerform(payload: {
    action?: string;
    id?: number;
    email?: string;
  }) {
    switch (payload?.action) {
      case "activate-applicant":
        mutation.mutate(payload?.id!);
        break;
      case "send-email":
        (window as Window).location = `mailto:${payload?.email}`;
    }
  }

  function onChange(event: React.ChangeEvent<HTMLInputElement>) {
    setFilter(event.target.value);
  }

  return (
    <>
      {message && (
        <div className="toast absolute left-0 top-0 right-0 bg-[green] h-[50px] flex justify-center items-center z-50">
          <p className="text-[white]">{message}</p>
        </div>
      )}
      <div className="interviewee-wrapper bg-[white] w-[90%] p-[20px] dark:bg-[#232323] dark:text-white relative bottom-0 top-0">
        <h1 className="text-[#3D4450] font-normal text-xl mb-[20px] dark:text-white">
          Applicants
        </h1>
        <TableComponent
          columns={ApplicantsTableColumns}
          data={tableData}
          dropdownActions={dropdownActions}
          actionsToPerform={actionToPerform}
          ids={tableData?.map((e) => e?.id)}
          emails={tableData?.map((e) => e?.email)}
          searchIncluded
          value={filter}
          onChange={onChange}
        />
        {tableData?.length === 0 && (
          <div className="flex justify-center items-center h-[400px]">
            <p>No data found</p>
          </div>
        )}
      </div>
    </>
  );
}
