import {extendVariants, Input} from "@nextui-org/react";

const LoginFormInput = extendVariants(Input, {
    variants: { 
      color: {
        stone: {
          inputWrapper: [
            "bg-[#ffffff]",
            "transition-colors",
            "shadow:none",
            "focus-within:bg-[#ffffff]",
            "data-[hover=true]:bg-[#ffffff]",
            "data-[hover=true]:bg-[#ffffff]",
            "group-data-[focus=true]:bg-[#ffffff]",
            "data-[hover=true]:bg-[#ffffff]",          
            ],
          input: [ 
            "text-zinc-800",
            "bg-[#ffffff]",
            "placeholder:text-zinc-600",
          ],
        },
      },
    },
      defaultVariants: {
      color: "stone",
      removeLabel: true,
    },
  });
  
export default LoginFormInput;