import Link from "next/link";

const FooterLink = ({
  href,
  text,
  linkText,
}: {
  href: string;
  text: string;
  linkText: string;
}) => {
  return (
    <div className="text-center pt-4">
      <p className="text-sm text-gray-500">
        {text}
        {` `}
        <Link href={href} className="footer-link">
          {linkText}
        </Link>
      </p>
    </div>
  );
};

export default FooterLink;
