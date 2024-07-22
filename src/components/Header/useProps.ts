import { useEffect, useState } from "react";

export const useProps = () => {
  const [show, setShow] = useState(false);

  useEffect(() => {
    // ①scrollが100を超えたか判定
    const handleShow = () => {
      setShow(window.scrollY > 100);
    };

    // ②scrollイベントを追加
    window.addEventListener("scroll", handleShow);

    // ③scrollイベントを削除(アンマウント)
    return () => {
      window.removeEventListener("scroll", handleShow);
    };
  }, []);

  return {
    show,
  };
};
