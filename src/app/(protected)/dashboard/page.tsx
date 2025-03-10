import { auth } from "@/auth";
import LogoutButton from "@/components/logout-button";

const Dashboard = async () => {
  const session = await auth();

  if (!session) {
    return <div>Not authenticated</div>;
  }
  return (
    <div>
      {JSON.stringify(session, null, 2)}

      <LogoutButton />
    </div>
  );
};

export default Dashboard;
