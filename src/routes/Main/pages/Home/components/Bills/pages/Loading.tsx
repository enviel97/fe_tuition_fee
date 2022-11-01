import Divider from "@components/Divider";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import {
  BillCard,
  BillContainer,
  BillListContainer,
  CardHeader,
  CardSubjects,
  CardSubjectsFooter,
} from "../styles/decorates/bill.decorate";

const Loading = () => {
  return (
    <BillContainer>
      <BillListContainer>
        {new Array(9).fill(0).map((_, index) => (
          <SkeletonTheme
            key={index}
            baseColor='#121212'
            highlightColor='#212121'
          >
            <BillCard style={{ height: "18rem" }}>
              <CardHeader>
                <h5 className='header-title'>{<Skeleton count={1} />}</h5>
                <p className='header-subtitle'>{<Skeleton count={1} />}</p>
              </CardHeader>
              <Divider label='Subjects' />
              <CardSubjects>
                <Skeleton count={4} style={{ margin: "0.2em 0" }} />
              </CardSubjects>

              <Divider label='~' />
              <CardSubjectsFooter>
                <Skeleton
                  count={1}
                  style={{ width: "12.5rem", height: "1.2rem" }}
                />
              </CardSubjectsFooter>
            </BillCard>
          </SkeletonTheme>
        ))}
      </BillListContainer>
    </BillContainer>
  );
};
export default Loading;
