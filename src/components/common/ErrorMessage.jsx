function ErrorMessage({ message }) {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-950">
      <div className="text-center">
        <h2 className="text-2xl font-bold text-red-400">
          ⚠️ Something went wrong
        </h2>

        <p className="text-gray-300 mt-2">
          {message}
        </p>
      </div>
    </div>
  );
}

export default ErrorMessage;