export const uploadToCloudinary = async (pics) => {

  const cloud_name = "dafkl7xy0";

  if (!pics) {
    console.log("No file selected");
    return;
  }

  const data = new FormData();
  data.append("file", pics);
  data.append("upload_preset", "pos_unsigned");

  const res = await fetch(
    `https://api.cloudinary.com/v1_1/${cloud_name}/image/upload`,
    {
      method: "POST",
      body: data,
    }
  );

  const fileData = await res.json();
  console.log("Cloudinary response:", fileData);

  if (!res.ok) {
    throw new Error(fileData.error?.message || "Upload failed");
  }

  return fileData.secure_url;
};






// export const uploadToCloudinary = async (pics) => {

//     const cloud_name="dafkl7xy0"
    
//     if (pics) {
      
//       const data = new FormData();
//       data.append("file", pics);
//       data.append("upload_preset", "pos_unsigned");
//       data.append("cloud_name", cloud_name);
  
//       const res = await 
//       fetch(`https://api.cloudinary.com/v1_1/${cloud_name}/image/upload`, {
//         method: "post",
//         body: data,
//       })
        
//         const fileData=await res.json();
//         console.log("url : ", fileData);
//         return fileData.url
  
//     } else {
//       console.log("error");
//     }
//   };