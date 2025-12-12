 "use client";
 
 import React, { type ReactNode } from "react";
 import { useTheme } from "@/app/theme-provider";
 
 interface PProps {
   children: ReactNode;
 }
 
 const P = ({ children }: PProps) => {
   const { resolvedTheme } = useTheme();
   const isDark = resolvedTheme === "dark";
   return (
     <p
       className="text-lg md:text-base leading-relaxed"
       style={{ color: isDark ? "#d4d4d4" : "#3f3f46" }}
     >
       {children}
     </p>
   );
 };
 
 export default P;
