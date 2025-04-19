import Link from "next/link";

const NotFound = () => {
  return (
    <main>
      <div className="container mx-auto px-4 min-h-screen flex flex-col justify-center items-center">
        <div className="flex flex-col items-center gap-8">
          <h1 className="text-5xl">Page Not Found</h1>
          <Link className="btn btn--primary" href="/">Return Home</Link>
        </div>
      </div>
    </main>
  )
}
export default NotFound