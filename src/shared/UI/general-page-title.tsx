type Props = {
  title: string;
};
export const PageTitle = ({ title }: Props) => {
  return (
    <div>
      <p className="font-semibold">{title}</p>
    </div>
  );
};
