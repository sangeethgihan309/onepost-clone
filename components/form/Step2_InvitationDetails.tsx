
import React from 'react';
import { LetterData, EventType } from '../../types';

interface Props {
  data: LetterData;
  setData: (data: LetterData) => void;
}

const Step2InvitationDetails: React.FC<Props> = ({ data, setData }) => {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setData({
      ...data,
      invitation: {
        ...data.invitation,
        [name]: value,
      },
    });
  };
  
  const handleGuestCountChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      setData({
          ...data,
          invitation: { ...data.invitation, guestCount: Number(e.target.value) }
      })
  }

  return (
    <div className="space-y-6 animate-fade-in">
      <h2 className="text-2xl font-bold text-primary">ආරාධනා පත්‍ර විස්තර</h2>
      
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">උත්සව වර්ගය</label>
        <select 
          name="eventType" 
          value={data.invitation.eventType} 
          onChange={handleChange} 
          className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-purple-500 focus:border-purple-500"
        >
          <option value="Birthday">Birthday Party</option>
          <option value="Wedding">Wedding</option>
          <option value="Party">Get Together / Party</option>
          <option value="Corporate">Corporate Event</option>
        </select>
      </div>

      <div className="grid grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">දිනය</label>
          <input 
            type="date" 
            name="date" 
            value={data.invitation.date} 
            onChange={handleChange} 
            className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-purple-500 focus:border-purple-500"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">වේලාව</label>
          <input 
            type="time" 
            name="time" 
            value={data.invitation.time} 
            onChange={handleChange} 
            className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-purple-500 focus:border-purple-500"
          />
        </div>
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">ස්ථානය (Venue)</label>
        <input 
          type="text" 
          name="venue" 
          value={data.invitation.venue} 
          onChange={handleChange} 
          placeholder="Hotel name or Address"
          className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-purple-500 focus:border-purple-500"
        />
      </div>

       <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">ආරාධිත අමුත්තන් ගණන</label>
        <div className="flex items-center space-x-4">
            <input 
                type="number" 
                min="10" 
                step="5"
                value={data.invitation.guestCount} 
                onChange={handleGuestCountChange}
                className="w-32 px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-purple-500 focus:border-purple-500"
            />
            <span className="text-sm text-gray-500">Cards</span>
        </div>
      </div>
    </div>
  );
};

export default Step2InvitationDetails;
