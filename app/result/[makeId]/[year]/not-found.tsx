import Link from "next/link";

const NotFound = () => {
  return (
    <div className="container mx-auto px-4 py-8 text-center">
      <h1 className="text-3xl font-bold mb-4">No Models Found</h1>
      <p className="mb-4">
        Sorry, we couldn't find any vehicle models for the selected make and
        year.
      </p>
      <Link href="/" className="text-blue-500 hover:underline">
        Go back to search
      </Link>
    </div>
  );
};

export default NotFound;
