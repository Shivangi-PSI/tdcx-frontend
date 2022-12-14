export const apiHeaders = () => {
  return {
    Authorization: "Bearer " + localStorage.getItem("token"),
  };
};

export const capitalizeFirstLetter = (str) => {
  return str.charAt(0).toUpperCase() + str.slice(1);
}