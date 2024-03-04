import { currentUser } from "@/lib/auth";

const AdminPage = async () => {
  const user = await currentUser();

  return (
    <>
      <h1>User:</h1>
      <h2>{user?.id}</h2>
      <h2>{user?.name}</h2>
      <h2>{user?.email}</h2>
      <h2>{user?.image}</h2>
      <h2>{user?.isOAuth}</h2>
    </>
  );
};

export default AdminPage;