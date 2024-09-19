type FooterSectionProps = {
  title: string;
  children: React.ReactNode;
};

const FooterSection = ({ title, children }: FooterSectionProps) => {
  return (
    <div className="w-full md:w-1/4 md:mb-0 mb-6">
      <h4 className="text-md font-semibold mb-2">{title}</h4>
      {children}
    </div>
  );
};

export default FooterSection;
