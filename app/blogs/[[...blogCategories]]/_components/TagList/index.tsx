'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

interface TagListProps {
  tags: string[];
}

export default function TagList({ tags }: TagListProps) {
  const currentPathname = usePathname();
  const pathSegments = currentPathname.split('/').splice(3);

  const filteredTags = tags.filter(t => !pathSegments.includes(t));

  if (filteredTags.length === 0) {
    return null;
  }

  return (
    <div className="flex gap-x-2">
      <span>Tags:</span>
      {filteredTags.map(tag => (
        <Link
          key={tag}
          href={`${currentPathname}${!currentPathname.includes('categories') ? '/categories' : ''}/${tag}`}>
          <div className="bg-red-500 w-fit rounded-md px-2 py-1 text-xs text-white border-transparent hover:scale-105">
            <span>{tag}</span>
          </div>
        </Link>
      ))}
    </div>
  );
}
