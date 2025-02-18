import { memo } from "react";

const UserProfile = ({ user }) => (
    <div>
      <p>
        Hello, {user.name}, {user.age} tuổi
      </p>
    </div>
  );
  export default memo(UserProfile);
  