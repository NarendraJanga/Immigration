import React, { useState, useEffect } from 'react';
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';

const Footer = () => {
  const [loading, setLoading] = useState(true);

  // Simulate loading time
  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 500); // Simulate loading duration of 2 seconds

    return () => clearTimeout(timer);
  }, []);

  const copyrightYear = new Date().getFullYear();
  const contactInfo = [
    {
      label: "Email",
      value: "services@immi-nation.com",
    },
    {
      label: "Phone",
      value: "+91 9676567121",
    },
    {
      label: "Phone",
      value: "+91 9533840632",
    },
  ];

  return (
    <div className="bg-dark text-white text-center py-3">
      {loading ? (
        <>
          <Skeleton width={200} className="mb-2" />
          <Skeleton width={300} count={2} />
        </>
      ) : (
        <>
          <p className="mb-0">
            &copy; {copyrightYear} Passport Services. All Rights Reserved.
          </p>
          <small>
            Contact us: {contactInfo.map((info, index) => (
              <span key={index}>
                {info.label}: {info.value}{index < contactInfo.length - 1 ? " | " : ""}
              </span>
            ))}
          </small>
        </>
      )}
    </div>
  );
};

export default Footer;