import React, { useEffect, useState } from "react";
import { useClientAuth } from "../../hooks/useClientAuth";
import {
  DocumentTextIcon,
  XMarkIcon,
  CheckCircleIcon,
  ClockIcon,
  ExclamationCircleIcon,
  ArrowDownTrayIcon,
  ArrowPathIcon,
} from "@heroicons/react/24/outline";
import { Modal } from "@mantine/core";
import { motion, AnimatePresence } from "framer-motion";
import { toast } from "react-toastify";
import { pdf } from "@react-pdf/renderer";
import InvoicePDF from "../../components/documents/InvoicePDF";

const PortalInvoices = () => {
  const { axiosClient } = useClientAuth();
  const [invoices, setInvoices] = useState([]);
  const [selectedInvoice, setSelectedInvoice] = useState(null);
  const [loading, setLoading] = useState(true);
  const [filter, setFilter] = useState("all"); // 'all', 'paid', 'pending', 'overdue'
  const [generatingPdfId, setGeneratingPdfId] = useState(null);

  useEffect(() => {
    const fetchInvoices = async () => {
      try {
        const response = await axiosClient.get("/client-portal/invoices");
        setInvoices(response.data.data || []);
      } catch (error) {
        console.error("Failed to load invoices", error);
      } finally {
        setLoading(false);
      }
    };
    fetchInvoices();
  }, []);

  const downloadInvoicePDF = async (invoice) => {
    setGeneratingPdfId(invoice._id);
    try {
      const doc = <InvoicePDF invoice={invoice} />;
      const blob = await pdf(doc).toBlob();
      const urlObj = URL.createObjectURL(blob);
      const a = window.document.createElement("a");
      a.href = urlObj;
      a.download = `Invoice-${invoice.invoiceNumber}.pdf`;
      a.click();
      URL.revokeObjectURL(urlObj);
      toast.success("Invoice PDF downloaded successfully!");
    } catch (err) {
      console.error("PDF generation failed:", err);
      toast.error("Failed to generate PDF receipt download");
    } finally {
      setGeneratingPdfId(null);
    }
  };

  const getStatusBadge = (status) => {
    switch (status) {
      case "paid":
        return (
          <span className="flex items-center gap-1.5 px-3 py-1 bg-green-50 text-green-700 dark:bg-green-500/10 dark:text-green-400 rounded-full text-xs font-bold w-max">
            <CheckCircleIcon className="w-4 h-4" />
            Paid
          </span>
        );
      case "pending":
        return (
          <span className="flex items-center gap-1.5 px-3 py-1 bg-amber-50 text-amber-700 dark:bg-amber-500/10 dark:text-amber-400 rounded-full text-xs font-bold w-max">
            <ClockIcon className="w-4 h-4" />
            Pending
          </span>
        );
      case "overdue":
        return (
          <span className="flex items-center gap-1.5 px-3 py-1 bg-red-50 text-red-700 dark:bg-red-500/10 dark:text-red-400 rounded-full text-xs font-bold w-max">
            <ExclamationCircleIcon className="w-4 h-4" />
            Overdue
          </span>
        );
      default:
        return (
          <span className="flex items-center gap-1.5 px-3 py-1 bg-gray-50 text-gray-700 dark:bg-white/10 dark:text-gray-400 rounded-full text-xs font-bold w-max">
            {status}
          </span>
        );
    }
  };

  const filteredInvoices = invoices.filter((inv) => {
    if (filter === "all") return true;
    return inv.status === filter;
  });

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
          Invoices & Payments
        </h1>
        <p className="text-xs md:text-sm text-gray-500 dark:text-gray-400 mt-1 font-light">
          Track invoices and payment receipts for your vehicle services.
        </p>
      </div>

      {/* Filters */}
      <div className="flex gap-2 border-b border-gray-250/50 dark:border-white/5 pb-3 overflow-x-auto">
        {["all", "paid", "pending", "overdue"].map((f) => (
          <button
            key={f}
            onClick={() => setFilter(f)}
            className={`px-3 py-1.5 rounded-full text-xs md:text-sm font-semibold capitalize transition-all ${
              filter === f
                ? "bg-primary text-white"
                : "text-gray-650 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-white/5"
            }`}
          >
            {f}
          </button>
        ))}
      </div>

      {/* Invoices List */}
      {filteredInvoices.length > 0 ? (
        <div className="bg-white dark:bg-dark-lighter rounded-3xl border border-gray-200 dark:border-white/5 shadow-sm overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="border-b border-gray-100 dark:border-white/5 bg-gray-50 dark:bg-white/5">
                  <th className="p-3 md:p-4 font-bold text-gray-650 dark:text-gray-400 text-[10px] md:text-xs uppercase">Invoice No</th>
                  <th className="p-3 md:p-4 font-bold text-gray-650 dark:text-gray-400 text-[10px] md:text-xs uppercase">Car</th>
                  <th className="p-3 md:p-4 font-bold text-gray-650 dark:text-gray-400 text-[10px] md:text-xs uppercase">Issued</th>
                  <th className="p-3 md:p-4 font-bold text-gray-650 dark:text-gray-400 text-[10px] md:text-xs uppercase">Amount</th>
                  <th className="p-3 md:p-4 font-bold text-gray-650 dark:text-gray-400 text-[10px] md:text-xs uppercase">Status</th>
                  <th className="p-3 md:p-4 font-bold text-gray-650 dark:text-gray-400 text-[10px] md:text-xs uppercase text-right">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100 dark:divide-white/5">
                {filteredInvoices.map((inv) => (
                  <tr key={inv._id} className="hover:bg-gray-50/50 dark:hover:bg-white/5 transition-colors">
                    <td className="p-3 md:p-4 font-bold text-xs md:text-sm text-gray-900 dark:text-white">{inv.invoiceNumber}</td>
                    <td className="p-3 md:p-4 font-semibold text-xs md:text-sm text-gray-700 dark:text-gray-300">
                      {inv.vehicle?.model || "N/A"}{" "}
                      <span className="text-[10px] md:text-xs text-gray-400 font-normal">({inv.vehicle?.registration || "N/A"})</span>
                    </td>
                    <td className="p-3 md:p-4 text-gray-500 dark:text-gray-400 text-[10px] md:text-xs">
                      {new Date(inv.issuedDate).toLocaleDateString("en-KE", { dateStyle: "medium" })}
                    </td>
                    <td className="p-3 md:p-4 font-bold text-xs md:text-sm text-gray-900 dark:text-white">
                      KES {inv.totalAmount.toLocaleString()}
                    </td>
                    <td className="p-3 md:p-4">{getStatusBadge(inv.status)}</td>
                    <td className="p-3 md:p-4 text-right">
                      <div className="flex justify-end gap-1.5 md:gap-3">
                        <button
                          onClick={() => setSelectedInvoice(inv)}
                          className="px-2.5 py-1 bg-gray-50 dark:bg-white/5 hover:bg-primary hover:text-white text-gray-700 dark:text-gray-300 rounded-xl text-[10px] md:text-xs font-bold transition-all"
                        >
                          Details
                        </button>
                        <button
                          disabled={generatingPdfId === inv._id}
                          onClick={() => downloadInvoicePDF(inv)}
                          className="p-1.5 bg-gray-50 dark:bg-white/5 hover:bg-secondary hover:text-white text-gray-600 dark:text-gray-400 rounded-xl transition-all disabled:opacity-50"
                          title="Download PDF"
                        >
                          {generatingPdfId === inv._id ? (
                            <ArrowPathIcon className="w-3.5 h-3.5 animate-spin" />
                          ) : (
                            <ArrowDownTrayIcon className="w-3.5 h-3.5" />
                          )}
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      ) : (
        <div className="text-center py-20 bg-white dark:bg-dark-lighter rounded-3xl border border-gray-250/50 dark:border-white/5">
          <DocumentTextIcon className="w-16 h-16 text-gray-300 dark:text-gray-700 mx-auto mb-4" />
          <h3 className="text-lg font-bold text-gray-900 dark:text-white">No invoices found</h3>
          <p className="text-sm text-gray-500 dark:text-gray-400 mt-1 max-w-sm mx-auto font-light leading-relaxed">
            There are no invoices matching this filter category.
          </p>
        </div>
      )}

      {/* Invoice Details Modal */}
      <Modal
        opened={!!selectedInvoice}
        onClose={() => setSelectedInvoice(null)}
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
        {selectedInvoice && (
          <div className="bg-white dark:bg-dark-lighter w-full rounded-3xl border border-gray-250/50 dark:border-white/5 shadow-2xl overflow-hidden max-h-[85vh] flex flex-col">
              {/* Header */}
              <div className="p-6 border-b border-gray-100 dark:border-white/5 flex justify-between items-center bg-gray-50 dark:bg-white/5">
                <div>
                  <h3 className="text-lg font-bold text-gray-900 dark:text-white">
                    Invoice {selectedInvoice.invoiceNumber}
                  </h3>
                  <p className="text-xs text-gray-400 mt-0.5">
                    Issued on {new Date(selectedInvoice.issuedDate).toLocaleDateString()}
                  </p>
                </div>
                <button
                  onClick={() => setSelectedInvoice(null)}
                  className="p-1 rounded-full text-gray-400 hover:bg-gray-150 dark:hover:bg-white/10 transition-colors"
                >
                  <XMarkIcon className="w-6 h-6" />
                </button>
              </div>

              {/* Scrollable Body */}
              <div className="p-6 overflow-y-auto space-y-6 flex-grow">
                {/* Client / Vehicle Summary */}
                <div className="grid grid-cols-2 gap-6 text-sm">
                  <div>
                    <h4 className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-2">Billed To</h4>
                    <p className="font-bold text-gray-900 dark:text-white">{selectedInvoice.clientSnapshot?.name}</p>
                    <p className="text-gray-500 dark:text-gray-400 mt-0.5">{selectedInvoice.clientSnapshot?.phone}</p>
                  </div>
                  <div>
                    <h4 className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-2">Vehicle</h4>
                    <p className="font-bold text-gray-900 dark:text-white">{selectedInvoice.vehicle?.model}</p>
                    <p className="text-gray-500 dark:text-gray-400 mt-0.5">{selectedInvoice.vehicle?.registration}</p>
                  </div>
                </div>

                {/* Items */}
                <div className="border border-gray-100 dark:border-white/5 rounded-2xl overflow-hidden">
                  <table className="w-full border-collapse text-sm">
                    <thead>
                      <tr className="bg-gray-50 dark:bg-white/5 border-b border-gray-100 dark:border-white/5 text-gray-650 dark:text-gray-450 font-bold">
                        <th className="p-3">Item Description</th>
                        <th className="p-3 text-right">Qty</th>
                        <th className="p-3 text-right">Amount</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-100 dark:divide-white/5">
                      {selectedInvoice.items.map((item, idx) => (
                        <tr key={idx}>
                          <td className="p-3 font-medium text-gray-900 dark:text-white">{item.description}</td>
                          <td className="p-3 text-right text-gray-500 dark:text-gray-400">{item.quantity}</td>
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
                    <span>KES {selectedInvoice.subTotal.toLocaleString()}</span>
                  </div>
                  {selectedInvoice.laborCharge > 0 && (
                    <div className="flex justify-between text-gray-550 dark:text-gray-400">
                      <span>Labor:</span>
                      <span>KES {selectedInvoice.laborCharge.toLocaleString()}</span>
                    </div>
                  )}
                  {selectedInvoice.taxAmount > 0 && (
                    <div className="flex justify-between text-gray-550 dark:text-gray-400">
                      <span>VAT ({selectedInvoice.taxRate}%):</span>
                      <span>KES {selectedInvoice.taxAmount.toLocaleString()}</span>
                    </div>
                  )}
                  {selectedInvoice.discount > 0 && (
                    <div className="flex justify-between text-green-600 font-medium">
                      <span>Discount:</span>
                      <span>- KES {selectedInvoice.discount.toLocaleString()}</span>
                    </div>
                  )}
                  <div className="flex justify-between text-base font-extrabold text-gray-900 dark:text-white border-t border-gray-100 dark:border-white/5 pt-2 mt-2">
                    <span>Total Paid:</span>
                    <span className="text-primary">KES {selectedInvoice.totalAmount.toLocaleString()}</span>
                  </div>
                </div>

                {/* Notes */}
                {selectedInvoice.notes && (
                  <div className="bg-gray-50 dark:bg-dark p-4 rounded-2xl border border-gray-100 dark:border-white/5 text-xs text-gray-600 dark:text-gray-400">
                    <span className="font-bold block mb-1">Notes:</span>
                    {selectedInvoice.notes}
                  </div>
                )}
              </div>

              {/* Actions Footer */}
              <div className="p-6 border-t border-gray-100 dark:border-white/5 bg-gray-50 dark:bg-white/5 flex gap-4">
                <button
                  disabled={generatingPdfId === selectedInvoice._id}
                  onClick={() => downloadInvoicePDF(selectedInvoice)}
                  className="flex-grow btn-primary py-2.5 rounded-xl flex items-center justify-center gap-2 font-bold text-sm disabled:opacity-50"
                >
                  {generatingPdfId === selectedInvoice._id ? (
                    <ArrowPathIcon className="w-5 h-5 animate-spin" />
                  ) : (
                    <ArrowDownTrayIcon className="w-5 h-5" />
                  )}
                  <span>Download PDF Receipt</span>
                </button>
                <button
                  onClick={() => setSelectedInvoice(null)}
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

export default PortalInvoices;
