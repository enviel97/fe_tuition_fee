import Divider from "@components/Divider";
import { useModals } from "@components/Modal/hooks/useModals";
import { memo, Fragment } from "react";
import styled from "styled-components";

const TermContent = styled.p`
  text-align: justify;
  font-size: 0.9rem;
  margin: 0;
  padding: 0;

  & span {
    display: -webkit-box;
    -webkit-line-clamp: 7;
    -webkit-box-orient: vertical;
    overflow: hidden;
  }
`;

const TermContentShow = styled.span`
  font-weight: bold;
  width: 100%;
  cursor: pointer;

  &:hover {
    scale: 1.02;
    color: ${({ theme }) => theme.secondaryColor};
  }
  &:active {
    scale: 0.98;
  }
`;

const ModalTermContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  align-items: center;
  padding: 4em;
  overflow: auto;
  & h6 {
    font-weight: bold;
    font-size: 1.275em;
    margin-bottom: 1em;
  }
  & p {
    font-size: 1em;
  }
`;

const FormPaymentTerm = () => {
  const modal = useModals();
  return (
    <Fragment>
      <Divider label='Terms' />
      <TermContent>
        <span>
          + Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis
          hic modi sit incidunt corrupti magnam quam laborum, magni aliquam
          ratione laudantium facere pariatur laboriosam quae debitis ipsum
          provident! Id, harum?...
        </span>
        <TermContentShow
          onClick={() => {
            modal.show(
              // Just Lorem paraph
              <ModalTermContainer>
                <h6> Term </h6>
                <p>
                  + Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Corporis hic modi sit incidunt corrupti magnam quam laborum,
                  magni aliquam ratione laudantium facere pariatur laboriosam
                  quae debitis ipsum provident! Id, harum?
                </p>
                <p>
                  +Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  Recusandae saepe, qui dolorum illum dolore quos consectetur
                  corrupti cumque hic aperiam nam porro similique aliquid
                  voluptatibus sed neque perspiciatis? Voluptatibus,
                  exercitationem!
                </p>
                <p>
                  +Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Placeat dolorem, perspiciatis pariatur incidunt eaque est
                  harum repudiandae hic distinctio. Eaque odit doloremque
                  aliquam deserunt culpa quaerat quos hic dignissimos. Rerum?
                </p>
                <p>
                  +Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Placeat dolorem, perspiciatis pariatur incidunt eaque est
                  harum repudiandae hic distinctio. Eaque odit doloremque
                  aliquam deserunt culpa quaerat quos hic dignissimos. Rerum?
                </p>
                <p>
                  +Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Placeat dolorem, perspiciatis pariatur incidunt eaque est
                  harum repudiandae hic distinctio. Eaque odit doloremque
                  aliquam deserunt culpa quaerat quos hic dignissimos. Rerum?
                </p>
                <p>
                  +Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Placeat dolorem, perspiciatis pariatur incidunt eaque est
                  harum repudiandae hic distinctio. Eaque odit doloremque
                  aliquam deserunt culpa quaerat quos hic dignissimos. Rerum?
                </p>
              </ModalTermContainer>
            );
          }}
        >
          Show More
        </TermContentShow>
      </TermContent>
    </Fragment>
  );
};

export default memo(FormPaymentTerm);
