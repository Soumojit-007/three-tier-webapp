import axios from "axios";
import type { Employee } from "../types/employee";

// const API_URL = "http://localhost:5000/api/employees";
const API_URL = "/api/employees";
// Get all employees
export const getEmployees = async (): Promise<Employee[]> => {
  const response = await axios.get(API_URL);

  return response.data.data;
};

// Get employee by ID
export const getEmployeeById = async (
  id: string
): Promise<Employee> => {
  const response = await axios.get(`${API_URL}/${id}`);

  return response.data.data;
};

// Create employee
export const createEmployee = async (
  employee: Omit<Employee, "_id">
): Promise<Employee> => {
  const response = await axios.post(API_URL, employee);

  return response.data.data;
};

// Update employee
export const updateEmployee = async (
  id: string,
  employee: Omit<Employee, "_id">
): Promise<Employee> => {
  const response = await axios.put(
    `${API_URL}/${id}`,
    employee
  );

  return response.data.data;
};

// Delete employee
export const deleteEmployee = async (
  id: string
): Promise<void> => {
  await axios.delete(`${API_URL}/${id}`);
};