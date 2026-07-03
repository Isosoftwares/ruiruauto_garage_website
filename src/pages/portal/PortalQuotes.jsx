import React, { useEffect, useState } from "react";
import { useClientAuth } from "../../hooks/useClientAuth";
import {
  DocumentCheckIcon,
  XMarkIcon,
  CheckIcon,
  ClockIcon,
  ChevronRightIcon,
  ArrowDownTrayIcon,
  ArrowPathIcon,
} from "@heroicons/react/24/outline";
import { Modal } from "@mantine/core";
import { toast } from "react-toastify";
import { motion, AnimatePresence } from "framer-motion";
import { pdf } from "@react-pdf/renderer";
import QuotePDF from "../../components/documents/QuotePDF";

const PortalQuotes = () => {
  const { axiosClient } = useClientAuth();
  const [quotes, setQuotes] = useState([]);
  const [selectedQuote, setSelectedQuote] = useState(null);
  const [loading, setLoading] = useState(true);
  const [actionLoading, setActionLoading] = useState(false);
  const [generatingPdfId, setGeneratingPdfId] = useState(null);

  const fetchQuotes = async () => {
    try {
      const response = await axiosClient.get("/client-portal/quotes");
      setQuotes(response.data.data || []);
    } catch (error) {
      console.error("Failed to load quotes", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchQuotes();
  }, []);

  const downloadQuotePDF = async (quote) => {
    setGeneratingPdfId(quote._id);
    try {
      const doc = <QuotePDF quote={quote} />;
      const blob = await pdf(doc).toBlob();
      const urlObj = URL.createObjectURL(blob);
      const a = window.document.createElement("a");
      a.href = urlObj;
      a.download = `Estimate-${quote.quoteNumber}.pdf`;
      a.click();
      URL.revokeObjectURL(urlObj);
      toast.success("Estimate PDF downloaded successfully!");
    } catch (err) {
      console.error("PDF generation failed:", err);
      toast.error("Failed to generate PDF estimate download");
    } finally {
      setGeneratingPdfId(null);
    }
  };

  const handleUpdateStatus = async (quoteId, status) => {
    setActionLoading(true);
    try {
      const response = await axiosClient.put(`/client-portal/quotes/${quoteId}/status`, {
        status,
      });
      if (response.data.success) {
        toast.success(`Estimate ${status === "accepted" ? "approved" : "declined"} successfully`);
        setSelectedQuote(null);
        fetchQuotes();
      }
    } catch (error) {
      toast.error(error.response?.data?.message || "Failed to update estimate status");
    } finally {
      setActionLoading(false);
    }
  };

  const getStatusBadge = (status) => {
    switch (status) {
      case "accepted":
        return (
          <span className="px-2.5 py-1 bg-green-50 text-green-700 dark:bg-green-500/10 dark:text-green-400 rounded-full text-xs font-bold w-max">
            Approved
          </span>
        );
      case "rejected":
        return (
          <span className="px-2.5 py-1 bg-red-50 text-red-700 dark:bg-red-500/10 dark:text-red-400 rounded-full text-xs font-bold w-max">
            Declined
          </span>
        );
      case "sent":
      case "draft":
        return (
          <span className="px-2.5 py-1 bg-amber-50 text-amber-700 dark:bg-amber-500/10 dark:text-amber-400 rounded-full text-xs font-bold w-max flex items-center gap-1">
            <ClockIcon className="w-3.5 h-3.5" />
            Pending Action
          </span>
        );
      default:
        return (
          <span className="px-2.5 py-1 bg-gray-50 text-gray-700 dark:bg-white/10 dark:text-gray-400 rounded-full text-xs font-bold w-max">
            {status}
          </span>
        );
    }
  };

  if (loading) {
    return (
      <div className="flex justify-center items-center h-96">
        <div className="w-12 h-12 border-4 border-primary border-t-transparent rounded-full animate-spin"></div>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      {/* Header */}
      <div>
        <h1 className="text-lg md:text-2xl font-extrabold text-gray-900 dark:text-white tracking-tight">
          Quotes & Estimates
        </h1>
        <p className="text-xs md:text-sm text-gray-500 dark:text-gray-400 mt-1 font-light">
          Review service quotations and approve or decline work estimates online.
        </p>
      </div>

      {quotes.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
          {quotes.map((quote) => (
            <motion.div
              key={quote._id}
              whileHover={{ y: -3 }}
              className="bg-white dark:bg-dark-lighter p-4 md:p-6 rounded-3xl border border-gray-200 dark:border-white/5 shadow-sm flex flex-col justify-between"
            >
              <div>
                <div className="flex justify-between items-start mb-3">
                  <div>
                    <h3 className="text-sm md:text-lg font-bold text-gray-900 dark:text-white">
                      Estimate {quote.quoteNumber}
                    </h3>
                    <p className="text-[10px] md:text-xs text-gray-400 mt-0.5">
                      Valid Until: {quote.validUntil ? new Date(quote.validUntil).toLocaleDateString() : "N/A"}
                    </p>
                  </div>
                  {getStatusBadge(quote.status)}
                </div>

                <div className="space-y-2 text-xs md:text-sm border-t border-b border-gray-100 dark:border-white/5 py-3 mb-3">
                  <div className="flex justify-between">
                    <span className="text-gray-400">Car Profile:</span>
                    <span className="font-semibold text-gray-800 dark:text-gray-200">
                      {quote.vehicle?.model || "N/A"}{" "}
                      <span className="text-[10px] md:text-xs text-gray-450">({quote.vehicle?.registration || ""})</span>
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-400">Total Items:</span>
                    <span className="font-semibold text-gray-800 dark:text-gray-200">
                      {quote.items ? quote.items.length : 0}
                    </span>
                  </div>
                </div>
              </div>

              <div className="flex justify-between items-center mt-2">
                <div>
                  <p className="text-[10px] md:text-xs text-gray-400">Estimated Total</p>
                  <p className="text-base md:text-xl font-extrabold text-primary mt-0.5">
                    KES {quote.totalAmount.toLocaleString()}
                  </p>
                </div>
                <div className="flex gap-2">
                  <button
                    disabled={generatingPdfId === quote._id}
                    onClick={() => downloadQuotePDF(quote)}
                    className="p-1.5 bg-gray-50 dark:bg-white/5 hover:bg-secondary hover:text-white text-gray-600 dark:text-gray-400 rounded-xl transition-all disabled:opacity-50"
                    title="Download PDF"
                  >
                    {generatingPdfId === quote._id ? (
                      <ArrowPathIcon className="w-3.5 h-3.5 animate-spin" />
                    ) : (
                      <ArrowDownTrayIcon className="w-3.5 h-3.5" />
                    )}
                  </button>
                  <button
                    onClick={() => setSelectedQuote(quote)}
                    className="px-3 py-1.5 bg-gray-50 hover:bg-primary dark:bg-white/5 hover:text-white text-gray-700 dark:text-gray-300 rounded-xl text-xs font-bold flex items-center gap-1.5 transition-all"
                  >
                    <span>Review</span>
                    <ChevronRightIcon className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      ) : (
        <div className="text-center py-20 bg-white dark:bg-dark-lighter rounded-3xl border border-gray-250/50 dark:border-white/5">
          <DocumentCheckIcon className="w-16 h-16 text-gray-300 dark:text-gray-700 mx-auto mb-4" />
          <h3 className="text-lg font-bold text-gray-900 dark:text-white">No estimates found</h3>
          <p className="text-sm text-gray-500 dark:text-gray-400 mt-1 max-w-sm mx-auto font-light leading-relaxed">
            There are currently no active quotes or service estimates registered to your profile.
          </p>
        </div>
      )}

      {/* Quote Review Modal */}
      <Modal
        opened={!!selectedQuote}
        onClose={() => setSelectedQuote(null)}
        centered
        size="lg"
        radius="lg"
        withCloseButton={false}
        padding={0}
        styles={{
          modal: {
            backgroundColor: "transparent",
            boxShadow: "none",
          },
        }}
      >
        {selectedQuote && (
          <div className="bg-white dark:bg-dark-lighter w-full rounded-3xl border border-gray-200 dark:border-white/5 shadow-2xl overflow-hidden max-h-[85vh] flex flex-col">
              {/* Header */}
              <div className="p-6 border-b border-gray-100 dark:border-white/5 flex justify-between items-center bg-gray-50 dark:bg-white/5">
                <div>
                  <h3 className="text-lg font-bold text-gray-900 dark:text-white animate-pulse">
                    Review Quote {selectedQuote.quoteNumber}
                  </h3>
                  <p className="text-xs text-gray-400 mt-0.5">
                    Car: {selectedQuote.vehicle?.model} ({selectedQuote.vehicle?.registration})
                  </p>
                </div>
                <button
                  onClick={() => setSelectedQuote(null)}
                  className="p-1 rounded-full text-gray-400 hover:bg-gray-100 dark:hover:bg-white/10 transition-colors"
                >
                  <XMarkIcon className="w-6 h-6" />
                </button>
              </div>

              {/* Body */}
              <div className="p-6 overflow-y-auto space-y-6 flex-grow">
                {/* Status Indicator */}
                <div className="flex justify-between items-center p-4 bg-gray-50 dark:bg-dark rounded-2xl">
                  <div>
                    <span className="text-xs text-gray-400 uppercase tracking-wider font-bold">Estimate Status</span>
                    <div className="mt-1">{getStatusBadge(selectedQuote.status)}</div>
                  </div>
                  {selectedQuote.validUntil && (
                    <div className="text-right">
                      <span className="text-xs text-gray-400 uppercase tracking-wider font-bold">Valid Until</span>
                      <p className="text-sm font-bold text-gray-900 dark:text-white mt-1">
                        {new Date(selectedQuote.validUntil).toLocaleDateString()}
                      </p>
                    </div>
                  )}
                </div>

                {/* Items */}
                <div className="border border-gray-100 dark:border-white/5 rounded-2xl overflow-hidden">
                  <table className="w-full border-collapse text-sm">
                    <thead>
                      <tr className="bg-gray-50 dark:bg-white/5 border-b border-gray-100 dark:border-white/5 text-gray-650 dark:text-gray-450 font-bold">
                        <th className="p-3 text-left">Repair Service / Part</th>
                        <th className="p-3 text-right">Qty</th>
                        <th className="p-3 text-right">Price</th>
                        <th className="p-3 text-right">Total</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-100 dark:divide-white/5">
                      {selectedQuote.items?.map((item, idx) => (
                        <tr key={idx}>
                          <td className="p-3 font-semibold text-gray-900 dark:text-white">{item.description}</td>
                          <td className="p-3 text-right text-gray-500 dark:text-gray-400">{item.quantity}</td>
                          <td className="p-3 text-right text-gray-500 dark:text-gray-400">KES {item.unitPrice.toLocaleString()}</td>
                          <td className="p-3 text-right font-bold text-gray-950 dark:text-white">KES {item.amount.toLocaleString()}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>

                {/* Totals */}
                <div className="w-72 ml-auto text-sm space-y-2 border-t border-gray-100 dark:border-white/5 pt-4">
                  <div className="flex justify-between text-gray-550 dark:text-gray-400">
                    <span>Subtotal:</span>
                    <span>KES {selectedQuote.subTotal.toLocaleString()}</span>
                  </div>
                  {selectedQuote.laborCharge > 0 && (
                    <div className="flex justify-between text-gray-550 dark:text-gray-400">
                      <span>Labor / Repair Charges:</span>
                      <span>KES {selectedQuote.laborCharge.toLocaleString()}</span>
                    </div>
                  )}
                  {selectedQuote.taxAmount > 0 && (
                    <div className="flex justify-between text-gray-550 dark:text-gray-400">
                      <span>VAT ({selectedQuote.taxRate}%):</span>
                      <span>KES {selectedQuote.taxAmount.toLocaleString()}</span>
                    </div>
                  )}
                  {selectedQuote.discount > 0 && (
                    <div className="flex justify-between text-green-600 font-medium">
                      <span>Discount Offered:</span>
                      <span>- KES {selectedQuote.discount.toLocaleString()}</span>
                    </div>
                  )}
                  <div className="flex justify-between text-base font-extrabold text-gray-900 dark:text-white border-t border-gray-100 dark:border-white/5 pt-2 mt-2">
                    <span>Estimated Total:</span>
                    <span className="text-primary text-lg">KES {selectedQuote.totalAmount.toLocaleString()}</span>
                  </div>
                </div>

                {/* Notes */}
                {selectedQuote.notes && (
                  <div className="bg-amber-500/5 p-4 rounded-2xl border border-amber-500/10 text-xs text-gray-600 dark:text-gray-400">
                    <span className="font-bold block mb-1 text-primary">Garage Notes & Recommendations:</span>
                    {selectedQuote.notes}
                  </div>
                )}
              </div>

              {/* Actions Footer */}
              <div className="p-6 border-t border-gray-100 dark:border-white/5 bg-gray-50 dark:bg-white/5 flex gap-4">
                {(selectedQuote.status === "sent" || selectedQuote.status === "draft") ? (
                  <>
                    <button
                      disabled={actionLoading}
                      onClick={() => handleUpdateStatus(selectedQuote._id, "accepted")}
                      className="flex-grow btn-primary py-2.5 rounded-xl flex items-center justify-center gap-1.5 font-bold text-sm bg-green-600 hover:bg-green-700 shadow-lg shadow-green-500/10 text-white disabled:opacity-50"
                    >
                      <CheckIcon className="w-5 h-5" />
                      <span>Approve Estimate</span>
                    </button>
                    <button
                      disabled={actionLoading}
                      onClick={() => handleUpdateStatus(selectedQuote._id, "rejected")}
                      className="px-6 py-2.5 border border-red-200 dark:border-red-500/20 text-red-650 hover:bg-red-50 dark:hover:bg-red-500/10 rounded-xl text-sm font-bold disabled:opacity-50"
                    >
                      Decline
                    </button>
                  </>
                ) : (
                  <div className="text-xs text-gray-450 dark:text-gray-500 text-center w-full">
                    This estimate has already been processed and is marked as{" "}
                    <span className="font-bold uppercase text-gray-700 dark:text-gray-300">
                      {selectedQuote.status}
                    </span>
                    .
                  </div>
                )}
                <button
                  disabled={generatingPdfId === selectedQuote._id}
                  onClick={() => downloadQuotePDF(selectedQuote)}
                  className="px-4 py-2.5 border border-primary/20 bg-primary/5 hover:bg-primary hover:text-white text-primary rounded-xl text-sm font-bold flex items-center justify-center gap-1.5 transition-all disabled:opacity-50"
                >
                  {generatingPdfId === selectedQuote._id ? (
                    <ArrowPathIcon className="w-4 h-4 animate-spin" />
                  ) : (
                    <ArrowDownTrayIcon className="w-4 h-4" />
                  )}
                  <span>Download PDF</span>
                </button>
                <button
                  onClick={() => setSelectedQuote(null)}
                  className="px-6 py-2.5 border border-gray-250 dark:border-white/10 text-gray-600 dark:text-gray-300 rounded-xl text-sm font-semibold hover:bg-gray-100 dark:hover:bg-white/5 transition-colors"
                >
                  Close
                </button>
              </div>
            </div>
          )}
      </Modal>
    </div>
  );
};

export default PortalQuotes;
