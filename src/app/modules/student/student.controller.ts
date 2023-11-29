import { StudentService } from './student.service';
import { Request, Response } from "express";

const createStudent = async(req:Request,res:Response)=>{

   try{
        const {student:studentData} = req.body;


        //will call service function to send this data
        const result = await StudentService.createStudentIntoDB(studentData)

        //send response
        res.status(200).json({
            message:"Student is created successfully",
            data : result
        })
   }
   catch (err){
    console.log(err)
   }
} 

export const StudentController ={
    createStudent,
}