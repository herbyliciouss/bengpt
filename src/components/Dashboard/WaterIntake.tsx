import React from 'react';

export const WaterIntake: React.FC = () => {
  const totalGlasses = 6;
  const consumedGlasses = 3;
  const glassVolumes = [500, 1500, 600, 0, 0];

  return (
    <section className="bg-white rounded-2xl p-6 space-y-6">
      <h2 className="text-xl font-semibold">Water Intake</h2>
      
      <div className="space-y-2">
        <div className="text-gray-600">{consumedGlasses} of {totalGlasses} glasses consumed</div>
        <div className="flex items-center gap-2">
          <span className="text-2xl font-bold text-blue-500">2.6</span>
          <span className="text-gray-400">/5 ML</span>
        </div>
      </div>

      <div className="flex justify-between">
        {glassVolumes.map((volume, index) => (
          <div key={index} className="relative w-12 h-16">
            <div 
              className={`absolute bottom-0 w-full rounded-b-lg ${
                volume > 0 ? 'bg-blue-200' : 'bg-gray-100'
              }`}
              style={{ height: '100%' }}
            >
              <div 
                className="absolute bottom-0 w-full bg-blue-400 rounded-b-lg transition-all duration-500"
                style={{ height: volume ? '60%' : '0%' }}
              />
            </div>
            {volume > 0 && (
              <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 text-xs text-gray-500">
                {volume}
                <span className="text-[10px]">ML</span>
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};