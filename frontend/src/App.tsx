import { useEffect, useState } from "react";
import { Building2, Users } from "lucide-react";

import Navbar from "./components/Navbar";
import StatsCard from "./components/StatsCard";
import EmployeeTable from "./components/EmployeeTable";
import EmployeeModal from "./components/EmployeeModal";

import type { Employee } from "./types/employee";

import {
  getEmployees,
  createEmployee,
  updateEmployee,
  deleteEmployee,
} from "./services/employeeService";

import "./App.css";

function App() {
  const [employees, setEmployees] = useState<Employee[]>([]);
  const [selectedEmployee, setSelectedEmployee] = useState<Employee | null>(
    null
  );
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [loading, setLoading] = useState(false);

  const fetchEmployees = async () => {
    try {
      const data = await getEmployees();
      setEmployees(data);
    } catch (error) {
      console.error("Failed to fetch employees:", error);
    }
  };

  useEffect(() => {
    fetchEmployees();
  }, []);

  const handleAdd = () => {
    setSelectedEmployee(null);
    setIsModalOpen(true);
  };

  const handleEdit = (employee: Employee) => {
    setSelectedEmployee(employee);
    setIsModalOpen(true);
  };

  const handleDelete = async (id: string) => {
    try {
      await deleteEmployee(id);
      await fetchEmployees();
    } catch (error) {
      console.error("Failed to delete employee:", error);
    }
  };

  const handleSubmit = async (employee: Omit<Employee, "_id">) => {
    try {
      setLoading(true);

      if (selectedEmployee?._id) {
        await updateEmployee(selectedEmployee._id, employee);
      } else {
        await createEmployee(employee);
      }

      await fetchEmployees();

      setIsModalOpen(false);
      setSelectedEmployee(null);
    } catch (error) {
      console.error("Failed to save employee:", error);
    } finally {
      setLoading(false);
    }
  };

  const totalEmployees = employees.length;

  const departments = new Set(
    employees.map((employee) => employee.department)
  ).size;

  return (
    <div className="min-h-screen bg-slate-50">
      <Navbar />

      <main className="mx-auto max-w-7xl px-6 py-8">
        {/* Header */}
        <div className="mb-8 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <h1 className="text-3xl font-bold text-slate-900">
              Employee Dashboard
            </h1>

            <p className="mt-1 text-sm text-slate-500">
              Manage your organization's employees.
            </p>
          </div>

          <button
            onClick={handleAdd}
            className="rounded-xl bg-slate-900 px-5 py-3 text-sm font-medium text-white transition hover:bg-slate-800"
          >
            + Add Employee
          </button>
        </div>

        {/* Stats */}
        <div className="mb-8 grid gap-5 sm:grid-cols-2">
          <StatsCard
            title="Total Employees"
            value={totalEmployees}
            icon={Users}
          />

          <StatsCard
            title="Departments"
            value={departments}
            icon={Building2}
          />
        </div>

        {/* Employee Table */}
        <div>
          <div className="mb-4">
            <h2 className="text-xl font-bold text-slate-900">
              Employees
            </h2>

            <p className="text-sm text-slate-500">
              View and manage employee information.
            </p>
          </div>

          <EmployeeTable
            employees={employees}
            onEdit={handleEdit}
            onDelete={handleDelete}
          />
        </div>
      </main>

      {/* Modal */}
      <EmployeeModal
        isOpen={isModalOpen}
        employee={selectedEmployee}
        onClose={() => {
          setIsModalOpen(false);
          setSelectedEmployee(null);
        }}
        onSubmit={handleSubmit}
        loading={loading}
      />
    </div>
  );
}

export default App;