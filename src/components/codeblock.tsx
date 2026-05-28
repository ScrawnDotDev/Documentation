'use client';
import { Check, Clipboard } from 'lucide-react';
import React, {
  Children,
  type ComponentProps,
  createContext,
  type HTMLAttributes,
  type ReactElement,
  type ReactNode,
  type RefObject,
  use,
  useMemo,
  useRef,
  useState,
} from 'react';
import { cn } from '../lib/cn';
import { buttonVariants } from './ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from './ui/tabs';
import { mergeRefs } from '../lib/merge-refs';

export interface CodeBlockProps extends ComponentProps<'figure'> {
  icon?: ReactNode;
  allowCopy?: boolean;
  keepBackground?: boolean;
  viewportProps?: HTMLAttributes<HTMLElement>;
  'data-line-numbers'?: boolean;
  'data-line-numbers-start'?: number;
  textSize?: string;

  Actions?: (props: { className?: string; children?: ReactNode }) => ReactNode;
}

const TabsContext = createContext<{
  containerRef: RefObject<HTMLDivElement | null>;
  nested: boolean;
} | null>(null);

export function Pre(props: ComponentProps<'pre'>) {
  return (
    <pre
      {...props}
      className={cn(
        'min-w-full w-max *:flex *:flex-col overflow-x-auto',
        props.className,
      )}
    >
      {props.children}
    </pre>
  );
}

const langColors: Record<string, string> = {
  ts: 'text-blue-400 bg-blue-400/10',
  tsx: 'text-blue-400 bg-blue-400/10',
  js: 'text-yellow-400 bg-yellow-400/10',
  jsx: 'text-yellow-400 bg-yellow-400/10',
  python: 'text-green-400 bg-green-400/10',
  py: 'text-green-400 bg-green-400/10',
  rust: 'text-orange-400 bg-orange-400/10',
  rs: 'text-orange-400 bg-orange-400/10',
  go: 'text-cyan-400 bg-cyan-400/10',
  bash: 'text-zinc-400 bg-zinc-400/10',
  sh: 'text-zinc-400 bg-zinc-400/10',
  json: 'text-pink-400 bg-pink-400/10',
  yaml: 'text-purple-400 bg-purple-400/10',
  yml: 'text-purple-400 bg-purple-400/10',
  html: 'text-orange-400 bg-orange-400/10',
  css: 'text-sky-400 bg-sky-400/10',
  sql: 'text-indigo-400 bg-indigo-400/10',
  dockerfile: 'text-blue-400 bg-blue-400/10',
  mdx: 'text-emerald-400 bg-emerald-400/10',
  markdown: 'text-emerald-400 bg-emerald-400/10',
  md: 'text-emerald-400 bg-emerald-400/10',
};

export function PreWithShell({ children, ...props }: ComponentProps<'pre'>) {
  const childrenArray = Children.toArray(children);
  const codeElement = childrenArray.find(
    (child): child is ReactElement =>
      React.isValidElement(child) && child.type === 'code',
  ) as ReactElement | undefined;

  if (!codeElement) {
    return <pre {...props}>{children}</pre>;
  }

  const codeProps = codeElement.props as ComponentProps<'code'>;
  const preClassName = (props as Record<string, string>).className ?? '';

  let lang =
    codeProps.className
      ?.split(' ')
      .find((v) => v.startsWith('language-'))
      ?.slice('language-'.length) ??
    preClassName
      .split(' ')
      .find((v) => v.startsWith('language-'))
      ?.slice('language-'.length) ??
    (props as Record<string, string>)['data-language'] ??
    'text';

  if (lang === 'mdx') lang = 'md';

  return (
    <CodeBlock lang={lang} keepBackground>
      <pre
        className={cn('min-w-full w-max *:flex *:flex-col overflow-x-auto', props.className)}
      >
        {codeElement}
      </pre>
    </CodeBlock>
  );
}

