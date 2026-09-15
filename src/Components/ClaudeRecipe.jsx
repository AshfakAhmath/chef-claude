import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

function ClaudeRecipe(props) {
  return (
    <section className="suggested-recipe-container">
      <h2>Chef Claude Recommends:</h2>
      <ReactMarkdown remarkPlugins={[remarkGfm]}>{props.recipe}</ReactMarkdown>
    </section>
  );
}

export default ClaudeRecipe;
