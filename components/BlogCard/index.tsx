"use client";

import blogCardClasses from "./index.module.css";

interface BlogCardProps {
  title: string;
  description: string;
  tags?: string[];
}

const BlogCard = ({ title, description, tags }: BlogCardProps) => {
  const shouldRenderFooter = tags && tags.length > 0;

  return (
    <div className={blogCardClasses.card}>
      <header>
        <h1>{title}</h1>
        <div className="w-1/4 h-1 mt-2 bg-black" />
      </header>
      <p>{description}</p>
      {shouldRenderFooter && (
        <footer>
          {tags && (
            <div className="flex gap-x-2">
              {tags.map((t) => (
                <div
                  key={t}
                  className="bg-red-500 w-fit rounded-md px-2 py-1 text-xs text-white border-transparent"
                >
                  <span>{t}</span>
                </div>
              ))}
            </div>
          )}
        </footer>
      )}
    </div>
  );
};

export default BlogCard;
