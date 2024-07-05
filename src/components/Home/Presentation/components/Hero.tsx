import { motion } from "framer-motion";

export function Hero(): JSX.Element {
  return (
    <motion.div
      className="relative h-80 xl:h-[36rem] w-full max-w-[40rem]"
      initial={{ opacity: 0, x: 256 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 1, delay: 0, ease: "easeIn" }}
    >
      <img
        className="absolute object-cover w-[calc(100%-2rem)] h-[calc(100%-2rem)] bottom-0 right-0 rounded-2xl"
        src="https://images.unsplash.com/photo-1660721858662-9ad9f37447f7?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        alt=""
      />
      <img
        className="absolute object-cover w-[calc(100%-2rem)] h-[calc(100%-2rem)] top-0 rounded-2xl"
        src="https://images.unsplash.com/photo-1512099053734-e6767b535838?q=80&w=1928&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        alt=""
      />
    </motion.div>
  );
}
