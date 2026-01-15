interface LoadingProps {
  text?: string;
}

const Loading = ({ text = "Loading..." }: LoadingProps) => {
  return (
    <div className="flex flex-col items-center justify-center py-20">
      <div className="h-10 w-10 animate-spin rounded-full border-4 border-blue-500 border-t-transparent" />
      <p className="mt-4 text-gray-600 text-sm">{text}</p>
    </div>
  );
};

export default Loading;
