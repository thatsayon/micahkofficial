'use client';

import { useState } from 'react';
import { Edit, Trash2, Plus } from 'lucide-react';
import './services.css';
import AddServiceModal from '../../components/AddServiceModal';

const services = [
  { id: 1, title: 'AC Installation', category: 'Cooling', desc: 'Professional installation of high-efficiency air conditioning systems.', img: 'https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?w=400&q=80' },
  { id: 2, title: 'HVAC Maintenance', category: 'Maintenance', desc: 'Comprehensive seasonal tune-ups to keep your system running efficiently.', img: 'https://images.unsplash.com/photo-1581092160562-40aa08e78837?w=400&q=80' },
  { id: 3, title: 'Air Duct Cleaning', category: 'Indoor Air Quality', desc: 'Remove dust, allergens, and debris from your home\'s ductwork.', img: 'https://images.unsplash.com/photo-1584622650111-993a426fbf0a?w=400&q=80' },
  { id: 4, title: 'Furnace Repair', category: 'Heating', desc: 'Fast, reliable repairs for all makes and models of furnaces.', img: 'https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?w=400&q=80' },
  { id: 5, title: 'Thermostat Installation', category: 'Smart Home', desc: 'Upgrade to a smart thermostat for better comfort and energy savings.', img: 'https://images.unsplash.com/photo-1558002038-1055907df827?w=400&q=80' },
  { id: 6, title: 'Commercial HVAC', category: 'Commercial', desc: 'Tailored heating and cooling solutions for businesses of all sizes.', img: 'https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?w=400&q=80' },
];

export default function ServicesManagement() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className="services-page">
      <div className="page-header">
        <div>
          <h1 className="page-title">Services Management</h1>
          <p className="page-subtitle">Manage the HVAC services displayed on your website.</p>
        </div>
        <button className="btn-primary flex-btn" onClick={() => setIsModalOpen(true)}>
          <Plus size={18} /> Add New Service
        </button>
      </div>

      <div className="services-controls">
        <input type="text" placeholder="Search services..." className="search-input" />
        <select className="filter-select">
          <option>All Categories</option>
          <option>Cooling</option>
          <option>Heating</option>
        </select>
      </div>

      <div className="services-grid">
        {services.map((service) => (
          <div key={service.id} className="card service-card">
            <div className="service-image" style={{ backgroundImage: `url(${service.img})` }}></div>
            <div className="service-content">
              <span className="service-category">{service.category}</span>
              <h3 className="service-title">{service.title}</h3>
              <p className="service-desc">{service.desc}</p>
            </div>
            <div className="service-actions">
              <button className="action-btn"><Edit size={16} /></button>
              <button className="action-btn text-danger"><Trash2 size={16} /></button>
            </div>
          </div>
        ))}
      </div>

      {isModalOpen && <AddServiceModal onClose={() => setIsModalOpen(false)} />}
    </div>
  );
}
