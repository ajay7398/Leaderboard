import { useSelector } from "react-redux";
import { format } from "date-fns";
import React from "react";
const ClaimHistory = () => {
  const history = useSelector((state) => state.history.history);

  return (
    <div className="mt-6 p-4 bg-white rounded-xl shadow-md">
      <h2 className="text-xl text-slate-600 font-semibold mb-3 border-b pb-1">Claim History</h2>

      {!history[0] || history[0].length === 0 ? (
        <p className="text-gray-400 italic">No claims yet...</p>
      ) : (
        <ul className="space-y-3 max-h-64 overflow-y-auto">
          {history[0].map((entry, idx) => (
            <li
              key={idx}
              className="flex justify-between items-center border-b pb-2"
            >
              <div>
                <p className="font-medium">{entry.userId.name}</p>
                <p className="text-sm text-gray-500">
                  {format(new Date(entry.claimedAt), "dd MMM yyyy, hh:mm a")}
                </p>
              </div>
              <div className="text-green-600 font-bold text-lg">
                +{entry.points} pts
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default ClaimHistory;
