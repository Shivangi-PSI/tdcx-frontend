export const apiHeaders = () => {
  return {
    Authorization: "Bearer " + localStorage.getItem("token"),
  };
};
