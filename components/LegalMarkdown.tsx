import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

const components = {
	h1: ({ children }: { children?: React.ReactNode }) => <h1 className="text-3xl font-extrabold text-text md:text-4xl">{children}</h1>,
	h2: ({ children }: { children?: React.ReactNode }) => (
		<h2 className="mt-10 scroll-mt-6 text-2xl font-bold text-text first:mt-0">{children}</h2>
	),
	p: ({ children }: { children?: React.ReactNode }) => <p className="leading-relaxed">{children}</p>,
	strong: ({ children }: { children?: React.ReactNode }) => <strong className="font-semibold text-text">{children}</strong>,
	ul: ({ children }: { children?: React.ReactNode }) => <ul className="list-disc space-y-2 pl-6">{children}</ul>,
	li: ({ children }: { children?: React.ReactNode }) => <li>{children}</li>,
	hr: () => <hr className="my-10 border-text/15" />,
	blockquote: ({ children }: { children?: React.ReactNode }) => (
		<blockquote className="border-l-4 border-primary/40 pl-4 text-text/90 italic">{children}</blockquote>
	),
	a: ({ children, href }: { children?: React.ReactNode; href?: string }) => (
		<a
			href={href}
			className="font-semibold text-primary underline underline-offset-4 hover:text-primary/80"
			target="_blank"
			rel="noreferrer"
		>
			{children}
		</a>
	),
} satisfies React.ComponentProps<typeof ReactMarkdown>["components"];

export default function LegalMarkdown({ source }: { source: string }) {
	return (
		<ReactMarkdown remarkPlugins={[remarkGfm]} components={components}>
			{source.trim()}
		</ReactMarkdown>
	);
}
