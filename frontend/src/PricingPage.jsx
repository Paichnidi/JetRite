import React, { useState } from 'react';
import { motion } from 'framer-motion';
import './App.css';

const pricingData = [
  { service: 'Exterior Wash', description: 'Complete airframe rinse + dry', price: '$150' },
  { service: 'Wax & Paint Protection', description: 'Hand-applied aircraft-safe wax', price: '$200' },
  { service: 'Interior Detailing', description: 'Seats, carpets, and cockpit touch-up', price: '$180' },
  { service: 'Leather Treatment', description: 'Clean + condition leather surfaces', price: '$80' },
  { service: 'Carpet Shampoo', description: 'Steam/deep clean high-wear areas', price: '$60' },
  { service: 'Disinfection', description: 'Fogging + contact surface cleaning', price: '$50' },
  { service: 'Full Bundle', description: 'All-in-one interior + exterior package', price: '$450' },
];

const addonData = [
  { addon: 'Bug Removal (Heavy Use)', price: '$40' },
  { addon: 'Tire Shine', price: '$20' },
  { addon: 'Belly Degrease', price: '$30' },
];

const PricingPage = () => {
  const [selectedItems, setSelectedItems] = useState({});

  const toggleItem = (key) => {
    setSelectedItems((prev) => {
      const isFullBundle = key === 'Full Bundle';
      const currentlySelected = !!prev[key];
      const isService = pricingData.some((item) => item.service === key);
      const isAddon = addonData.some((item) => item.addon === key);

      // Handle Full Bundle logic
      if (isFullBundle) {
        if (currentlySelected) {
          // Deselect Full Bundle only, keep all addons
          const updated = { ...prev };
          delete updated['Full Bundle'];
          return updated;
        } else {
          // Select Full Bundle: keep existing addons, clear other services except addons
          const updated = {};
          // Preserve only addons
          Object.keys(prev).forEach((k) => {
            if (addonData.some((item) => item.addon === k)) {
              updated[k] = true;
            }
          });
          updated['Full Bundle'] = true;
          return updated;
        }
      }

      // For other items
      const updated = { ...prev, [key]: !currentlySelected };
      // Only deselect Full Bundle when toggling a service, not addons
      if (isService && prev['Full Bundle']) {
        delete updated['Full Bundle'];
      }
      return updated;
    });
  };

  const calculateTotal = () => {
    let total = 0;
    pricingData.forEach((item) => {
      if (selectedItems[item.service]) {
        total += parseInt(item.price.replace('$', ''), 10);
      }
    });
    addonData.forEach((item) => {
      if (selectedItems[item.addon]) {
        total += parseInt(item.price.replace('$', ''), 10);
      }
    });
    return total;
  };

  const totalPrice = calculateTotal();

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-5xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-bold heading-gradient mb-4">Small Aircraft Pricing</h2>
          <p className="text-lg text-gray-600">
            Select the services and add-ons you want to see your estimated total instantly.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {pricingData.map((item) => (
            <div
              key={item.service}
              className="bg-white rounded-2xl p-6 shadow-soft card-hover flex items-start cursor-pointer"
              onClick={() => toggleItem(item.service)}
            >
              <input
                type="checkbox"
                checked={!!selectedItems[item.service]}
                readOnly
                className="mr-4 mt-1"
              />
              <div>
                <h3 className="text-2xl font-semibold mb-2">{item.service}</h3>
                <p className="text-gray-600 mb-4">{item.description}</p>
                <span className="text-xl font-bold">{item.price}</span>
              </div>
            </div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mt-16"
        >
          <h3 className="text-2xl font-semibold mb-4 text-center">Add-ons</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {addonData.map((item) => (
              <div
                key={item.addon}
                className="bg-white rounded-2xl p-4 shadow-soft card-hover flex items-center cursor-pointer"
                onClick={() => toggleItem(item.addon)}
              >
                <input
                  type="checkbox"
                  checked={!!selectedItems[item.addon]}
                  readOnly
                  className="mr-4"
                />
                <div>
                  <p className="text-gray-700 mb-2">{item.addon}</p>
                  <span className="font-bold">{item.price}</span>
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        <div className="text-right mt-8 text-2xl font-bold">
          Total: ${totalPrice}
        </div>

        <div className="text-center mt-12 space-x-4">
          <a
            href="/quote"
            className="btn-primary px-8 py-3 rounded-lg text-white text-lg shadow-md hover:shadow-lg"
          >
            Request a Quote
          </a>
          <a
            href="/"
            className="inline-block bg-gray-100 border border-gray-300 text-gray-700 px-6 py-3 rounded-full hover:bg-gray-200 transition"
          >
            ⬅ Back to Home
          </a>
        </div>
      </div>
    </section>
  );
};

export default PricingPage;
