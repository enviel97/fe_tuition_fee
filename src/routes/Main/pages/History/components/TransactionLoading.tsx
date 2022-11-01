import { pxToRem } from "@helpers/cast";
import useBreakpoint from "@hooks/useBreakpoint";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";

const Loading = () => {
  const breakpoint = useBreakpoint();
  return (
    <>
      <tbody>
        {Array.from({ length: 6 }, (_, index) => (
          <SkeletonTheme
            highlightColor='#121212'
            baseColor='#212121'
            height={pxToRem(40)}
          >
            <tr key={index}>
              <th scope='row'>
                <Skeleton width={pxToRem(100)} />
              </th>
              <td>
                <Skeleton width={pxToRem(500)} />
              </td>
              <td>{<Skeleton width={pxToRem(70)} />}</td>
              {breakpoint.up("tablet") && (
                <>
                  <td>
                    <Skeleton width={pxToRem(120)} />
                  </td>
                  <td>
                    <Skeleton />
                  </td>
                </>
              )}
            </tr>
          </SkeletonTheme>
        ))}
      </tbody>
    </>
  );
};
export default Loading;
