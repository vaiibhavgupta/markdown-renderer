import gfm from "remark-gfm";
import rehypeRaw from "rehype-raw";
import ReactMarkdown from "react-markdown";

export default function ReactMarkdownPlus({ children }) {
  return (
    <div className="ml-10 mr-10 text-left">
      <ReactMarkdown
        className="prose w-full"
        children={children}
        remarkPlugins={[gfm]}
        rehypePlugins={[rehypeRaw]}
      />
    </div>
  );
}
