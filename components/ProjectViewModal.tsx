import { ArrowUpRight, X } from "lucide-react";
import { AnimatePresence, motion } from "motion/react";
import Image from "next/image";
import { useEffect } from "react";
import { RemoveScrollBar } from "react-remove-scroll-bar";

type Props = {
  title: string;
  description: string;
  imageUrl: string;
  showModal: boolean;
  onClose: () => void;
};

const ProjectViewModal = ({
  title,
  description,
  imageUrl,
  showModal,
  onClose,
}: Props) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    if (showModal) window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [showModal, onClose]);

  return (
    <AnimatePresence>
      {showModal && (
        <>
          <RemoveScrollBar />

          {/* Backdrop */}
          <motion.div
            key="backdrop"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.35, ease: "easeOut" }}
            onClick={onClose}
            className="fixed inset-0 z-50"
            style={{
              background:
                "radial-gradient(ellipse at center, rgba(0,0,0,0.85) 0%, rgba(0,0,0,0.97) 100%)",
              backdropFilter: "blur(20px)",
              WebkitBackdropFilter: "blur(20px)",
            }}
          />

          {/* Modal */}
          <motion.div
            key="modal"
            role="dialog"
            aria-modal={true}
            aria-label={title}
            initial={{ opacity: 0, y: 32, scale: 0.97 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.97 }}
            transition={{
              duration: 0.4,
              ease: [0.22, 1, 0.36, 1],
            }}
            onClick={(e) => e.stopPropagation()}
            className="fixed inset-0 z-50 flex items-center justify-center pointer-events-none px-4 py-6 md:py-10"
          >
            <div
              className="pointer-events-auto relative w-full max-w-5xl flex flex-col rounded-2xl overflow-hidden"
              style={{
                background:
                  "linear-gradient(145deg, #0f0f0f 0%, #0a0a0a 60%, #0d0d0d 100%)",
                border: "1px solid rgba(255,255,255,0.07)",
                boxShadow:
                  "0 0 0 1px rgba(255,255,255,0.03), 0 32px 80px rgba(0,0,0,0.8), 0 8px 32px rgba(0,0,0,0.6), inset 0 1px 0 rgba(255,255,255,0.06)",
                maxHeight: "90vh",
              }}
            >
              {/* Top accent line */}
              <div
                className="absolute top-0 left-0 right-0 h-px"
                style={{
                  background:
                    "linear-gradient(90deg, transparent 0%, rgba(52,211,153,0.5) 30%, rgba(52,211,153,0.8) 50%, rgba(52,211,153,0.5) 70%, transparent 100%)",
                }}
              />

              {/* Header */}
              <div className="flex items-start justify-between px-7 pt-6 pb-5 shrink-0">
                <div className="flex-1 pr-8">
                  {/* Label */}
                  <div className="flex items-center gap-2 mb-2.5">
                    <span
                      className="inline-flex items-center gap-1.5 text-[10px] font-semibold tracking-widest uppercase"
                      style={{ color: "rgba(52,211,153,0.8)" }}
                    >
                      <span
                        className="w-1 h-1 rounded-full bg-emerald-400 animate-pulse"
                        style={{ animationDuration: "2s" }}
                      />
                      Project Preview
                    </span>
                  </div>

                  {/* Title */}
                  <h2
                    className="text-xl md:text-2xl font-bold tracking-tight text-white leading-snug"
                    style={{ letterSpacing: "-0.02em" }}
                  >
                    {title}
                  </h2>
                </div>

                {/* Close button */}
                <motion.button
                  whileHover={{ scale: 1.08 }}
                  whileTap={{ scale: 0.93 }}
                  onClick={onClose}
                  className="shrink-0 flex items-center justify-center w-8 h-8 rounded-lg transition-colors duration-200"
                  style={{
                    background: "rgba(255,255,255,0.04)",
                    border: "1px solid rgba(255,255,255,0.08)",
                    color: "rgba(255,255,255,0.5)",
                  }}
                  onMouseEnter={({ currentTarget }) => {
                    currentTarget.style.background = "rgba(255,255,255,0.09)";
                    (currentTarget as HTMLButtonElement).style.color =
                      "rgba(255,255,255,0.9)";
                  }}
                  onMouseLeave={(e) => {
                    (e.currentTarget as HTMLButtonElement).style.background =
                      "rgba(255,255,255,0.04)";
                    (e.currentTarget as HTMLButtonElement).style.color =
                      "rgba(255,255,255,0.5)";
                  }}
                  aria-label="Close modal"
                >
                  <X className="w-4 h-4" />
                </motion.button>
              </div>

              {/* Divider */}
              <div
                className="mx-7 shrink-0"
                style={{
                  height: "1px",
                  background:
                    "linear-gradient(90deg, transparent, rgba(255,255,255,0.06) 20%, rgba(255,255,255,0.06) 80%, transparent)",
                }}
              />

              {/* Description */}
              <div className="px-7 py-4 shrink-0">
                <p
                  className="text-sm leading-relaxed"
                  style={{ color: "rgba(180,180,180,0.75)", maxWidth: "72ch" }}
                >
                  {description}
                </p>
              </div>

              {/* Image area */}
              <div className="px-7 pb-7 overflow-y-auto flex-1 min-h-0 no-scrollbar">
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.15, duration: 0.4, ease: "easeOut" }}
                  className="relative w-full rounded-xl overflow-hidden group"
                  style={{
                    border: "1px solid rgba(255,255,255,0.07)",
                    boxShadow:
                      "0 4px 24px rgba(0,0,0,0.5), inset 0 1px 0 rgba(255,255,255,0.04)",
                  }}
                >
                  {/* Corner decorators */}
                  <span
                    className="absolute top-0 left-0 w-4 h-4 z-10 pointer-events-none"
                    style={{
                      borderTop: "1.5px solid rgba(52,211,153,0.4)",
                      borderLeft: "1.5px solid rgba(52,211,153,0.4)",
                      borderRadius: "0 0 4px 0",
                    }}
                  />
                  <span
                    className="absolute top-0 right-0 w-4 h-4 z-10 pointer-events-none"
                    style={{
                      borderTop: "1.5px solid rgba(52,211,153,0.4)",
                      borderRight: "1.5px solid rgba(52,211,153,0.4)",
                      borderRadius: "0 0 0 4px",
                    }}
                  />
                  <span
                    className="absolute bottom-0 left-0 w-4 h-4 z-10 pointer-events-none"
                    style={{
                      borderBottom: "1.5px solid rgba(52,211,153,0.4)",
                      borderLeft: "1.5px solid rgba(52,211,153,0.4)",
                      borderRadius: "0 4px 0 0",
                    }}
                  />
                  <span
                    className="absolute bottom-0 right-0 w-4 h-4 z-10 pointer-events-none"
                    style={{
                      borderBottom: "1.5px solid rgba(52,211,153,0.4)",
                      borderRight: "1.5px solid rgba(52,211,153,0.4)",
                      borderRadius: "4px 0 0 0",
                    }}
                  />

                  <Image
                    src={imageUrl}
                    alt={title}
                    width={1500}
                    height={1200}
                    className="w-full h-auto object-cover group-hover:scale-[1.01] transition-transform duration-700 ease-out"
                  />

                  {/* Hover overlay hint */}
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center pointer-events-none">
                    <span
                      className="flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-medium"
                      style={{
                        background: "rgba(0,0,0,0.65)",
                        backdropFilter: "blur(8px)",
                        border: "1px solid rgba(255,255,255,0.12)",
                        color: "rgba(255,255,255,0.8)",
                      }}
                    >
                      <ArrowUpRight className="w-3.5 h-3.5" />
                      Full Preview
                    </span>
                  </div>
                </motion.div>
              </div>

              {/* Footer */}
              <div
                className="px-7 py-3.5 shrink-0 flex items-center justify-between"
                style={{
                  borderTop: "1px solid rgba(255,255,255,0.05)",
                  background: "rgba(255,255,255,0.015)",
                }}
              >
                <span
                  className="text-[11px] tracking-wide"
                  style={{ color: "rgba(255,255,255,0.2)" }}
                >
                  Press{" "}
                  <kbd
                    className="px-1.5 py-0.5 rounded text-[10px] font-mono"
                    style={{
                      background: "rgba(255,255,255,0.07)",
                      border: "1px solid rgba(255,255,255,0.1)",
                      color: "rgba(255,255,255,0.35)",
                    }}
                  >
                    esc
                  </kbd>{" "}
                  to close
                </span>
                <motion.button
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                  onClick={onClose}
                  className="text-[11px] tracking-wide transition-colors duration-200"
                  style={{ color: "rgba(52,211,153,0.5)" }}
                  onMouseEnter={(e) =>
                    ((e.currentTarget as HTMLButtonElement).style.color =
                      "rgba(52,211,153,0.9)")
                  }
                  onMouseLeave={(e) =>
                    ((e.currentTarget as HTMLButtonElement).style.color =
                      "rgba(52,211,153,0.5)")
                  }
                >
                  Dismiss
                </motion.button>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default ProjectViewModal;
