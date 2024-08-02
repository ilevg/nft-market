import Image from "next/image";
import Link from "next/link";

interface ButtonProps {
  href: string
  onClick?: () => void | null
  iconSrc?: string
  alt?: string
  text: string
  bg: string
  color?: string
}

const MyButton: React.FC<ButtonProps> = ({
  href,
  onClick,
  iconSrc,
  alt,
  text,
  bg,
  color
}) => {
  return (
    <Link
      href={href}
      type="button"
      onClick={onClick}
      style={{
        width: '100%',
        height: '100%',
        backgroundColor: bg,
        color: color
      }}
      className={`flex justify-center items-center  rounded-[20px]`}
    >
      {iconSrc && alt && (
        <Image
          src={iconSrc}
          alt={alt}
          width={20}
          height={20}
          className="mr-2"
        />
      )}
      {text}
    </Link>
  );
};

export default MyButton;
