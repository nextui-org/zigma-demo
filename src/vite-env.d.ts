/// <reference types="vite/client" />

declare module "*.svg" {
  const content: React.FunctionComponent<React.SVGAttributes<SVGElement>>;

  // @ts-expect-error - This is a workaround to make Vite recognize SVGs as modules
  export default content;
}
