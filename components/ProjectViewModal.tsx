import { X } from "lucide-react";
import { AnimatePresence, motion } from "motion/react";
import Image from "next/image";
import { RemoveScrollBar } from "react-remove-scroll-bar";

type Props = {
  title: string;
  description: string;
  imageUrl: string;
  showModal: boolean;
  onClose: () => void;
};
const effect = {
  hidden: {
    scale: 0,
    opacity: 0,
  },
  visible: {
    //y: "0",
    scale: 1,
    opacity: 1,
    transition: {
      type: "spring",
      stiffness: 600,
      damping: 30,
    },
  },
  exit: {
    y: "100vh",
    scale: 0,
    opacity: 0,
  },
};

const overlayEffect = {
  hidden: { opacity: 0, display: "none" },
  visible: { opacity: 1, display: "flex" },
  exit: { opacity: 0 },
};

const ProjectViewModal = ({
  title,
  description,
  imageUrl,
  showModal,
  onClose,
}: Props) => {
  const handleKeyDown = (event: KeyboardEvent) => {
    if (!showModal || event.key !== "Escape") return;
    onClose();
  };

  return (
    <AnimatePresence>
      {showModal && <RemoveScrollBar />}
      <motion.div
        key="modal"
        initial="hidden"
        animate={showModal ? "visible" : "hidden"}
        exit="exit"
        variants={overlayEffect}
        transition={{ duration: 0.3 }}
        onClick={onClose}
        className="fixed inset-0 bg-black/10 backdrop-blur-sm flex items-center justify-center z-50"
      >
        {/* overlay */}

        <motion.div
          tabIndex={-1}
          role="dialog"
          aria-modal={true}
          aria-label={title}
          className={`relative px-4 py-3.5 bg-[#0a0a0a] rounded-xl shadow-lg w-full max-w-7xl h-full max-h-[80vh] overflow-auto border border-[#181919]`}
          variants={effect}
          initial="hidden"
          animate={showModal ? "visible" : "hidden"}
          exit="exit"
          onClick={(event) => event.stopPropagation()}
        >
          <div className="flex items-center justify-between mb-2">
            <h2 className="font-bold">{title}</h2>
            <button
              className="cursor-pointer p-1.5 border border-[#181919] rounded-md hover:bg-[#181919]"
              onClick={onClose}
            >
              <X className="size-5" />
            </button>
          </div>
          <p className="text-sm text-[#a0a0a0] mb-4 w-5xl">{description}</p>
          <div className="w-full max-h-[86%] rounded-lg  overflow-y-auto no-scrollbar">
            <Image
              className="size-full object-cover"
              src={imageUrl}
              alt={title}
              width={1500}
              height={1200}
            />
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};

export default ProjectViewModal;
