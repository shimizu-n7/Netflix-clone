import { Layout } from "./Layout";
import { useProps } from "./useProps";

type Props = {
  title: string;
  fetchUrl: string;
  isLargeRow?: boolean;
};

export const Row = ({ title, fetchUrl, isLargeRow }: Props) => {
  // ...usePropsは、以下と同様
  // const props = useProps(fetchUrl);
  // {...props}
  return (
    <Layout title={title} isLargeRow={isLargeRow} {...useProps(fetchUrl)} />
  );
};
