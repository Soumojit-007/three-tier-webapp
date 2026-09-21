import Employee from "../models/Employee.js";

export const createEmployee = async (req, res) => {
  try {
    const employee = new Employee(req.body);

    await employee.save();

    res.status(201).json({
      success: true,
      message: "Employee created successfully",
      data: employee
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      message: error.message
    });
  }
};
//read all employees
export const getAllEmployees = async(req,res) =>{
    try{
        const employees = await Employee.find();

        res.status(200).json({success:true , count:employees.length , data:employees});

    }catch(error){
        res.status(400).json({success:false,message:error.message});
    }
}

// read single employee

export const getEmployeeById = async(req,res) =>{
    try{
        const employee = await Employee.findById(req.params.id);
        if(!employee){
            return res.status(404).json({success:false , message:"Employee not found"});
        }
        res.status(200).json({success:true , data:employee});
    }catch(error){
        res.status(400).json({success:false , message:error.message});
    }
}

// update employee
export const updateEmployee = async(req , res) =>{
    try{
        const employee = await Employee.findByIdAndUpdate(req.params.id , req.body , {
            new : true,

            runValidators : true
        });

        if(!employee){
            return res.status(404).json({success:false , message: "Employee not found"})
        }

        res.status(200).json({success:true , data:employee , message:"Employee updated successfully"});
    }catch(error){
        res.status(400).json({success:false , message:error.message})
    }
}


// delete employee
export const deleteEmployee = async(req , res) =>{

    try{
            const employee = await Employee.findByIdAndDelete(req.params.id);

    if(!employee){
        return res.status(404).json({success:false , message:"Employee not found"})
    }

    res.status(200).json({success:true , message:"Employee deleted successfully"});
    }catch(error){
        res.status(400).json({success:false ,message:error.message})
    }

}
