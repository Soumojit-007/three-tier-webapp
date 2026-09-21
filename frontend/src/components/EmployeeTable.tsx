import { Edit, Trash2, Users } from "lucide-react";
import type { Employee } from "../types/employee";

interface EmployeeTableProps {
  employees: Employee[];
  onEdit: (employee: Employee) => void;
  onDelete: (id: string) => void;
}

const EmployeeTable = ({
  employees,
  onEdit,
  onDelete,
}: EmployeeTableProps) => {
  if (employees.length === 0) {
    return (
      <div className="rounded-2xl border border-slate-200 bg-white p-12 text-center shadow-sm">
        <Users className="mx-auto text-slate-400" size={40} />

        <h3 className="mt-4 text-lg font-semibold text-slate-800">
          No employees found
        </h3>

        <p className="mt-1 text-sm text-slate-500">
          Add your first employee to get started.
        </p>
      </div>
    );
  }

  return (
    <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">
      <div className="overflow-x-auto">
        <table className="w-full text-left">
          <thead className="border-b border-slate-200 bg-slate-50">
            <tr>
              <th className="px-6 py-4 text-sm font-semibold text-slate-600">
                Name
              </th>

              <th className="px-6 py-4 text-sm font-semibold text-slate-600">
                Email
              </th>

              <th className="px-6 py-4 text-sm font-semibold text-slate-600">
                Role
              </th>

              <th className="px-6 py-4 text-sm font-semibold text-slate-600">
                Department
              </th>

              <th className="px-6 py-4 text-right text-sm font-semibold text-slate-600">
                Actions
              </th>
            </tr>
          </thead>

          <tbody>
            {employees.map((employee) => (
              <tr
                key={employee._id}
                className="border-b border-slate-100 last:border-none hover:bg-slate-50"
              >
                <td className="px-6 py-4">
                  <p className="font-medium text-slate-900">
                    {employee.name}
                  </p>
                </td>

                <td className="px-6 py-4 text-sm text-slate-600">
                  {employee.email}
                </td>

                <td className="px-6 py-4">
                  <span className="rounded-full bg-slate-100 px-3 py-1 text-xs font-medium text-slate-700">
                    {employee.role}
                  </span>
                </td>

                <td className="px-6 py-4 text-sm text-slate-600">
                  {employee.department}
                </td>

                <td className="px-6 py-4">
                  <div className="flex justify-end gap-2">
                    <button
                      onClick={() => onEdit(employee)}
                      className="rounded-lg p-2 text-slate-500 transition hover:bg-slate-100 hover:text-slate-900"
                      title="Edit employee"
                    >
                      <Edit size={17} />
                    </button>

                    <button
                      onClick={() => {
                        if (
                          window.confirm(
                            `Delete ${employee.name}?`
                          )
                        ) {
                          if (employee._id) {
                            onDelete(employee._id);
                          }
                        }
                      }}
                      className="rounded-lg p-2 text-slate-500 transition hover:bg-red-50 hover:text-red-600"
                      title="Delete employee"
                    >
                      <Trash2 size={17} />
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default EmployeeTable;