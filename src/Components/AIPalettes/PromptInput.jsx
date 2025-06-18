"use client";
import axios from "axios";
import { useRouter } from "next/navigation";

const PromptInput = ({ setPalettes, session, loading, setLoading, prompt, setPrompt }) => {
  const router = useRouter();

  const handleSubmit = async (e) => {
    try {
      e.preventDefault();
      if(!session) {
        router.push('/sign-in');
        return;
      }
      setLoading(true);
      const response = await axios.post(`${process.env.NEXT_PUBLIC_API_URL}/api/palettes`, { prompt });
      setPalettes(response.data.generatedPalettes);
    } catch (err) {
      console.error(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="w-full flex flex-col sm:flex-row gap-2 justify-center items-center sm:px-12 lg:px-36 mt-4 sm:mt-8">
      <input
        type="text"
        value={prompt}
        onChange={(e) => setPrompt(e.target.value)}
        placeholder="Enter a theme (e.g., sunset, forest, sky, love etc.)"
        style={{ boxShadow: 'rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 1px 3px 1px' }}
        className="w-full sm:text-lg border border-gray-300 px-6 py-2 rounded-full outline-none"
        required
      />
      <button
        type="submit"
        disabled={loading}
        style={{ boxShadow: 'rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 1px 3px 1px' }}
        className="sm:text-lg px-6 py-2 border border-transparent bg-blue-500 text-white rounded-full cursor-pointer hover:scale-102 transition-all duration-200"
      >
        {loading ? "Generating..." : "Generate"}
      </button>
    </form>
  );
};

export default PromptInput;
