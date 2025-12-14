
import React, { useState } from 'react';
import { LetterData } from '../../types';
import { MAX_CHARACTERS } from '../../constants';
import { getPoeticQuote } from '../../services/geminiService';

interface Props {
  data: LetterData;
  setData: (data: LetterData) => void;
}

const Step2MessageInput: React.FC<Props> = ({ data, setData }) => {
  const [isLoadingQuote, setIsLoadingQuote] = useState(false);

  const handleContentChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setData({
      ...data,
      message: { ...data.message, content: e.target.value },
    });
  };
  
  const handleFontChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
     setData({
      ...data,
      message: { ...data.message, font: e.target.value as 'Sinhala' | 'English' },
    });
  };

  const handleFontSizeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setData({
        ...data,
        message: { ...data.message, fontSize: Number(e.target.value) }
    })
  }

  const addPoeticQuote = async () => {
    setIsLoadingQuote(true);
    const quote = await getPoeticQuote(data.message.content);
    const newContent = `${data.message.content}\n\n${quote}`;
    if (newContent.length <= MAX_CHARACTERS) {
        setData({
            ...data,
            message: { ...data.message, content: newContent },
        });
    } else {
        alert("Quote is too long to add.");
    }
    setIsLoadingQuote(false);
  };

  const charCount = data.message.content.length;

  return (
    <div className="space-y-6 animate-fade-in">
      <h2 className="text-2xl font-bold text-primary">ඔබේ පණිවිඩය</h2>
      <div className="grid grid-cols-2 gap-4">
        <div>
          <label htmlFor="font" className="block text-sm font-medium text-gray-700 mb-1">අකුරු වර්ගය</label>
          <select id="font" value={data.message.font} onChange={handleFontChange} className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-brand-blue focus:border-brand-blue">
            <option value="Sinhala">සිංහල</option>
            <option value="English">English</option>
          </select>
        </div>
         <div>
          <label htmlFor="fontSize" className="block text-sm font-medium text-gray-700 mb-1">අකුරු ප්‍රමාණය: {data.message.fontSize}px</label>
          <input type="range" id="fontSize" min="12" max="24" value={data.message.fontSize} onChange={handleFontSizeChange} className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer" />
        </div>
      </div>
      <div>
        <textarea
          rows={10}
          value={data.message.content}
          onChange={handleContentChange}
          maxLength={MAX_CHARACTERS}
          placeholder="ඔබේ පණිවිඩය මෙහි ටයිප් කරන්න..."
          className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-brand-blue focus:border-brand-blue"
        ></textarea>
        <div className="flex justify-between items-center text-sm text-gray-500 mt-1">
            <button onClick={addPoeticQuote} disabled={isLoadingQuote} className="text-brand-blue hover:underline disabled:opacity-50 disabled:cursor-not-allowed">
                {isLoadingQuote ? 'සොයමින්...' : '✨ කාව්‍යමය උපුටා දැක්වීමක් එක් කරන්න'}
            </button>
            <span className={`${charCount > MAX_CHARACTERS - 50 ? 'text-red-500' : ''}`}>{charCount} / {MAX_CHARACTERS}</span>
        </div>
      </div>
    </div>
  );
};

export default Step2MessageInput;
