import React from 'react';

interface DataSet {
  id: number;
  name: string;
  description: string;
  items: number;
  createdAt: string;
}

const dummyData: DataSet[] = [
  { id: 1, name: 'Customers', description: 'Customer records and profiles', items: 1245, createdAt: '2024-01-10' },
  { id: 2, name: 'Orders', description: 'E-commerce order history', items: 5421, createdAt: '2024-02-03' },
  { id: 3, name: 'Products', description: 'Product catalog and metadata', items: 312, createdAt: '2023-12-20' },
  { id: 4, name: 'Locations', description: 'Warehouse and store locations', items: 48, createdAt: '2024-03-15' },
];

const DataList: React.FC = () => {
  return (
    <div style={{ padding: 16, fontFamily: 'Segoe UI, Roboto, sans-serif' }}>
      <h3 style={{ margin: '0 0 12px 0' }}>Data Sets</h3>
      <div style={{ display: 'grid', gap: 12 }}>
        {dummyData.map(ds => (
          <div
            key={ds.id}
            style={{
              border: '1px solid #e0e0e0',
              borderRadius: 6,
              padding: 12,
              background: '#fff',
              boxShadow: '0 1px 2px rgba(0,0,0,0.03)'
            }}
          >
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <div>
                <strong>{ds.name}</strong>
                <div style={{ color: '#666', fontSize: 13 }}>{ds.description}</div>
              </div>
              <div style={{ textAlign: 'right' }}>
                <div style={{ fontWeight: 600 }}>{ds.items.toLocaleString()}</div>
                <div style={{ fontSize: 12, color: '#888' }}>{ds.createdAt}</div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DataList;
