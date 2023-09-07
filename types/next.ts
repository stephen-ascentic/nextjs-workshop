export interface NextComponentProps {
 searchParams?: Record<string, string>;
}

export interface NextComponentPropsWithParams<T> extends NextComponentProps {
 params: T;
}
