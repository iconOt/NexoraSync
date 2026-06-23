import useAuth from "../hooks/useAuth";
import DashboardLayout from "../layout/dashboard";
import DashboardNavbar from "../components/DashboardNavbar";

const Profile = () => {
  const { user } = useAuth();

  return (
    <DashboardLayout>
      <DashboardNavbar />

      <div className="bg-white p-8 rounded-xl shadow-sm max-w-2xl">
        <h1 className="text-2xl font-bold mb-6">
          My Profile
        </h1>

        <div className="space-y-4">
          <div>
            <p className="text-slate-500">
              Full Name
            </p>
            <p className="font-medium">
              {user?.profile?.name}
            </p>
          </div>

          <div>
            <p className="text-slate-500">
              Email
            </p>
            <p className="font-medium">
              {user?.email}
            </p>
          </div>

          <div>
            <p className="text-slate-500">
              User ID
            </p>
            <p className="font-medium break-all">
              {user?.id}
            </p>
          </div>

          <div>
            <p className="text-slate-500">
              Role
            </p>
            <p className="font-medium">
              {user?.profile?.role || "—"}
            </p>
          </div>
        </div>
      </div>
    </DashboardLayout>
  );
};

export default Profile;
