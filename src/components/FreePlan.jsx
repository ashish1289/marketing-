import React from 'react';

const FreePlan = () => {
  return (
    <div style={{ 
      minHeight: '100vh', 
      fontFamily: 'Inter, -apple-system, BlinkMacSystemFont, sans-serif',
      backgroundColor: '#111827',
      color: 'white',
      padding: '1rem'
    }}>
      <div style={{ maxWidth: '1400px', margin: '0 auto' }}>
        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))', 
          gap: '2rem',
          padding: '1rem'
        }}>
          
          {/* Card 1 - Plan Information */}
          <div style={{
            backgroundColor: '#1f2937',
            borderRadius: '16px',
            padding: '2rem',
            boxShadow: '0 10px 25px rgba(0, 0, 0, 0.3)',
            border: '1px solid #374151',
            transition: 'transform 0.3s ease, box-shadow 0.3s ease'
          }}
          onMouseEnter={(e) => {
            // e.target.style.transform = 'translateY(-5px)';
            // e.target.style.boxShadow = '0 20px 40px rgba(0, 0, 0, 0.4)';
          }}
          onMouseLeave={(e) => {
            // e.target.style.transform = 'translateY(0)';
            // e.target.style.boxShadow = '0 10px 25px rgba(0, 0, 0, 0.3)';
          }}>
            
            <div style={{ textAlign: 'center', marginBottom: '2rem' }}>
              <div style={{
                width: '60px',
                height: '60px',
                backgroundColor: '#3b82f6',
                borderRadius: '50%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                margin: '0 auto 1rem',
                fontSize: '1.5rem'
              }}>
                📋
              </div>
              <h3 style={{ 
                fontSize: '1.8rem', 
                fontWeight: '700', 
                marginBottom: '0.5rem',
                background: 'linear-gradient(135deg, #3b82f6, #8b5cf6)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent'
              }}>
                Free Trial
              </h3>
              <p style={{ fontSize: '1rem', color: '#9ca3af', margin: '0' }}>Current Plan</p>
            </div>
            
            <div style={{ 
              backgroundColor: '#111827', 
              borderRadius: '12px', 
              padding: '1.5rem', 
              marginBottom: '2rem',
              border: '1px solid #374151'
            }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1rem' }}>
                <span style={{ fontSize: '0.9rem', color: '#9ca3af' }}>Renewal Date</span>
                <span style={{ fontSize: '1.1rem', fontWeight: '600', color: '#10b981' }}>Aug. 29, 2025</span>
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1rem' }}>
                <span style={{ fontSize: '0.9rem', color: '#9ca3af' }}>Plan Status</span>
                <span style={{ 
                  fontSize: '0.8rem', 
                  fontWeight: '600', 
                  color: '#10b981',
                  backgroundColor: 'rgba(16, 185, 129, 0.1)',
                  padding: '0.25rem 0.75rem',
                  borderRadius: '20px',
                  border: '1px solid rgba(16, 185, 129, 0.3)'
                }}>
                  Active
                </span>
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <span style={{ fontSize: '0.9rem', color: '#9ca3af' }}>Days Remaining</span>
                <span style={{ fontSize: '1.1rem', fontWeight: '600' }}>21</span>
              </div>
            </div>
            
            <button style={{ 
              backgroundColor: '#3b82f6', 
              border: 'none',
              borderRadius: '12px',
              fontWeight: '600',
              padding: '1rem 2rem',
              color: 'white',
              cursor: 'pointer',
              fontSize: '1rem',
              width: '100%',
              transition: 'all 0.3s ease',
              boxShadow: '0 4px 15px rgba(59, 130, 246, 0.3)'
            }}
            onMouseEnter={(e) => {
              e.target.style.backgroundColor = '#2563eb';
              e.target.style.transform = 'translateY(-2px)';
            }}
            onMouseLeave={(e) => {
              e.target.style.backgroundColor = '#3b82f6';
              e.target.style.transform = 'translateY(0)';
            }}>
              Change Plan
            </button>
          </div>

          {/* Card 2 - Credits */}
          <div style={{
            backgroundColor: '#1f2937',
            borderRadius: '16px',
            padding: '2rem',
            boxShadow: '0 10px 25px rgba(0, 0, 0, 0.3)',
            border: '1px solid #374151',
            transition: 'transform 0.3s ease, box-shadow 0.3s ease',
            textAlign: 'center'
          }}
          onMouseEnter={(e) => {
            // e.target.style.transform = 'translateY(-5px)';
            // e.target.style.boxShadow = '0 20px 40px rgba(0, 0, 0, 0.4)';
          }}
          onMouseLeave={(e) => {
            // e.target.style.transform = 'translateY(0)';
            // e.target.style.boxShadow = '0 10px 25px rgba(0, 0, 0, 0.3)';
          }}>
            
            <div style={{ marginBottom: '2rem' }}>
              <div style={{
                width: '60px',
                height: '60px',
                backgroundColor: '#10b981',
                borderRadius: '50%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                margin: '0 auto 1rem',
                fontSize: '1.5rem'
              }}>
                💳
              </div>
              <h3 style={{ 
                fontSize: '1.8rem', 
                fontWeight: '700', 
                marginBottom: '0.5rem',
                background: 'linear-gradient(135deg, #10b981, #06b6d4)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent'
              }}>
                Credits Overview
              </h3>
            </div>
            
            <div style={{ position: 'relative', marginBottom: '2rem' }}>
              <div style={{ position: 'relative', display: 'inline-block' }}>
                <h1 style={{ 
                  fontSize: '4rem', 
                  fontWeight: '300', 
                  marginBottom: '0.5rem', 
                  margin: '0',
                  background: 'linear-gradient(135deg, #10b981, #06b6d4)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent'
               }}>
                  50
                </h1>
                <p style={{ fontSize: '1.1rem', color: '#9ca3af', marginBottom: '0' }}>Remaining Credits</p>
                
                {/* Circular Progress */}
                <div style={{ 
                  position: 'absolute', 
                  top: '50%', 
                  left: '50%', 
                  transform: 'translate(-50%, -50%)',
                  zIndex: -1
                }}>
                  <svg width="180" height="180" style={{
                    position: 'absolute',
                    top: '50%',
                    left: '50%',
                    transform: 'translate(-50%, -50%)'
                  }}>
                    <circle
                      cx="90"
                      cy="90"
                      r="70"
                      fill="none"
                      stroke="rgba(255,255,255,0.1)"
                      strokeWidth="6"
                    />
                    <circle
                      cx="90"
                      cy="90"
                      r="70"
                      fill="none"
                      stroke="url(#gradient)"
                      strokeWidth="6"
                      strokeDasharray={`${2 * Math.PI * 70}`}
                      strokeDashoffset={`${2 * Math.PI * 70 * 0.0}`}
                      transform="rotate(-90 90 90)"
                      style={{ transition: 'stroke-dashoffset 1s ease-in-out' }}
                    />
                    <defs>
                      <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                        <stop offset="0%" stopColor="#10b981" />
                        <stop offset="100%" stopColor="#06b6d4" />
                      </linearGradient>
                    </defs>
                  </svg>
                </div>
              </div>
            </div>
            
            {/* Stats Grid */}
            <div style={{ 
              display: 'grid', 
              gridTemplateColumns: 'repeat(3, 1fr)', 
              gap: '1rem', 
              marginBottom: '2rem' 
            }}>
              <div style={{ 
                backgroundColor: '#111827', 
                borderRadius: '8px', 
                padding: '1rem', 
                textAlign: 'center',
                border: '1px solid #374151'
              }}>
                <div style={{ 
                  width: '8px', 
                  height: '8px', 
                  backgroundColor: '#10b981',
                  borderRadius: '50%',
                  margin: '0 auto 0.5rem'
                }}></div>
                <div style={{ fontSize: '0.8rem', color: '#9ca3af', marginBottom: '0.25rem' }}>Sent</div>
                <div style={{ fontSize: '1.2rem', fontWeight: '600' }}>0</div>
              </div>
              
              <div style={{ 
                backgroundColor: '#111827', 
                borderRadius: '8px', 
                padding: '1rem', 
                textAlign: 'center',
                border: '1px solid #374151'
              }}>
                <div style={{ 
                  width: '8px', 
                  height: '8px', 
                  backgroundColor: '#f59e0b',
                  borderRadius: '50%',
                  margin: '0 auto 0.5rem'
                }}></div>
                <div style={{ fontSize: '0.8rem', color: '#9ca3af', marginBottom: '0.25rem' }}>In Progress</div>
                <div style={{ fontSize: '1.2rem', fontWeight: '600' }}>0</div>
              </div>
              
              <div style={{ 
                backgroundColor: '#111827', 
                borderRadius: '8px', 
                padding: '1rem', 
                textAlign: 'center',
                border: '1px solid #374151'
              }}>
                <div style={{ 
                  width: '8px', 
                  height: '8px', 
                  backgroundColor: '#06b6d4',
                  borderRadius: '50%',
                  margin: '0 auto 0.5rem'
                }}></div>
                <div style={{ fontSize: '0.8rem', color: '#9ca3af', marginBottom: '0.25rem' }}>Quota</div>
                <div style={{ fontSize: '1.2rem', fontWeight: '600' }}>50</div>
              </div>
            </div>
            
            <div style={{ 
              backgroundColor: '#111827', 
              borderRadius: '12px', 
              padding: '1rem', 
              border: '1px solid #374151'
            }}>
              <div style={{ fontSize: '0.9rem', color: '#9ca3af', marginBottom: '0.5rem' }}>Credit Usage</div>
              <div style={{ 
                backgroundColor: '#374151', 
                height: '8px', 
                borderRadius: '4px', 
                overflow: 'hidden' 
              }}>
                <div style={{ 
                  width: '0%', 
                  height: '100%', 
                  background: 'linear-gradient(90deg, #10b981, #06b6d4)',
                  borderRadius: '4px',
                  transition: 'width 1s ease-in-out'
                }}></div>
              </div>
            </div>
          </div>

          {/* Card 3 - WhatsApp */}
          <div style={{
            backgroundColor: '#1f2937',
            borderRadius: '16px',
            padding: '2rem',
            boxShadow: '0 10px 25px rgba(0, 0, 0, 0.3)',
            border: '1px solid #374151',
            transition: 'transform 0.3s ease, box-shadow 0.3s ease'
          }}
          onMouseEnter={(e) => {
            e.target.style.transform = 'translateY(-5px)';
            e.target.style.boxShadow = '0 20px 40px rgba(0, 0, 0, 0.4)';
          }}
          onMouseLeave={(e) => {
            e.target.style.transform = 'translateY(0)';
            e.target.style.boxShadow = '0 10px 25px rgba(0, 0, 0, 0.3)';
          }}>
            
            <div style={{ textAlign: 'center', marginBottom: '2rem' }}>
              <div style={{
                width: '60px',
                height: '60px',
                backgroundColor: '#25d366',
                borderRadius: '50%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                margin: '0 auto 1rem',
                fontSize: '1.5rem'
              }}>
                📱
              </div>
              <h3 style={{ 
                fontSize: '1.8rem', 
                fontWeight: '700', 
                marginBottom: '0.5rem',
                background: 'linear-gradient(135deg, #25d366, #128c7e)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent'
              }}>
                WhatsApp Integration
              </h3>
            </div>
            
            <div style={{ textAlign: 'center', marginBottom: '2rem' }}>
              <h1 style={{ 
                fontSize: '4rem', 
                fontWeight: '300', 
                marginBottom: '0.5rem', 
                margin: '0',
                background: 'linear-gradient(135deg, #25d366, #128c7e)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent'
              }}>
                0
              </h1>
              <p style={{ fontSize: '1.1rem', color: '#9ca3af', marginBottom: '0' }}>WhatsApp Quota Used</p>
            </div>
            
            <div style={{ 
              backgroundColor: '#111827', 
              borderRadius: '12px', 
              padding: '1.5rem', 
              marginBottom: '2rem',
              border: '1px solid #374151'
            }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1rem' }}>
                <span style={{ fontSize: '0.9rem', color: '#9ca3af' }}>Connection Status</span>
                <span style={{ 
                  fontSize: '0.8rem', 
                  fontWeight: '600', 
                  color: '#ef4444',
                  backgroundColor: 'rgba(239, 68, 68, 0.1)',
                  padding: '0.25rem 0.75rem',
                  borderRadius: '20px',
                  border: '1px solid rgba(239, 68, 68, 0.3)'
                }}>
                  Disconnected
                </span>
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1rem' }}>
                <span style={{ fontSize: '0.9rem', color: '#9ca3af' }}>Max Connections</span>
                <span style={{ fontSize: '1.1rem', fontWeight: '600' }}>1</span>
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1rem' }}>
                <span style={{ fontSize: '0.9rem', color: '#9ca3af' }}>Messages Sent</span>
                <span style={{ fontSize: '1.1rem', fontWeight: '600' }}>0</span>
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <span style={{ fontSize: '0.9rem', color: '#9ca3af' }}>Last Activity</span>
                <span style={{ fontSize: '0.9rem', color: '#6b7280' }}>Never</span>
              </div>
            </div>
            
            <button style={{ 
              backgroundColor: '#25d366', 
              border: 'none',
              borderRadius: '12px',
              fontWeight: '600',
              padding: '1rem 2rem',
              color: 'white',
              cursor: 'pointer',
              fontSize: '1rem',
              width: '100%',
              transition: 'all 0.3s ease',
              boxShadow: '0 4px 15px rgba(37, 211, 102, 0.3)'
            }}
            onMouseEnter={(e) => {
              e.target.style.backgroundColor = '#128c7e';
              e.target.style.transform = 'translateY(-2px)';
            }}
            onMouseLeave={(e) => {
              e.target.style.backgroundColor = '#25d366';
              e.target.style.transform = 'translateY(0)';
            }}>
              Connect WhatsApp
            </button>
          </div>
          
        </div>
      </div>
    </div>
  );
};

export default FreePlan;
