import React from "react";
import { createRoot } from "react-dom/client";  // Change import statement
import AppRouter from "./App"; 
import { ChakraProvider } from "@chakra-ui/react";

createRoot(document.getElementById("root")).render(
  <ChakraProvider>
    <AppRouter />
  </ChakraProvider>
);

