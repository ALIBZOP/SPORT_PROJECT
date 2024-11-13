import {extendVariants, Tab} from "@nextui-org/react";

const LoginFormtab = extendVariants(Tab, {
    variants: { 
      color: {
        stone: {
          tabWrapper: [
            "bg-[#000000]",
            "transition-colors",
            "shadow:none",
            "focus-within:bg-[#000000]",
            "data-[hover=true]:bg-[#000000]",
            "data-[hover=true]:bg-[#ffffff]",
            "group-data-[focus=true]:bg-[#ffffff]",
            "data-[hover=true]:bg-[#ffffff]",          
            ],
          tab: [ 
            "text-zinc-800",
            "bg-[#]",
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
  
export default LoginFormtab;