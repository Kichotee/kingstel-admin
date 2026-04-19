type Props = {
  title: string;
};
export const PageTitle = ({ title }: Props) => {
  return (
    <div>
      <p className="font-semibold text-sm sm:text-base">{title}</p>
    </div>
  );
};
