import {extendVariants, Card} from "@nextui-org/react";

const LoginFormCard = extendVariants(Card, {
    variants: { 
      color: {
        stone: {
          CardWrapper: [
            "bg-[#ffffff]",
            "transition-colors",
            "shadow:bg-[#ffffff]",
            "focus-within:bg-[#ffffff]",
            "data-[hover=true]:bg-[#ffffff]",
            "data-[hover=true]:bg-[#ffffff]",
            "group-data-[focus=true]:bg-[#ffffff]",
            "data-[hover=true]:bg-[#ffffff]",          
            ],
          Card: [ 
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
  
export default LoginFormCard;