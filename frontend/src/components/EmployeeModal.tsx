import { X } from "lucide-react";
import EmployeeForm from "./EmployeeForm";
import type { Employee } from "../types/employee";

interface EmployeeModalProps {
  isOpen: boolean;
  employee?: Employee | null;
  onClose: () => void;
  onSubmit: (employee: Omit<Employee, "_id">) => void;
  loading?: boolean;
}

const EmployeeModal = ({
  isOpen,
  employee,
  onClose,
  onSubmit,
  loading = false,
}: EmployeeModalProps) => {
  if (!isOpen) {
    return null;
  }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 px-4">
      <div className="w-full max-w-lg rounded-2xl bg-white shadow-xl">
        <div className="flex items-center justify-between border-b border-slate-200 px-6 py-5">
          <div>
            <h2 className="text-xl font-bold text-slate-900">
              {employee ? "Edit Employee" : "Add Employee"}
            </h2>

            <p className="mt-1 text-sm text-slate-500">
              {employee
                ? "Update employee information."
                : "Add a new employee to TeamHub."}
            </p>
          </div>

          <button
            onClick={onClose}
            className="rounded-lg p-2 text-slate-400 transition hover:bg-slate-100 hover:text-slate-700"
            title="Close"
          >
            <X size={20} />
          </button>
        </div>

        <div className="p-6">
          <EmployeeForm
            employee={employee}
            onSubmit={onSubmit}
            onCancel={onClose}
            loading={loading}
          />
        </div>
      </div>
    </div>
  );
};

export default EmployeeModal;