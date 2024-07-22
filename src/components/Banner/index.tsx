import { Layout } from "./Layout";
import { useProps } from "./useProps";

export default function Banner() {
  // 別解
  // const { movie, truncate } = useProps();
  // return <Layout movie={movie} truncate={truncate} />;

  // ①propsをスプレッド構文で渡す
  return <Layout {...useProps()} />;
}
