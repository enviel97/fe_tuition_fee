import { fadeInOut } from "@common/variants";
import { AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import BillList from "./pages/BillList";
import BillSearch from "./pages/BillSearch";
import Empty from "./pages/Empty";
import Loading from "./pages/Loading";
import { getBills } from "./repos/bill.repo";
import { BillContainer } from "./styles/decorates/bill.decorate";

const Bills = () => {
  const [bills, setBills] = useState<Bill[]>();

  useEffect(() => {
    getBills()
      .then((res) => {
        if (res.code === 304) return;
        setBills(res.data?.bills ?? []);
      })
      .catch((error) => {
        toast.error(error.message ?? error, {
          position: "bottom-center",
          pauseOnFocusLoss: false,
          pauseOnHover: false,
        });
      });
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
