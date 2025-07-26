
import { useParams, useOutletContext } from "react-router-dom";

function UserProfile() {
  const users = useOutletContext();
  const { id } = useParams();

  const user = users.find((u) => u.id === parseInt(id));

  if (!user) return <h2>Loading...</h2>;

  return (
    <aside>
      <h2>{user.name}</h2>
      <p>Email: {user.email}</p>
      {/* Add more fields if desired */}
    </aside>
  );
}

export default UserProfile;
