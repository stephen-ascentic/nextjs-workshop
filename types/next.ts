/**
 * NextJS doesn't provide a type for the searchParams object, so we have to create our own.
 */
export interface NextComponentProps {
  searchParams?: Record<string, string>;
}

/**
 * NextJS doesn't provide a type for the params object, so we have to create our own.
 * This inherits from `NextComponentProps` to provide the searchParams object.
 * @template T The type of the params object.
 */
export interface NextComponentPropsWithParams<T> extends NextComponentProps {
  params: T;
}
