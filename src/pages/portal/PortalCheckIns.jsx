import React, { useEffect, useState } from "react";
import { useClientAuth } from "../../hooks/useClientAuth";
import {
  ClipboardDocumentCheckIcon,
  XMarkIcon,
  CheckIcon,
  CameraIcon,
} from "@heroicons/react/24/outline";
import { Modal } from "@mantine/core";
import { motion, AnimatePresence } from "framer-motion";

const PortalCheckIns = () => {
  const { axiosClient } = useClientAuth();
  const [checkins, setCheckins] = useState([]);
  const [selectedReport, setSelectedReport] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchCheckins = async () => {
      try {
        const response = await axiosClient.get("/client-portal/checkins");
        setCheckins(response.data.data || []);
      } catch (error) {
        console.error("Failed to load check-ins", error);
      } finally {
        setLoading(false);
      }
    };
    fetchCheckins();
  }, []);

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
        <div>
          <h1 className="text-lg md:text-2xl font-extrabold text-gray-900 dark:text-white tracking-tight">
            Vehicle Intake Check-Ins
          </h1>
          <p className="text-xs md:text-sm text-gray-500 dark:text-gray-400 mt-1 font-light">
            Review state checklists, mileage records, and damage logs captured during vehicle intake.
          </p>
        </div>
      </div>

      {checkins.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
          {checkins.map((report) => (
            <motion.div
              key={report._id}
              whileHover={{ y: -3 }}
              className="bg-white dark:bg-dark-lighter p-4 md:p-6 rounded-3xl border border-gray-200 dark:border-white/5 shadow-sm flex flex-col justify-between"
            >
              <div>
                <div className="flex justify-between items-start mb-3">
                  <div>
                    <h3 className="text-sm md:text-lg font-bold text-gray-900 dark:text-white">
                      Intake {report.reportId}
                    </h3>
                    <p className="text-[10px] md:text-xs text-gray-400 mt-0.5">
                      {new Date(report.checkInDate).toLocaleDateString("en-KE", {
                        dateStyle: "medium",
                      })}
                    </p>
                  </div>
                  <span
                    className={`px-2 py-0.5 rounded-full text-[10px] md:text-xs font-bold ${
                      report.status === "Checked-In"
                        ? "bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-400"
                        : report.status === "In-Service"
                        ? "bg-amber-100 text-amber-800 dark:bg-amber-900/30 dark:text-amber-400"
                        : "bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-400"
                    }`}
                  >
                    {report.status}
                  </span>
                </div>

                <div className="space-y-2 text-xs md:text-sm border-t border-b border-gray-100 dark:border-white/5 py-3 mb-3">
                  <div className="flex justify-between">
                    <span className="text-[10px] md:text-xs text-gray-400 font-medium">Mileage In:</span>
                    <span className="font-bold text-xs md:text-sm text-gray-800 dark:text-gray-200">
                      {report.mileageIn.toLocaleString()} KM
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-[10px] md:text-xs text-gray-400 font-medium">Fuel Level:</span>
                    <span className="font-bold text-xs md:text-sm text-gray-800 dark:text-gray-200">
                      {report.fuelLevel}
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-[10px] md:text-xs text-gray-400 font-medium">Attendant:</span>
                    <span className="font-bold text-xs md:text-sm text-gray-800 dark:text-gray-200">
                      {report.attendantName}
                    </span>
                  </div>
                </div>
              </div>

              <button
                onClick={() => setSelectedReport(report)}
                className="w-full btn-outline justify-center font-bold text-[10px] md:text-xs py-2"
              >
                View Intake Details
              </button>
            </motion.div>
          ))}
        </div>
      ) : (
        <div className="text-center py-20 bg-white dark:bg-dark-lighter rounded-3xl border border-gray-250/50 dark:border-white/5">
          <ClipboardDocumentCheckIcon className="w-16 h-16 text-gray-300 dark:text-gray-700 mx-auto mb-4" />
          <h3 className="text-lg font-bold text-gray-900 dark:text-white">No intake logs found</h3>
          <p className="text-sm text-gray-500 dark:text-gray-400 mt-1 max-w-sm mx-auto font-light leading-relaxed">
            There are no check-in logs or vehicle intake records associated with your account.
          </p>
        </div>
      )}

      {/* Checkin Report Modal */}
      <Modal
        opened={!!selectedReport}
        onClose={() => setSelectedReport(null)}
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
        {selectedReport && (
          <div className="bg-white dark:bg-dark-lighter w-full rounded-3xl border border-gray-200 dark:border-white/5 shadow-2xl overflow-hidden max-h-[85vh] flex flex-col">
              {/* Header */}
              <div className="p-6 border-b border-gray-100 dark:border-white/5 flex justify-between items-center bg-gray-50 dark:bg-white/5">
                <div>
                  <h3 className="text-lg font-bold text-gray-900 dark:text-white">
                    Intake Details - {selectedReport.reportId}
                  </h3>
                  <p className="text-xs text-gray-400 mt-0.5">
                    Logged: {new Date(selectedReport.checkInDate).toLocaleString("en-KE")}
                  </p>
                </div>
                <button
                  onClick={() => setSelectedReport(null)}
                  className="p-1 rounded-full text-gray-400 hover:bg-gray-100 dark:hover:bg-white/10 transition-colors"
                >
                  <XMarkIcon className="w-6 h-6" />
                </button>
              </div>

              {/* Body */}
              <div className="p-6 overflow-y-auto space-y-6 flex-grow text-sm">
                {/* Stats */}
                <div className="grid grid-cols-3 gap-4 text-center p-4 bg-gray-50 dark:bg-dark rounded-2xl border border-gray-100 dark:border-white/5">
                  <div>
                    <span className="text-xs text-gray-400 uppercase font-bold">Mileage In</span>
                    <p className="font-extrabold text-gray-900 dark:text-white mt-1">
                      {selectedReport.mileageIn.toLocaleString()} KM
                    </p>
                  </div>
                  <div>
                    <span className="text-xs text-gray-400 uppercase font-bold">Fuel Level</span>
                    <p className="font-extrabold text-gray-900 dark:text-white mt-1">
                      {selectedReport.fuelLevel}
                    </p>
                  </div>
                  <div>
                    <span className="text-xs text-gray-400 uppercase font-bold">Status</span>
                    <p className="font-extrabold text-primary mt-1">
                      {selectedReport.status}
                    </p>
                  </div>
                </div>

                {/* Valuables & Accessories */}
                <div>
                  <h4 className="font-bold text-gray-900 dark:text-white mb-3">Valuables & Accessories Checklist</h4>
                  <div className="grid grid-cols-2 gap-3">
                    {Object.entries(selectedReport.valuablesAndAccessories || {}).map(([key, value]) => {
                      if (key === "other") return null;
                      return (
                        <div key={key} className="flex items-center gap-2">
                          <div
                            className={`w-5 h-5 rounded-full flex items-center justify-center ${
                              value
                                ? "bg-green-100 text-green-700 dark:bg-green-500/20 dark:text-green-400"
                                : "bg-gray-100 text-gray-400 dark:bg-white/5"
                            }`}
                          >
                            {value ? <CheckIcon className="w-3.5 h-3.5" /> : <XMarkIcon className="w-3 h-3" />}
                          </div>
                          <span className="capitalize text-gray-700 dark:text-gray-350">
                            {key.replace(/([A-Z])/g, " $1")}
                          </span>
                        </div>
                      );
                    })}
                  </div>
                  {selectedReport.valuablesAndAccessories?.other && (
                    <p className="mt-3 text-xs text-gray-500 dark:text-gray-400 bg-gray-50 dark:bg-dark p-3 rounded-xl border border-gray-100 dark:border-white/5">
                      <span className="font-semibold block mb-0.5">Other items noted:</span>
                      {selectedReport.valuablesAndAccessories.other}
                    </p>
                  )}
                </div>

                {/* Damage Condition list */}
                <div>
                  <h4 className="font-bold text-gray-900 dark:text-white mb-3">Exterior Damage Condition Logs</h4>
                  {selectedReport.exteriorCondition && selectedReport.exteriorCondition.length > 0 ? (
                    <div className="border border-gray-100 dark:border-white/5 rounded-2xl overflow-hidden divide-y divide-gray-150 dark:divide-white/5">
                      {selectedReport.exteriorCondition.map((dmg, idx) => (
                        <div key={idx} className="flex justify-between p-3 bg-gray-50/50 dark:bg-white/5">
                          <span className="font-medium text-gray-800 dark:text-gray-300 capitalize">{dmg.part}</span>
                          <span className="font-bold text-red-500 text-xs bg-red-500/10 px-2.5 py-0.5 rounded-full capitalize">
                            {dmg.damageType}
                          </span>
                        </div>
                      ))}
                    </div>
                  ) : (
                    <div className="p-4 text-center bg-green-500/5 border border-green-500/10 rounded-2xl text-green-700 dark:text-green-400 font-medium">
                      No exterior damages or scratch logs captured. Vehicle body clean.
                    </div>
                  )}
                </div>

                {/* Photos */}
                {selectedReport.photos && selectedReport.photos.length > 0 && (
                  <div>
                    <h4 className="font-bold text-gray-900 dark:text-white mb-3 flex items-center gap-1.5">
                      <CameraIcon className="w-5 h-5 text-primary" />
                      Intake Photos
                    </h4>
                    <div className="grid grid-cols-3 gap-3">
                      {selectedReport.photos.map((photo, index) => (
                        <a key={index} href={photo} target="_blank" rel="noreferrer" className="block relative group aspect-video rounded-xl overflow-hidden border border-gray-200 dark:border-white/5 shadow-sm">
                          <img src={photo} alt={`Intake ${index}`} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" />
                        </a>
                      ))}
                    </div>
                  </div>
                )}

                {/* Digital Signature */}
                {selectedReport.clientSignature && (
                  <div className="border-t border-gray-100 dark:border-white/5 pt-4">
                    <h4 className="font-bold text-gray-900 dark:text-white mb-2">Customer Authorization Signature</h4>
                    <div className="bg-gray-50 dark:bg-dark p-3 rounded-2xl border border-gray-150 dark:border-white/5 w-64 max-w-full">
                      <img src={selectedReport.clientSignature} alt="Authorized Signature" className="w-full h-auto max-h-24 object-contain filter dark:invert dark:hue-rotate-180" />
                    </div>
                    <p className="text-xxs text-gray-400 mt-1">Authorized by client. Attendant: {selectedReport.attendantName}</p>
                  </div>
                )}
              </div>

              {/* Footer */}
              <div className="p-6 border-t border-gray-100 dark:border-white/5 bg-gray-50 dark:bg-white/5 text-right">
                <button
                  onClick={() => setSelectedReport(null)}
                  className="px-6 py-2.5 border border-gray-200 dark:border-white/10 text-gray-655 dark:text-gray-300 rounded-xl text-sm font-semibold hover:bg-gray-100 dark:hover:bg-white/5 transition-colors"
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

export default PortalCheckIns;
