export default function UserCard({ name, email }) {
  return (
    <div className="bg-white shadow-md rounded p-4 max-w-sm m-4">
      <h3 className="text-xl font-bold">{name}</h3>
      <p className="text-gray-600">{email}</p>
    </div>
  );
}
