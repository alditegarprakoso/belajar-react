import { memo } from "react";

type searchProps = {
  onSearch: (text: string) => void;
};

function Search(props: searchProps) {
  console.log("Call Search Component");
  const { onSearch } = props;
  return (
    <>
      <input
        type="text"
        placeholder="Search..."
        onChange={(e) => onSearch(e.target.value)}
      />
    </>
  );
}

export default memo(Search);
