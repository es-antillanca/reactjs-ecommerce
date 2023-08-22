export default function ItemListContainer({ greeting }) {
  return (
    <div className="flex justify-center">
      <h1 className="text-4xl font-extrabold tracking-tight lg:text-5xl">
      {greeting}
    </h1>

    </div>
  );
}
