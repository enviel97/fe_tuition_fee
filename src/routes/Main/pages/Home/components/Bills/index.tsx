import { fadeInOut } from "@common/variants";
import useAuthenticate from "@hooks/useAuthenticate";
import { AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import { Navigate } from "react-router-dom";
import { toast } from "react-toastify";
import BillList from "./pages/BillList";
import BillSearch from "./pages/BillSearch";
import Empty from "./pages/Empty";
import Loading from "./pages/Loading";
import { getBills } from "./repos/bill.repo";
import { BillContainer } from "./styles/decorates/bill.decorate";

const Bills = () => {
  const [bills, setBills] = useState<Bill[]>();
  const { setIsAuthenticate } = useAuthenticate();

  useEffect(() => {
    getBills()
      .then((res) => {
        if (res.code === 304) return;
        setBills(res.data?.bills ?? []);
      })
      .catch((error) => {
        if (error && error.code === 401) {
          setIsAuthenticate(false);
          return <Navigate to={"auth"} replace />;
        }
        toast.error(error.message ?? error, {
          position: "bottom-center",
          pauseOnFocusLoss: false,
          pauseOnHover: false,
        });
      });
    // eslint-disable-next-line
  }, []);

  return (
    <AnimatePresence mode='wait'>
      <BillContainer variants={fadeInOut} initial='outBottom' animate='in'>
        <BillSearch />
        {!bills ? (
          <Loading />
        ) : bills.length === 0 ? (
          <Empty />
        ) : (
          <BillList bills={bills!} />
        )}
      </BillContainer>
    </AnimatePresence>
  );
};

export default Bills;
