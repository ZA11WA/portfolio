
export default function ProgressBar({ progress }) {
    return (
      <div className="fixed top-0 left-0 w-screen bg-gray-200 h-1 dark:bg-gray-700 z-50">
        <div
          className="bg-sky-700 h-1 rounded-full"
          style={{ width: `${progress}%` }}
        ></div>
      </div>
    );
  }
  