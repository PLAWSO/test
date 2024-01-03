import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

import { IntUser, Make, Model } from "@prisma/client"
import { api } from "~/utils/api";

import { z } from "zod"
import { zodResolver } from "@hookform/resolvers/zod"

import { useForm } from "react-hook-form"
import { Dispatch, SetStateAction, } from "react"

import { toast } from "react-hot-toast";

import { DialogType, ZodName } from "~/constants/enums"
import { Status } from "~/constants/enums"

import { Checkbox } from "@/components/ui/checkbox"

export default function Home() {

  return (
    <div>hello</div>
  );
}
