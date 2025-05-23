"use client";

import { useState } from "react";
import { toast } from "@/hooks/toast.hook";
import { UserPayload } from "@/@types/user.entity";
import { useGlobalAuthenticationStore } from "@/core/store/data";
import { useGlobalUIBoundedStore } from "@/core/store/ui";

const useSettings = () => {
  const [currentTab, setCurrentTab] = useState("profile");

  const theme = useGlobalUIBoundedStore((state) => state.theme);
  const toggleTheme = useGlobalUIBoundedStore((state) => state.toggleTheme);
  const updateUser = useGlobalAuthenticationStore((state) => state.updateUser);
  const address = useGlobalAuthenticationStore((state) => state.address);
  const loggedUser = useGlobalAuthenticationStore((state) => state.loggedUser);

  const saveProfile = async (data: UserPayload) => {
    try {
      const updatedData = {
        ...loggedUser,
        ...data,
      };

      await updateUser(address, updatedData);

      toast({
        title: "Success",
        description: "Profile and preferences saved successfully!",
      });
    } catch (error) {
      console.error("Error saving preferences:", error);
      toast({
        title: "Error",
        description: "Failed to save preferences. Please try again.",
        variant: "destructive",
      });
    }
  };

  return { currentTab, setCurrentTab, saveProfile, theme, toggleTheme };
};

export default useSettings;
