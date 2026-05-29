import type { Meta, StoryObj } from "@storybook/react-vite";
import CodeBlock from "./CodeBlock";

const meta: Meta<typeof CodeBlock> = {
  title: "Data Display/CodeBlock",
  component: CodeBlock,
};

export default meta;
type Story = StoryObj<typeof CodeBlock>;

const sampleCode = `import { Button } from "anexui";

export default function App() {
  return (
    <Button variant="primary" onClick={() => alert("Hello!")}>
      Click me
    </Button>
  );
}`;

export const Default: Story = {
  render: () => <CodeBlock language="tsx">{sampleCode}</CodeBlock>,
};

export const NoLanguage: Story = {
  render: () => <CodeBlock>{sampleCode}</CodeBlock>,
};

export const Bash: Story = {
  render: () => <CodeBlock language="bash">{"npm install anexui"}</CodeBlock>,
};
