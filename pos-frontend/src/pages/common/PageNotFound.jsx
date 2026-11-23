import React from "react";

const PageNotFound = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-background">
      <div className="h-14 w-14 border-4 border-primary border-t-transparent rounded-full animate-spin mb-6" />
      <p className="text-sm text-muted-foreground">
        Page not found
      </p>
    </div>
  );
};

export default PageNotFound;
