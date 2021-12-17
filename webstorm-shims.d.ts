// Taken from https://github.com/antfu/unplugin-icons/issues/128#issuecomment-992718883

declare module "~icons/*" {
  import { FunctionalComponent, SVGAttributes } from "vue"
  const component: FunctionalComponent<SVGAttributes>
  export default component
}
