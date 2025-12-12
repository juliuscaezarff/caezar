 "use client";
 
 import React, { type ReactNode } from "react";
 import { useTheme } from "@/app/theme-provider";
 
 interface LiProps {
   children: ReactNode;
 }
 
 const Li = ({ children }: LiProps) => {
   const { resolvedTheme } = useTheme();
   const isDark = resolvedTheme === "dark";
   return (
     <li
       className="py-1 leading-relaxed"
       style={{ color: isDark ? "#d4d4d4" : "#3f3f46" }}
     >
       {children}
     </li>
   );
 };
 
 export default Li;
