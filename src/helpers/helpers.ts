import { SyntheticEvent } from "react";
import { useDispatch } from "react-redux";
export function defaultImage(e: SyntheticEvent<HTMLImageElement>) {
  e.currentTarget.src =
    "https://thurstonchamber.com/wp-content/uploads/2020/10/Image-Coming-Soon.jpg";
}

// export function notification(index: number) {
//   let dispatch = useDispatch();
//   dispatch(add(index))
// }
