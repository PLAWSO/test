import { z } from "zod";

export enum DialogType {
  Create = "CREATE",
  Edit = "EDIT"
}

export enum Status {
  Active = "Active",
  Inactive = "Inactive"
}

export const ZodId = {
  id: z.string().cuid({ message: "Invalid id" })
}

export const ZodObjectStatus = {
  status: z.enum(["Active", "Inactive"])
}

export const BaseZodObject = {
  ...ZodObjectStatus,
  enteredById: z.string().cuid({ message: "Invalid enteredById" }),
  enteredDate: z.date()
}

export const ZodName = {
  name: z.string().min(1, { message: "Name must be at least 1 character" }).max(50, { message: "Name must be less than 50 characters" })
}

export const BusinessZodObject = {
  ...ZodObjectStatus,
  name: z.string().min(1, { message: "Name must be at least 1 character" }).max(50, { message: "Name must be less than 50 characters" }),
}