export function CodeBlock({
  ref,
  title,
  allowCopy = true,
  keepBackground = false,
  icon,
  viewportProps = {},
  children,
  lang,
  code,
  textSize = 'text-sm',
  Actions = (props) => (
    <div {...props} className={cn('empty:hidden', props.className)} />
  ),
  ...props
}: CodeBlockProps & {
  lang?: string;
  code?: string;
}) {
  const inTab = use(TabsContext) !== null;
  const areaRef = useRef<HTMLDivElement>(null);
  const [copied, setCopied] = useState(false);
  const displayLang = lang ?? 'text';

  return (
    <figure
      ref={ref}
      dir="ltr"
      {...props}
      tabIndex={-1}
      className={cn(
        'group relative flex w-full flex-col bg-white text-black dark:bg-[#111] dark:text-white',
        !inTab && 'my-6 border-4 border-black shadow-[12px_12px_0px_0px_rgba(0,0,0,1)] dark:border-white dark:shadow-[12px_12px_0px_0px_rgba(255,255,255,1)]',
        'not-prose',
        props.className,
      )}
    >
      {/* Header */}
      <div className="flex items-center justify-between border-b-4 border-black bg-yellow-400 px-4 py-3 dark:border-white">
        {/* Window dots */}
        <div className="flex gap-2">
          <div className="h-4 w-4 border-2 border-black bg-white" />
          <div className="h-4 w-4 border-2 border-black bg-black" />
        </div>

        {/* Title or Lang */}
        <span className="font-mono text-xs font-black uppercase tracking-widest text-black">
          {title || displayLang}
        </span>

        {/* Copy button */}
        <div className="flex items-center gap-1 text-black">
          {Actions({
            className: 'flex',
            children: (
              <button
                type="button"
                onClick={() => {
                  const text =
                    areaRef.current?.querySelector('pre')?.textContent ?? '';
                  void navigator.clipboard.writeText(text);
                  setCopied(true);
                  setTimeout(() => setCopied(false), 1500);
                }}
                className={cn(
                  buttonVariants({
                    size: 'icon-xs',
                    className:
                      'text-black transition-opacity hover:opacity-70',
                  }),
                )}
                aria-label={copied ? 'Copied' : 'Copy code'}
              >
                {copied ? (
                  <Check className="size-4" />
                ) : (
                  <Clipboard className="size-4" />
                )}
              </button>
            ),
          })}
        </div>
      </div>

      {/* Code area */}
      <div
        ref={areaRef}
        {...viewportProps}
        role="region"
        tabIndex={0}
        className={cn(
          'overflow-x-auto p-4 sm:p-6 font-mono leading-relaxed',
          textSize,
          'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-black dark:focus-visible:ring-white',
          'fd-scroll-container',
          viewportProps.className,
        )}
        style={
          {
            counterSet: props['data-line-numbers']
              ? `line ${Number(props['data-line-numbers-start'] ?? 1) - 1}`
              : undefined,
            ...viewportProps.style,
          } as object
        }
      >
        {children}
      </div>
    </figure>
  );
}

export { CodeBlock as CodeBlockComponent };

export function CodeBlockTabs({ ref, ...props }: ComponentProps<typeof Tabs>) {
  const containerRef = useRef<HTMLDivElement>(null);
  const nested = use(TabsContext) !== null;

  return (
    <Tabs
      ref={mergeRefs(containerRef, ref)}
      {...props}
      className={cn(
        'border-4 border-black bg-white shadow-[12px_12px_0px_0px_rgba(0,0,0,1)] dark:border-white dark:bg-[#111] dark:shadow-[12px_12px_0px_0px_rgba(255,255,255,1)]',
        !nested && 'my-6',
        props.className
      )}
    >
      <TabsContext
        value={useMemo(
          () => ({
            containerRef,
            nested,
          }),
          [nested],
        )}
      >
        {props.children}
      </TabsContext>
    </Tabs>
  );
}

export function CodeBlockTabsList(props: ComponentProps<typeof TabsList>) {
  return (
    <TabsList
      {...props}
      className={cn(
        'flex flex-row overflow-x-auto border-b-4 border-black bg-yellow-400 dark:border-white',
        props.className
      )}
    >
      {props.children}
    </TabsList>
  );
}

export function CodeBlockTabsTrigger({ children, ...props }: ComponentProps<typeof TabsTrigger>) {
  return (
    <TabsTrigger
      {...props}
      className={cn(
        'group relative inline-flex items-center gap-2 px-4 py-3 font-mono text-xs font-black uppercase tracking-widest text-black transition-colors hover:bg-black/10 data-[state=active]:bg-black data-[state=active]:text-white [&_svg]:size-4',
        props.className,
      )}
    >
      {children}
    </TabsTrigger>
  );
}

export function CodeBlockTab(props: ComponentProps<typeof TabsContent>) {
  return <TabsContent {...props} />;
}
